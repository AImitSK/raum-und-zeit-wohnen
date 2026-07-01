import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SplitSection from "@/components/SplitSection";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import DirectBooking from "@/components/DirectBooking";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />

      <SplitSection
        image="/bilder/schlafen.jpg"
        alt="Wohn- und Schlafbereich mit Boxspringbett"
        eyebrow="Wohnen & Arbeiten"
        title="Ein Raum, der mitdenkt"
        text="Der Wohn- und Schlafbereich ist hochwertig und gemütlich eingerichtet. Das komfortable 1,60 m breite Boxspringbett sorgt für erholsame Nächte, der ausziehbare Esstisch bietet Platz zum Essen, Planen und Arbeiten – ideal auch für Aufenthalte mit Homeoffice-Anteil."
        bullets={[
          "1,60 m Boxspringbett für erholsamen Schlaf",
          "Ausziehbarer Ess- und Arbeitstisch",
          "Full-HD-Smart-TV mit Streaming",
          "Kostenfreies WLAN im gesamten Apartment",
        ]}
      />

      <SplitSection
        image="/bilder/kueche.jpg"
        alt="Voll ausgestattete Küche"
        eyebrow="Küche"
        title={
          <>
            Voll ausgestattet –<br />
            vom Kaffee bis zum Abendessen
          </>
        }
        text="Die voll ausgestattete Küche bietet alles für die Selbstversorgung: schnelles Frühstück, Kaffee am Morgen oder ein ruhiger Abend im Apartment. Besonders angenehm – direkt nebenan befindet sich ein Bäcker. Frische Brötchen und Kaffee sind nur wenige Schritte entfernt."
        bullets={[
          "Kochfeld, Backofen & komplettes Geschirr",
          "Kaffeemaschine, Wasserkocher, Toaster",
          "Bäcker direkt nebenan",
        ]}
        reverse
        dark
      />

      <SplitSection
        image="/bilder/bad.jpg"
        alt="Modernes Badezimmer mit großzügiger Dusche"
        eyebrow="Badezimmer"
        title="Modern, hell, großzügig"
        text="Das moderne Badezimmer verfügt über eine großzügige Dusche und fügt sich mit seiner klaren, stilvollen Gestaltung harmonisch in das Gesamtkonzept ein. Alles ist da, damit der Tag entspannt beginnen und ausklingen kann."
        bullets={[
          "Großzügige, ebenerdige Dusche",
          "Hochwertige Armaturen & Spiegelschrank",
        ]}
      />

      <Gallery />
      <Amenities />
      <Location />
      <DirectBooking />
      <ContactForm />
      <Footer />
    </>
  );
}
