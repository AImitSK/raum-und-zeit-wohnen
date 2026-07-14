"use client";

import Script from "next/script";
import Reveal from "./Reveal";

export default function Booking() {
  return (
    <section className="availability" id="verfuegbarkeit">
      <Reveal className="wrap narrow">
        <div className="eyebrow center">Verfügbarkeit & Buchung</div>
        <h2>Freie Zeiträume prüfen und direkt buchen</h2>
        <p className="lead">
          Wählen Sie im Kalender Ihren Wunschzeitraum, sehen Sie sofort den Preis
          und buchen Sie Ihren Aufenthalt direkt online – ohne Umwege und ohne
          zusätzliche Portalgebühren.
        </p>

        <div className="cal-frame">
          <div id="apartmentIframeAll" />
        </div>
      </Reveal>

      <Script
        src="https://login.smoobu.com/js/Settings/BookingToolIframe.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as unknown as {
            BookingToolIframe: {
              initialize: (config: {
                url: string;
                baseUrl: string;
                target: string;
              }) => void;
            };
          }).BookingToolIframe.initialize({
            url: "https://login.smoobu.com/de/booking-tool/iframe/1794206",
            baseUrl: "https://login.smoobu.com",
            target: "#apartmentIframeAll",
          });
        }}
      />
    </section>
  );
}
