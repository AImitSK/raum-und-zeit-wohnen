"use client";

import Script from "next/script";
import Reveal from "./Reveal";

export default function Availability() {
  return (
    <section className="availability" id="verfuegbarkeit">
      <Reveal className="wrap narrow">
        <div className="eyebrow center">Verfügbarkeit</div>
        <h2>Freie Zeiträume auf einen Blick</h2>
        <p className="lead">
          Werfen Sie einen Blick in den Kalender und finden Sie den passenden
          Zeitraum für Ihren Aufenthalt. Anschließend freuen wir uns über Ihre
          direkte Anfrage.
        </p>

        <div className="cal-frame">
          <div id="smoobuApartment3383171de" className="calendarWidget">
            <div
              className="calendarContent"
              data-load-calendar-url="https://login.smoobu.com/de/cockpit/widget/single-calendar/3383171"
              data-verification="76b6667bce486280838988d44178e3596203804d25df9e055290574e446a1b95"
              data-baseUrl="https://login.smoobu.com"
              data-disable-css="false"
            ></div>
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <a href="#anfragen" className="btn btn--ink">
            Zeitraum anfragen <span className="arrow">→</span>
          </a>
        </div>
      </Reveal>

      <Script
        src="https://login.smoobu.com/js/Apartment/CalendarWidget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
