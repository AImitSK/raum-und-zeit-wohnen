# Briefing: RAUM & ZEIT – Next.js Onepager

## Ausgangsmaterial

Du bekommst folgende Dateien:

- `index.html` – fertiger Onepager (Design, Texte, Struktur sind final)
- `bilder/` – Ordner mit den Fotos (JPG) und dem Logo (PNG):
  - `schlafen.jpg` · `essbereich.jpg` · `kueche.jpg` · `bad.jpg` · `kaffee.jpg` · `stadtplan.jpg` · `gebaeudefassade.jpg` (Hero)
  - `logo.png`

---

## Aufgabe

Überführe den Onepager 1:1 in eine **Next.js App** (App Router, TypeScript). Das Design, die Farbwelt, die Typografie und alle Texte bleiben exakt wie in der HTML-Vorlage – du interpretierst nichts neu, sondern portierst.

---

## Tech-Stack & Anforderungen

- **Next.js 14+** mit App Router (`app/`)
- **TypeScript**
- **Tailwind CSS** für Utility-Klassen; für spezifische Custom-Properties (CSS-Variablen, komplexe Hover-Transitions) darfst du zusätzlich ein globales CSS-Modul nutzen (`app/globals.css`)
- **`next/image`** für alle Bilder – Bilder kommen in `public/bilder/`
- Kein externes UI-Framework (kein shadcn, kein MUI)
- Google Fonts (`Cormorant Garamond` + `Jost`) über `next/font/google` einbinden

---

## Projektstruktur

```
app/
  layout.tsx        ← Fonts, Metadata, globale Styles
  page.tsx          ← Haupt-Onepager (importiert alle Sections)
  globals.css       ← CSS Custom Properties + globale Resets aus der HTML
components/
  Hero.tsx
  Intro.tsx
  SplitSection.tsx  ← wiederverwendbar für Küche / Bad / Schlafen
  Gallery.tsx
  Amenities.tsx
  Location.tsx
  DirectBooking.tsx
  ContactForm.tsx
  Footer.tsx
public/
  bilder/           ← alle JPGs + logo.png hier rein
```

---

## Sections & Besonderheiten

### Hero (`Hero.tsx`)

- Vollbild-Hintergrundbild: `gebaeudefassade.jpg` via `next/image` mit `fill` + `objectFit: cover`
- Overlay: `linear-gradient` genau wie in der HTML
- Logo oben links: `logo.png` via `next/image` (kein `<img>`)
- Navigation rechts (Links zu Sections mit `#id`)
- Drei Fakten-Chips unten links
- CTA-Button → scrollt zu `#anfragen`

### SplitSection (`SplitSection.tsx`)

- Props: `image`, `alt`, `eyebrow`, `title`, `text`, `bullets[]`, `reverse?: boolean`, `dark?: boolean`
- `dark` → Hintergrund `var(--forest)`, helle Texte
- Bild via `next/image` mit `fill` in einem relativen Container

### Gallery (`Gallery.tsx`)

- CSS Grid wie in der HTML (g-tall, g-wide Spans)
- Hover-Zoom via Tailwind `group-hover:scale-105 transition-transform duration-700`

### ContactForm (`ContactForm.tsx`)

- Client Component (`"use client"`)
- Controlled Form mit `useState`
- `onSubmit`: POST an `/api/contact`
- Validierung: Name, E-Mail und Checkbox sind Pflichtfelder

### API Route (`app/api/contact/route.ts`)

- Nimmt die Formulardaten entgegen
- Sendet eine E-Mail via **Nodemailer** (SMTP) oder **Resend** (bevorzugt, falls `RESEND_API_KEY` gesetzt)
- Umgebungsvariablen aus `.env.local`:

```env
CONTACT_EMAIL=kontakt@raumundzeit-bo.de
RESEND_API_KEY=...        # oder
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

- Response: `{ success: true }` oder `{ error: "..." }` mit passendem HTTP-Status

### Scroll Reveal

- Intersection Observer wie in der HTML, als kleiner Custom Hook `hooks/useReveal.ts`
- Berücksichtige `prefers-reduced-motion`

---

## SEO & Metadata

In `app/layout.tsx`:

```ts
export const metadata = {
  title: "RAUM & ZEIT – Möbliertes Apartment im Südbahnhof Bad Oeynhausen",
  description:
    "Stilvoll möbliertes Apartment im historischen Südbahnhof. Ca. 40 m², frisch renoviert, Boxspringbett, voll ausgestattete Küche, WLAN, Smart-TV. Ideal für Geschäftsreisende & Klinikbesucher.",
  openGraph: {
    title: "RAUM & ZEIT – Apartment Bad Oeynhausen",
    description:
      "Stilvoll möbliertes Apartment im historischen Südbahnhof von Bad Oeynhausen. Ca. 40 m², frisch renoviert, voll ausgestattet. Direkt anfragen.",
    images: ["/bilder/gebaeudefassade.jpg"],
  },
};
```

---

## Git & Deployment

- Das Git-Repo ist bereits verbunden
- Committe am Ende mit aussagekräftigen Commit-Messages (z. B. `feat: initial Next.js port of RAUM & ZEIT onepager`)
- `.env.local` **nicht** committen – stattdessen eine `.env.example` mit leeren Werten anlegen
- Für Deployment auf **Vercel** vorbereiten: `next.config.ts` mit `images.domains` oder `remotePatterns` falls externe Bilder nötig sind (hier nicht der Fall, da alle Bilder lokal in `public/`)

---

## Was du NICHT änderst

- Keine Texte umschreiben
- Keine Farbwerte verändern
- Keine neuen Sections erfinden
- Kein anderes Font-Pairing wählen
- Das Formular schickt an `CONTACT_EMAIL` – keine Drittanbieter-Widgets

---

## Abnahmekriterien

- [ ] `npm run build` läuft fehlerfrei durch
- [ ] Alle Bilder werden via `next/image` geladen, kein natives `<img>`
- [ ] Kontaktformular sendet eine E-Mail (testbar mit SMTP-Testdienst wie Mailtrap)
- [ ] Scroll-Reveal funktioniert, `prefers-reduced-motion` wird respektiert
- [ ] Seite ist vollständig responsiv (mobile ab 375 px)
- [ ] Lighthouse Score: Performance ≥ 90, Accessibility ≥ 90
