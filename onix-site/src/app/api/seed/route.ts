import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST() {
  try {
    const adminEmail = "admin@onix.local";
    const password = "onix1234";
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
      where: { email: adminEmail },
      update: { passwordHash, role: "admin" },
      create: { email: adminEmail, name: "Admin ONIX", passwordHash, role: "admin" },
    });

    await prisma.service.upsert({
      where: { slug: "commission-achat" },
      update: {},
      create: { slug: "commission-achat", title: "Commission d’achat internationale", summary: "Gestion de A à Z", content: "Détails du service" },
    });

    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email } });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "seed_failed" }, { status: 500 });
  }
}