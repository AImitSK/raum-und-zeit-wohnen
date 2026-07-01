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
          kontakt@raumundzeit-bo.de
        </div>
        <div className="fdiv"></div>
        <nav className="fnav">
          <a href="#apartment">Apartment</a>
          <a href="#ausstattung">Ausstattung</a>
          <a href="#lage">Lage</a>
          <a href="#anfragen">Anfragen</a>
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
        </nav>
        <p className="fnote">
          © 2026 RAUM &amp; ZEIT · Möbliertes Apartment auf Zeit in Bad
          Oeynhausen
        </p>
      </div>
    </footer>
  );
}
