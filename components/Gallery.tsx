import Image from "next/image";
import Reveal from "./Reveal";

const IMAGES = [
  { src: "/bilder/schlafen.jpg", alt: "Boxspringbett vor Holzwand", className: "g-tall" },
  { src: "/bilder/esstisch.jpg", alt: "Essbereich mit offener Küche", className: "g-wide" },
  { src: "/bilder/kaffee.jpg", alt: "Gedeckter Frühstückstisch mit Kaffee", className: "" },
  { src: "/bilder/kueche.jpg", alt: "Küche mit grüner Fliese", className: "" },
  { src: "/bilder/bad.jpg", alt: "Modernes Badezimmer", className: "g-wide" },
];

export default function Gallery() {
  return (
    <section className="gallery" id="galerie">
      <Reveal className="wrap">
        <div className="eyebrow center">Einblicke</div>
        <h2>Das Apartment in Bildern</h2>
        <div className="gallery__grid">
          {IMAGES.map((img) => (
            <figure key={img.src} className={img.className || undefined}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
