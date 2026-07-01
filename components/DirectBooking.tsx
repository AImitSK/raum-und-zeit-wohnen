import Reveal from "./Reveal";

const PERKS = [
  {
    icon: "⚑", // ⚑
    title: "Persönlicher Kontakt",
    text: "Sie sprechen direkt mit dem Gastgeber – ohne Umwege, mit schneller Antwort.",
  },
  {
    icon: "✎", // ✎
    title: "Individuelle Absprachen",
    text: "Frühe Anreise, längerer Aufenthalt, besondere Wünsche – wir finden eine Lösung.",
  },
  {
    icon: "♥", // ♥
    title: "Tipps aus erster Hand",
    text: "Empfehlungen für Bad Oeynhausen und die Region direkt vom Gastgeber.",
  },
];

export default function DirectBooking() {
  return (
    <section className="direct" id="direkt">
      <Reveal className="wrap narrow">
        <div className="eyebrow center">Direkt buchen</div>
        <h2>Lieber persönlich</h2>
        <p className="lead">
          Sie haben das Apartment vielleicht schon auf einem Buchungsportal
          entdeckt. Fragen Sie gern auch direkt bei uns an – für den
          persönlichen Draht und individuelle Absprachen rund um Ihren
          Aufenthalt.
        </p>
        <div className="perks">
          {PERKS.map((perk) => (
            <div className="p" key={perk.title}>
              <em>{perk.icon}</em>
              <b>{perk.title}</b>
              <small>{perk.text}</small>
            </div>
          ))}
        </div>
        <p className="note">
          Die aktuellen Konditionen und Preise entsprechen den Angaben auf den
          Buchungsportalen. Wir freuen uns über Ihre direkte Anfrage und melden
          uns zeitnah bei Ihnen zurück.
        </p>
        <div style={{ marginTop: 30 }}>
          <a href="#anfragen" className="btn btn--ink">
            Zum Anfrageformular <span className="arrow">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
