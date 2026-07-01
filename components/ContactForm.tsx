"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  telefon: string;
  gaeste: string;
  anreise: string;
  abreise: string;
  nachricht: string;
  consent: boolean;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  telefon: "",
  gaeste: "1 Person",
  anreise: "",
  abreise: "",
  nachricht: "",
  consent: false,
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

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
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success) {
        setStatus("success");
        setMessage(
          "Vielen Dank für Ihre Anfrage – wir melden uns in Kürze persönlich bei Ihnen."
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
        <div className="eyebrow center">Anfrage</div>
        <h2>Ihren Aufenthalt anfragen</h2>
        <p className="intro-lead">
          Teilen Sie uns Ihren Reisezeitraum mit – wir prüfen die Verfügbarkeit
          und melden uns persönlich bei Ihnen.
        </p>

        <form id="anfrageForm" noValidate onSubmit={handleSubmit}>
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
          <div className="row">
            <div className="field">
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
            <div className="field">
              <label htmlFor="gaeste">Anzahl Gäste</label>
              <select
                id="gaeste"
                name="gaeste"
                value={form.gaeste}
                onChange={(e) => update("gaeste", e.target.value)}
              >
                <option>1 Person</option>
                <option>2 Personen</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="anreise">Anreise</label>
              <input
                type="date"
                id="anreise"
                name="anreise"
                value={form.anreise}
                onChange={(e) => update("anreise", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="abreise">Abreise</label>
              <input
                type="date"
                id="abreise"
                name="abreise"
                value={form.abreise}
                onChange={(e) => update("abreise", e.target.value)}
              />
            </div>
          </div>
          <div className="field full">
            <label htmlFor="nachricht">Ihre Nachricht</label>
            <textarea
              id="nachricht"
              name="nachricht"
              placeholder="Anlass des Aufenthalts, Wünsche, Fragen …"
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
              {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}{" "}
              <span className="arrow">→</span>
            </button>
            <span style={{ fontSize: 13, color: "rgba(237,230,218,.6)" }}>
              oder per E-Mail:{" "}
              <a
                href="mailto:kontakt@raumundzeit-bo.de"
                style={{ borderBottom: "1px solid var(--brass)" }}
              >
                kontakt@raumundzeit-bo.de
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
