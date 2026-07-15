"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
  consent: boolean;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  telefon: "",
  nachricht: "",
  consent: false,
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  // Spam-Schutz: Honeypot-Feld + Zeitpunkt des Formular-Aufbaus
  const [honeypot, setHoneypot] = useState("");
  const loadedAt = useRef<number>(0);
  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Pflichtfelder: Name, E-Mail und Einwilligung
    if (!form.name.trim() || !form.email.trim() || !form.consent) {
      setStatus("error");
      setMessage(
        "Bitte füllen Sie Name und E-Mail aus und bestätigen Sie die Einwilligung."
      );
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: honeypot, // Honeypot – bleibt bei echten Nutzern leer
          elapsedMs: loadedAt.current ? Date.now() - loadedAt.current : null,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success) {
        setStatus("success");
        setMessage(
          "Vielen Dank für Ihre Nachricht – wir melden uns in Kürze persönlich bei Ihnen."
        );
        setForm(INITIAL);
      } else {
        setStatus("error");
        setMessage(
          data?.error ||
            "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail."
      );
    }
  }

  const msgClass = [
    "form-msg",
    status === "success" || status === "error" ? "show" : "",
    status === "error" ? "error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="contact" id="anfragen">
      <Reveal className="wrap" style={{ textAlign: "center" }}>
        <div className="eyebrow center">Kontakt</div>
        <h2>Noch Fragen? Schreiben Sie uns</h2>
        <p className="intro-lead">
          Sie möchten etwas zum Apartment oder Ihrem Aufenthalt wissen? Schreiben
          Sie uns kurz – wir melden uns persönlich bei Ihnen. Buchen können Sie
          jederzeit direkt über den Kalender oben.
        </p>

        <form id="anfrageForm" noValidate onSubmit={handleSubmit}>
          {/* Honeypot – für Menschen unsichtbar, nur Bots füllen es aus */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="website">Website (bitte leer lassen)</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ihr Name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@beispiel.de"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
          </div>
          <div className="field full">
            <label htmlFor="telefon">Telefon (optional)</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              placeholder="Für Rückfragen"
              value={form.telefon}
              onChange={(e) => update("telefon", e.target.value)}
            />
          </div>
          <div className="field full">
            <label htmlFor="nachricht">Ihre Nachricht</label>
            <textarea
              id="nachricht"
              name="nachricht"
              placeholder="Ihre Frage oder Nachricht …"
              value={form.nachricht}
              onChange={(e) => update("nachricht", e.target.value)}
            />
          </div>
          <div className="field full">
            <label
              className="consent"
              htmlFor="consent"
              style={{
                textTransform: "none",
                letterSpacing: ".02em",
                color: "rgba(237,230,218,.7)",
              }}
            >
              <input
                type="checkbox"
                id="consent"
                required
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span>
                Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung
                der Anfrage gespeichert und verarbeitet werden. Es erfolgt keine
                Weitergabe an Dritte.
              </span>
            </label>
          </div>
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn--brass"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}{" "}
              <span className="arrow">→</span>
            </button>
            <span style={{ fontSize: 13, color: "rgba(237,230,218,.6)" }}>
              oder per E-Mail:{" "}
              <a
                href="mailto:f.viseneber@brand-partner.de"
                style={{ borderBottom: "1px solid var(--brass)" }}
              >
                f.viseneber@brand-partner.de
              </a>
            </span>
          </div>
          <p className={msgClass} id="formMsg" role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </Reveal>
    </section>
  );
}
