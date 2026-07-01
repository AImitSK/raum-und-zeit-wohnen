import Reveal from "./Reveal";

const CELLS = [
  { num: "i", title: "ca. 40 m²", desc: "Wohnfläche, frisch renoviert" },
  { num: "ii", title: "Bis zu 2 Personen", desc: "Komfortabel für Paare & Alleinreisende" },
  { num: "iii", title: "1,60 m Boxspringbett", desc: "Für erholsame Nächte" },
  { num: "iv", title: "Voll ausgestattete Küche", desc: "Für die komplette Selbstversorgung" },
  { num: "v", title: "Kaffeemaschine", desc: "Für den Start in den Morgen" },
  { num: "vi", title: "Modernes Bad", desc: "Mit großzügiger Dusche" },
  { num: "vii", title: "Ess- & Arbeitstisch", desc: "Ausziehbar, auch fürs Homeoffice" },
  { num: "viii", title: "Full-HD-Smart-TV", desc: "Mit Streaming-Möglichkeiten" },
  { num: "ix", title: "Kostenfreies WLAN", desc: "Im gesamten Apartment" },
  { num: "x", title: "Bäcker nebenan", desc: "Frische Brötchen in Gehweite" },
  { num: "xi", title: "Zentrale Lage", desc: "Weserstraße, Bad Oeynhausen" },
  { num: "xii", title: "Stilvoll möbliert", desc: "Historisches Haus, modern gedacht" },
];

export default function Amenities() {
  return (
    <section className="amenities" id="ausstattung">
      <Reveal className="wrap">
        <div className="eyebrow center">Ausstattung</div>
        <h2>
          Alles dabei für
          <br />
          Tage oder Wochen
        </h2>
        <div className="am-grid">
          {CELLS.map((cell) => (
            <div className="cell" key={cell.num}>
              <span className="num">{cell.num}</span>
              <b>{cell.title}</b>
              <small>{cell.desc}</small>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
