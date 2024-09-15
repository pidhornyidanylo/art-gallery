import React from "react";
import Image from "next/image";
import { coverXl, dateXl } from "../images.index";
import { arrowBooking } from "../icons.index";

const BookingPage = () => {
  return (
    <section className="flex gap-9 relative transition-all min-h-[1150px]">
      <div className="flex flex-col gap-12">
        <div className="relative">
          <Image
            className="w-full 2xl:w-[1182px]"
            src={coverXl}
            alt={"cover-xl"}
            width={1182}
            height={862}
          />
          <div className="absolute bottom-20 left-10 2xl:block hidden">
            <Image src={arrowBooking} alt={"white-arrow"} width={216} height={161} />
          </div>
          <div
            className="absolute bottom-5 left-5 md:left-12 sm:left-5 lg:left-20 xl:left-20 bg-white pt-3 pb-3 pl-6 pr-6 2xl:text-3xl 2xl:right-20 2xl:left-auto 2xl:bottom-20 xl:bottom-20 xl:text-3xl lg:bottom-20 lg:text-3xl md:text-xl md:bottom-12"
          >
            <p className="m-2 ml-0">
              Orari <br />{" "}
              <span className="font-light">
                Lun - Dom 9:00/13:00 | 15:00/20:00
              </span>
            </p>
            <p className="m-2 ml-0">
              Indirizzo <br />{" "}
              <span className="font-light">
                viale Pavia, 26 - Lodi IT 26900
              </span>
            </p>
            <hr />
            <button style={{ color: "#9C1006" }} className="mt-4 ">
              ENRATA GRATUITA
            </button>
          </div>
        </div>
        <div className="flex 2xl:w-[1182px] justify-between 2xl:flex-row flex-col">
          <p
            style={{ color: "#9C1006" }}
            className="text-justify 2xl:max-w-[790px]"
          >
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
          <div className="2xl:w-[324px] xl:w-[324px] lg:w-[324px] w-[240px] flex flex-col gap-24 2xl:p-6 xl:p-6 lg:p-6 p-0 pt-6 pr-0">
            <Image src={dateXl} alt={"date-xl"} width={324} height={253} />
            <button className="border p-4 border-black 2xl:text-2xl xl:text-2xl lg:text-2xl text-lg">
              PRENOTA LA VISITA
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex transition-all p-4 bg-slate-50 justify-center absolute top-8 right-11 w-[160px] flex-row-reverse 2xl:relative 2xl:justify-end 2xl:bg-transparent 2xl:right-0 2xl:top-0 2xl:p-0">
        <h3
          className="transition-all 2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl"
          style={{
            lineHeight: 0.6,
            writingMode: "vertical-lr",
            color: "#9C1006",
            transform: "translateX(8px)",
          }}
        >
          Nico Galmozzi
        </h3>
        <p
          className="transition-all font-light 2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          Lockdown Portraits
        </p>
      </div>
    </section>
  );
};

export default BookingPage;
