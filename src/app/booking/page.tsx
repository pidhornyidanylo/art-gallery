import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { coverXl, dateXl } from '../images.index';
import { arrowBooking } from '../icons.index';

const BookingPage: React.FC = () => {
  return (
    <section className="relative flex min-h-[1150px] gap-9 transition-all">
      <div className="flex flex-col gap-12">
        <div className="relative">
          <Image
            className="w-full 2xl:w-[1182px]"
            src={coverXl}
            alt={'cover-xl'}
            width={1182}
            height={862}
          />
          <div className="absolute bottom-20 left-10 hidden 2xl:block">
            <Image
              src={arrowBooking}
              alt={'white-arrow'}
              width={216}
              height={161}
            />
          </div>
          <div className="absolute bottom-1 left-1 bg-white pb-2 pl-3 pr-3 pt-2 text-xl sm:bottom-5 sm:left-5 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20 lg:text-3xl xl:bottom-20 xl:left-20 xl:text-3xl 2xl:bottom-20 2xl:left-auto 2xl:right-20 2xl:text-3xl">
            <p className="ml-0">
              Orari <br />{' '}
              <span className="font-light">
                Lun - Dom 9:00/13:00 | 15:00/20:00
              </span>
            </p>
            <p className="ml-0">
              Indirizzo <br />{' '}
              <span className="font-light">
                viale Pavia, 26 - Lodi IT 26900
              </span>
            </p>
            <hr />
            <button className="mt-2 text-customRed md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
              ENRATA GRATUITA
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between 2xl:w-[1182px] 2xl:flex-row">
          <p className="text-justify text-2xl leading-7 text-customRed 2xl:max-w-[790px] 2xl:text-left 2xl:text-xl 2xl:leading-6">
            “Dare forma alla reclusione” <br /> Ci chiediamo dov’eravamo finiti
            in quegl’anni incontabili: a stingerci in stanze oblique, non più in
            grado di contenerci, sempre più inclini a farci scivolare; a cercare
            di captare l’ultimo raggio di sole o forse il primo, attraverso
            tapparelle che sembravano essersi incollate, ma invece, in maniera
            meschina, aperte a spiragli verso luoghi dimenticati. L’ inganno
            alla fine viene capito, ed utilizzato attraverso una tecnica
            artistica che permette di mutare uno stato d’animo di reclusione ,
            in qualcosa di opposto, in sfida, e questo per merito di una visione
            chiara che i soggetti rappresentati da Nico Galmozzi riescono a
            trasmettere. <br /> Le figure in bianco e nero, sedute, erte,
            camuffate, di persone note all artista, e quelle invece
            immaginifiche si contrappongono; le prime realmente dentro una fase
            inedita ,sembrano in grado di superare il timore, le altre invece
            diventano l’emblema dell’accettazione di un esterno che svuotatosi
            di attività umana, viene trasformato in sogno. La scelta di questa
            antitesi è altamente utile a comprendere quanto labile sia stato il
            confine in quegl’anni di chiusura, sfidare l’obiettivo che era il
            mondo diventato notizia unica, o perdersi in meandri di apparente
            salvezza, di fantasie, e diventare figure spente davanti a schermi
            uniformanti.
            <br /> La tecnica acrilica usata, con cromature unicamente nero
            grigie, ha la forza di delimitare gli spazi e svelare gli stati
            d’animo delle figure rappresentate, mirando a focalizzare
            l’attenzione su quello che accomunava tutti in quel periodo: ogni
            stanza diventava un esterno aperto, ogni spazio esterno diventava
            una stanza chiusa.
          </p>
          <div className="flex w-[240px] flex-col 2xl:gap-24 gap-9  p-0 pr-0 pt-6 lg:w-[324px] lg:p-6 xl:w-[324px] xl:p-6 2xl:w-[324px] 2xl:p-6">
            <Image src={dateXl} alt={'date-xl'} width={324} height={253} />
            <button className="border border-black p-4 text-lg shadow-md hover:shadow-none lg:text-2xl xl:text-2xl 2xl:text-2xl">
              <Link href={`/booking/${'nicogalmozzi'}`}>PRENOTA LA VISITA</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-11 top-8 hidden w-[160px] flex-row-reverse justify-center bg-slate-50 p-4 transition-all sm:flex md:flex lg:flex xl:flex 2xl:relative 2xl:right-0 2xl:top-0 2xl:flex 2xl:justify-end 2xl:bg-transparent 2xl:p-0">
        <h3
          className="text-4xl text-customRed transition-all lg:text-5xl xl:text-5xl 2xl:text-6xl"
          style={{
            lineHeight: 0.6,
            writingMode: 'vertical-lr',
            transform: 'translateX(8px)',
          }}
        >
          Nico Galmozzi
        </h3>
        <p
          className="text-4xl font-light transition-all lg:text-5xl xl:text-5xl 2xl:text-6xl"
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          Lockdown Portraits
        </p>
      </div>
    </section>
  );
};

export default BookingPage;
