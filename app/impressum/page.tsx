import type { Metadata } from "next";
import LegalTop from "@/components/LegalTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – RAUM & ZEIT",
  description: "Impressum und Anbieterkennzeichnung für RAUM & ZEIT, Südbahnhof Bad Oeynhausen.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <LegalTop />
      <main className="legal">
        <div className="wrap narrow">
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 DDG</h2>
          <address>
            Frank Viseneber
            <br />
            RAUM &amp; ZEIT – Südbahnhof
            <br />
            Musterstraße 1<br />
            32545 Bad Oeynhausen
          </address>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0)000 000000 <span className="muted">(Mustertext)</span>
            <br />
            E-Mail:{" "}
            <a href="mailto:f.viseneber@brand-partner.de">
              f.viseneber@brand-partner.de
            </a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE000000000 <span className="muted">(Mustertext)</span>
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <address>
            Frank Viseneber
            <br />
            Musterstraße 1, 32545 Bad Oeynhausen
          </address>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>

          <h2>Konzeption &amp; Umsetzung</h2>
          <p>
            Gestaltung und technische Realisierung dieser Website:
            <br />
            <a
              href="https://www.sk-online-marketing.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SK Online Marketing
            </a>
          </p>

          <p className="muted">
            Hinweis: Die mit „Mustertext" gekennzeichneten Angaben sind
            Platzhalter und vor Veröffentlichung durch die tatsächlichen Daten zu
            ersetzen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
