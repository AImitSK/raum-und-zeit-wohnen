"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Reveal from "./Reveal";

// Erstes Bild = großes Feature-Bild (mit Bildunterschrift).
const IMAGES = [
  { src: "/bilder/schlafen.jpg", alt: "Wohn- und Schlafbereich mit Boxspringbett", caption: "Wohnen & Schlafen", w: 2390, h: 1792 },
  { src: "/bilder/esstisch.jpg", alt: "Essbereich mit ausziehbarem Tisch", w: 2048, h: 1536 },
  { src: "/bilder/kaffee.jpg", alt: "Gedeckter Frühstückstisch mit Kaffee", w: 2048, h: 1536 },
  { src: "/bilder/kueche.jpg", alt: "Voll ausgestattete Küche", w: 2048, h: 1536 },
  { src: "/bilder/bad.jpg", alt: "Modernes Badezimmer mit großzügiger Dusche", w: 2048, h: 1536 },
];

// So viele Kacheln zeigt das Grid (1 Feature + 4 kleine).
const VISIBLE = 5;

const SLIDES = IMAGES.map((img) => ({
  src: img.src,
  alt: img.alt,
  width: img.w,
  height: img.h,
  title: "caption" in img ? (img.caption as string) : img.alt,
  description: img.alt,
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const tiles = IMAGES.slice(0, VISIBLE);
  const remaining = IMAGES.length - VISIBLE;

  return (
    <section className="gallery" id="galerie">
      <Reveal className="wrap">
        <div className="eyebrow center">Einblicke</div>
        <h2>Das Apartment in Bildern</h2>

        <div className="gallery__grid">
          {tiles.map((img, i) => {
            const isFeature = i === 0;
            const isLastTile = i === VISIBLE - 1;
            const showMore = isLastTile && remaining > 0;
            return (
              <figure
                key={img.src}
                className={isFeature ? "gallery__figure--feature" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={
                    showMore
                      ? `Galerie öffnen – ${remaining} weitere Bilder`
                      : `Bild vergrößern: ${img.alt}`
                  }
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      isFeature
                        ? "(max-width: 520px) 100vw, (max-width: 900px) 100vw, 50vw"
                        : "(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
                    }
                    style={{ objectFit: "cover" }}
                    priority={isFeature}
                  />
                </button>
                {isFeature && "caption" in img && (
                  <figcaption className="gallery__caption">
                    {img.caption as string}
                  </figcaption>
                )}
                {showMore && (
                  <div className="gallery__more">+{remaining} weitere</div>
                )}
              </figure>
            );
          })}
        </div>
      </Reveal>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={SLIDES}
        plugins={[Zoom, Thumbnails, Fullscreen, Captions, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        thumbnails={{ position: "bottom", width: 120, height: 80, borderRadius: 0 }}
        captions={{ descriptionTextAlign: "center" }}
        styles={{ container: { backgroundColor: "rgba(33,29,25,.94)" } }}
        animation={{ fade: 300 }}
      />
    </section>
  );
}
