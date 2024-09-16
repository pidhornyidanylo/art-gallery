import React from 'react';

const InfoPage: React.FC = () => {
  return (
    <section className="pt-16" style={{ fontFamily: 'Benne' }}>
      <h3 style={{ fontFamily: 'Benne' }} className="text-4xl">
        Chi siamo
      </h3>
      <p className="mb-8 mt-4 text-justify text-2xl leading-9">
        Project Space Archinti è uno spazio nato per collegare persone del
        territorio Lodigiano all&apos;arte contemporanea. Aspiriamo a essere un
        catalizzatore per la sperimentazione, l&apos;apprendimento e la
        creatività, un luogo di ritrovo per tutti e una casa per gli artisti e
        le loro idee.
      </p>
      <h3 style={{ fontFamily: 'Benne' }} className="text-4xl">
        Orari
      </h3>
      <p className="mb-8 mt-4 text-justify text-2xl leading-9">
        Apertura solo durante le esposizioni, dal Lunedì alla Domenica, il
        mattino dalle 9:00 alle 13:00, la sera dalle 15:00 alle 20:00.
      </p>
      <h3 style={{ fontFamily: 'Benne' }} className="text-4xl">
        Contatti generali
      </h3>
      <p className="mb-8 mt-4 text-justify text-2xl leading-9">
        0371 36011 <br /> psarchinti@gmail.com <br />
        <br />
        La nostra casella di posta e il telefono, sono monitorati dal Lunedì
        alla Domenica, dalle 9:00 alle 20:00.
      </p>
      <h3 style={{ fontFamily: 'Benne' }} className="text-4xl">
        Indirizzo
      </h3>
      <p className="mb-8 mt-4 text-justify text-2xl leading-9">
        viale Pavia 26 - Lodi, Italia - 26900
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.104378080283!2d9.4935045!3d45.3063171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47812c24c9a41d67%3A0xff7425b5f02f1771!2zVmlhbGUgUGF2aWEsIDI2LCAyNjkwMCBMb2RpIExPLCDQhtGC0LDQu9GW0Y8!5e0!3m2!1suk!2sua!4v1726396558722!5m2!1suk!2sua"
        style={{ width: '100%', height: '343px' }}
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default InfoPage;
