import Image from "next/image";

export default function Hero() {
  return (
    <header className="hero" id="start">
      <div className="hero__bg">
        <Image
          src="/bilder/gebaeudefassade.jpg"
          alt="Historischer Südbahnhof Bad Oeynhausen – Gebäudefassade"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="hero__inner">
        <div className="hero__top">
          <div className="hero__mark">
            RAUM &amp; ZEIT<small>SÜDBAHNHOF</small>
          </div>
          <nav className="hero__nav">
            <a href="#apartment">Apartment</a>
            <a href="#ausstattung">Ausstattung</a>
            <a href="#lage">Lage</a>
            <a href="#anfragen">Anfragen</a>
          </nav>
        </div>

        <div className="hero__center">
          <div className="hero__eyebrow">
            Möbliertes Apartment · Bad Oeynhausen
          </div>
          <div className="hero__logo-wrap">
            <h1 className="hero__logo-text">
              <span className="hero__logo-main">
                RAUM <span className="hero__amp">&amp;</span> ZEIT
              </span>
              <span className="hero__logo-sub">Südbahnhof</span>
            </h1>
          </div>
          <p className="hero__sub">
            Ein stilvoll möbliertes Apartment im historischen Südbahnhof –
            Ankommen, durchatmen, wohnen. Auf Zeit.
          </p>
          <div style={{ marginTop: 38 }}>
            <a href="#verfuegbarkeit" className="btn btn--brass">
              Jetzt buchen <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__facts">
            <span>
              <b>40</b>m² Wohnfläche
            </span>
            <span>
              <b>2</b>Personen
            </span>
            <span>
              <b>1,60 m</b>Boxspringbett
            </span>
          </div>
          <div className="hero__facts" style={{ opacity: 0.85 }}>
            <span>Weserstraße · Bad Oeynhausen</span>
          </div>
        </div>
      </div>
    </header>
  );
}
