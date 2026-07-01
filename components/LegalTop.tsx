import Link from "next/link";

export default function LegalTop() {
  return (
    <div className="legal__top">
      <div className="wrap">
        <Link href="/" className="legal__brand">
          RAUM &amp; ZEIT<small>SÜDBAHNHOF</small>
        </Link>
        <Link href="/" className="legal__back">
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
