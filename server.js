import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"],
			styleSrc: ["'self'", "'unsafe-inline'"],
			scriptSrc: ["'self'"],
			imgSrc: ["'self'", 'data:'],
			fontSrc: ["'self'", 'data:'],
			connectSrc: ["'self'"],
			formAction: ["'self'"],
			upgradeInsecureRequests: []
		}
	},
	referrerPolicy: { policy: 'no-referrer' },
	xssFilter: true,
	hidePoweredBy: true
}));

app.use(compression());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

const rateLimiter = new RateLimiterMemory({ points: 60, duration: 60 });
app.use(async (req, res, next) => {
	try { await rateLimiter.consume(req.ip); next(); }
	catch { res.status(429).send('Too Many Requests'); }
});

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/contact', (req, res) => {
	// Placeholder; will implement with validation and honeypot
	const { name, email, message, token } = req.body || {};
	if (typeof token === 'string' && token.trim() !== '') {
		return res.status(400).json({ ok: false });
	}
	if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'Invalid' });
	return res.json({ ok: true });
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
	console.log(`Onix site running on http://localhost:${port}`);
});