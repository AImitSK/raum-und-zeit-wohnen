import Image from "next/image";
import Reveal from "./Reveal";

const POIS = [
  { name: "Kurpark & Innenstadt", note: "zentral" },
  { name: "Bali-Therme", note: "nah" },
  { name: "Kaiserpalais", note: "nah" },
  { name: "GOP Varieté-Theater", note: "nah" },
  { name: "Herzzentrum", note: "gut erreichbar" },
  { name: "Rehakliniken", note: "gut erreichbar" },
];

export default function Location() {
  return (
    <section className="location" id="lage">
      <Reveal className="wrap">
        <div className="eyebrow">Lage</div>
        <div className="loc-grid">
          <div>
            <h2 style={{ marginTop: ".1em" }}>
              Mittendrin in der
              <br />
              Gesundheitsstadt
            </h2>
            <p>
              Die Lage in der Weserstraße ist ein guter Ausgangspunkt für
              Aufenthalte in Bad Oeynhausen. Kurpark, Innenstadt, Bali-Therme,
              Kaiserpalais und das GOP Varieté-Theater sind ebenso gut
              erreichbar wie das Herzzentrum, die Rehakliniken und weitere
              wichtige Einrichtungen der Kurstadt.
            </p>
            <div className="poi">
              {POIS.map((poi) => (
                <div key={poi.name}>
                  <span>{poi.name}</span>
                  <em>{poi.note}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="loc-map">
            <Image
              src="/bilder/stadtplan.jpg"
              alt="Stadtplan Bad Oeynhausen mit Lage des Apartments"
              width={2048}
              height={1536}
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
