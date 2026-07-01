import type { Metadata } from "next";
import LegalTop from "@/components/LegalTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – RAUM & ZEIT",
  description:
    "Informationen zum Datenschutz bei RAUM & ZEIT, Südbahnhof Bad Oeynhausen – Hosting, Kontaktformular und Ihre Rechte.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalTop />
      <main className="legal">
        <div className="wrap narrow">
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <address>
            Frank Viseneber
            <br />
            RAUM &amp; ZEIT – Südbahnhof
            <br />
            Musterstraße 1, 32545 Bad Oeynhausen{" "}
            <span className="muted">(Anschrift: Mustertext)</span>
            <br />
            E-Mail:{" "}
            <a href="mailto:f.viseneber@brand-partner.de">
              f.viseneber@brand-partner.de
            </a>
          </address>

          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133,
            Walnut, CA 91789, USA) bzw. deren europäischer Niederlassung
            gehostet. Vercel verarbeitet in unserem Auftrag Daten, die technisch
            zur Auslieferung der Website erforderlich sind (u. a. IP-Adresse,
            Zeitpunkt des Zugriffs, abgerufene Seite, Browsertyp). Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
            sicheren und effizienten Bereitstellung unseres Onlineangebots).
          </p>
          <p>
            Mit Vercel wurde ein Vertrag über Auftragsverarbeitung (AVV)
            geschlossen. Bei einer Übermittlung von Daten in die USA stützt sich
            Vercel auf die Standardvertragsklauseln der EU-Kommission. Weitere
            Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>

          <h2>4. Server-Logfiles</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Logfiles, die Ihr Browser
            automatisch an uns übermittelt. Dies sind: Browsertyp und
            Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname
            des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>5. Kontaktformular und E-Mail-Kontakt</h2>
          <p>
            Wenn Sie uns über das Anfrageformular oder per E-Mail kontaktieren,
            werden Ihre Angaben (insbesondere Name, E-Mail-Adresse, ggf. Telefon,
            Reisezeitraum und Ihre Nachricht) zum Zweck der Bearbeitung Ihrer
            Anfrage verarbeitet und gespeichert. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (Anbahnung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Beantwortung von Anfragen). Die von
            Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis
            Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der
            Zweck für die Datenspeicherung entfällt.
          </p>

          <h3>Versand über SendGrid</h3>
          <p>
            Für den technischen Versand der über das Formular ausgelösten
            E-Mails nutzen wir den Dienst SendGrid der Twilio Inc. (101 Spear
            Street, San Francisco, CA 94105, USA). SendGrid verarbeitet dabei die
            im Formular angegebenen Daten in unserem Auftrag, um die
            Zustellung der Benachrichtigungs-E-Mail sicherzustellen.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Es besteht ein
            Auftragsverarbeitungsvertrag; für Übermittlungen in die USA gelten die
            Standardvertragsklauseln der EU-Kommission. Weitere Informationen:{" "}
            <a
              href="https://www.twilio.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              twilio.com/legal/privacy
            </a>
            .
          </p>

          <h2>6. Cookies</h2>
          <p>
            Diese Website verwendet keine Tracking- oder Marketing-Cookies. Es
            werden ausschließlich technisch notwendige Daten verarbeitet, die für
            den Betrieb der Seite erforderlich sind.
          </p>

          <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://" auf „https://" wechselt.
          </p>

          <h2>8. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>
              Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu
              erhalten (Art. 15 DSGVO),
            </li>
            <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),</li>
            <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),</li>
            <li>
              die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),
            </li>
            <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO) sowie</li>
            <li>
              die Datenübertragbarkeit zu verlangen (Art. 20 DSGVO).
            </li>
          </ul>
          <p>
            Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
            Zukunft widerrufen.
          </p>

          <p className="muted">
            Hinweis: Die mit „Mustertext" gekennzeichneten Angaben sind
            Platzhalter und vor Veröffentlichung anzupassen. Diese Erklärung stellt
            keine Rechtsberatung dar.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
