import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fmark">
          RAUM &amp; ZEIT<small>SÜDBAHNHOF</small>
        </div>
        <div className="fmeta">
          Weserstraße · 32545 Bad Oeynhausen
          <br />
          f.viseneber@brand-partner.de
        </div>
        <div className="fdiv"></div>
        <nav className="fnav">
          <Link href="/#apartment">Apartment</Link>
          <Link href="/#ausstattung">Ausstattung</Link>
          <Link href="/#lage">Lage</Link>
          <Link href="/#anfragen">Anfragen</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
        <p className="fnote">
          © 2026 RAUM &amp; ZEIT · Möbliertes Apartment auf Zeit in Bad
          Oeynhausen
        </p>
      </div>
    </footer>
  );
}
