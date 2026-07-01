import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="intro" id="apartment">
      <Reveal className="wrap narrow">
        <div className="rule"></div>
        <div className="eyebrow center">Willkommen</div>
        <h2>
          Wohnen im ehemaligen
          <br />
          Südbahnhof
        </h2>
        <p className="lead">
          RAUM &amp; ZEIT ist ein frisch renoviertes, stilvoll möbliertes
          Apartment im historischen Gebäude des ehemaligen Südbahnhofs von Bad
          Oeynhausen. Auf rund 40 m² trifft der Charakter eines
          traditionsreichen Hauses auf moderne Ausstattung und ein durchdachtes
          Wohnkonzept.
        </p>
        <p>
          Ob geschäftlicher Aufenthalt, Besuch bei Angehörigen in einer der
          Kliniken, ein paar Tage in der Kurstadt oder ein längerer Aufenthalt
          in Ostwestfalen: Das Apartment ist ein ruhiger, komfortabler
          Rückzugsort mit besonderem Ambiente – eine wohnliche Alternative zum
          klassischen Hotelzimmer.
        </p>
      </Reveal>
    </section>
  );
}
