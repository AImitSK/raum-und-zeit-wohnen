import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  telefon?: string;
  gaeste?: string;
  anreise?: string;
  abreise?: string;
  nachricht?: string;
  consent?: boolean;
};

const TO_EMAIL =
  process.env.SENDGRID_FORM_TO_EMAIL ||
  process.env.CONTACT_EMAIL ||
  "f.viseneber@brand-partner.de";
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "";
const FROM_NAME = process.env.SENDGRID_FROM_NAME || "RAUM & ZEIT";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildContent(data: ContactPayload) {
  const rows: [string, string][] = [
    ["Name", data.name || "-"],
    ["E-Mail", data.email || "-"],
    ["Telefon", data.telefon || "-"],
    ["Gäste", data.gaeste || "-"],
    ["Anreise", data.anreise || "-"],
    ["Abreise", data.abreise || "-"],
    ["Nachricht", data.nachricht || "-"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#221E19">
      <h2 style="color:#2C3B30">Neue Anfrage – RAUM &amp; ZEIT</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(
                k
              )}</td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  return { text, html };
}

async function sendViaSendgrid(data: ContactPayload) {
  const sgMail = (await import("@sendgrid/mail")).default;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const { text, html } = buildContent(data);

  await sgMail.send({
    to: TO_EMAIL,
    from: { email: FROM_EMAIL, name: FROM_NAME },
    replyTo: data.email
      ? { email: data.email, name: data.name }
      : undefined,
    subject: `Anfrage RAUM & ZEIT – ${data.name}`,
    text,
    html,
  });
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Serverseitige Validierung der Pflichtfelder
  if (!data.name?.trim() || !data.email?.trim() || !data.consent) {
    return NextResponse.json(
      { error: "Name, E-Mail und Einwilligung sind erforderlich." },
      { status: 400 }
    );
  }
  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 }
    );
  }

  if (!process.env.SENDGRID_API_KEY || !FROM_EMAIL) {
    console.error(
      "SendGrid ist nicht konfiguriert (SENDGRID_API_KEY und/oder SENDGRID_FROM_EMAIL fehlen)."
    );
    return NextResponse.json(
      {
        error:
          "Der E-Mail-Versand ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail.",
      },
      { status: 500 }
    );
  }

  try {
    await sendViaSendgrid(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Fehler beim Versand der Kontaktanfrage:", err);
    return NextResponse.json(
      {
        error:
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
