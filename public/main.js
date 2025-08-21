(() => {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const form = document.getElementById('contact-form');
	const statusEl = document.getElementById('form-status');
	if (form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			statusEl.textContent = 'Envoi en cours…';
			const data = Object.fromEntries(new FormData(form));
			if (!data.name || !data.email || !data.message) {
				statusEl.textContent = 'Veuillez remplir les champs requis.';
				return;
			}
			try {
				const res = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				});
				const body = await res.json();
				if (body.ok) {
					statusEl.textContent = 'Merci ! Nous revenons vers vous rapidement.';
					form.reset();
				} else {
					statusEl.textContent = 'Une erreur est survenue. Réessayez.';
				}
			} catch (err) {
				statusEl.textContent = 'Impossible de contacter le serveur.';
			}
		});
	}
})();