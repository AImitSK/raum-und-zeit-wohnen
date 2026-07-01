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

const IMAGES = [
  { src: "/bilder/schlafen.jpg", alt: "Boxspringbett vor Holzwand", className: "g-tall", w: 2048, h: 1536 },
  { src: "/bilder/esstisch.jpg", alt: "Essbereich mit offener Küche", className: "g-wide", w: 2048, h: 1536 },
  { src: "/bilder/kaffee.jpg", alt: "Gedeckter Frühstückstisch mit Kaffee", className: "", w: 2048, h: 1536 },
  { src: "/bilder/kueche.jpg", alt: "Küche mit grüner Fliese", className: "", w: 2048, h: 1536 },
  { src: "/bilder/bad.jpg", alt: "Modernes Badezimmer", className: "g-wide", w: 2048, h: 1536 },
];

const SLIDES = IMAGES.map((img) => ({
  src: img.src,
  alt: img.alt,
  width: img.w,
  height: img.h,
  title: img.alt,
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery" id="galerie">
      <Reveal className="wrap">
        <div className="eyebrow center">Einblicke</div>
        <h2>Das Apartment in Bildern</h2>
        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <figure key={img.src} className={img.className || undefined}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Bild vergrößern: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </button>
            </figure>
          ))}
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
        styles={{
          container: { backgroundColor: "rgba(33,29,25,.94)" },
        }}
        animation={{ fade: 300 }}
      />
    </section>
  );
}
