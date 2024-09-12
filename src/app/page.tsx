import InProgramGenericSection from "@/components/InProgramGenericSection";
import {
  cover1,
  cover2,
  Data1,
  Data2,
  VectorRed,
  VectorViolett,
} from "./icons.index";

export default function InProgram() {
  return (
    <div className="flex flex-col gap-10">
      <InProgramGenericSection
        arrow={VectorRed}
        colorScheme="#9C1006"
        author="Nico Galmozzi"
        eventType="exibition"
        subTitle="Lockdown Portraits"
        cover={cover1}
        type="basic"
        dateIcon={Data1}
        text="“Dare forma alla reclusione”
        Ci chiediamo dov’eravamo finiti in quegl’anni incontabili: a stingerci in stanze oblique, non più in grado di contenerci, sempre più inclini a farci scivolare; a cercare di captare l’ultimo raggio di sole o forse il primo, attraverso tapparelle che sembravano essersi incollate, ma invece, in maniera meschina, aperte a spiragli verso luoghi dimenticati. L’ inganno alla fine viene capito, ed utilizzato attraverso una tecnica artistica che permette di mutare uno stato d’animo di reclusione , in qualcosa di opposto, in sfida, e questo per merito di una visione chiara che i soggetti rappresentati da Nico Galmozzi riescono a trasmettere.
        Le figure in bianco e nero, sedu"
      />
      <InProgramGenericSection
        arrow={VectorViolett}
        colorScheme="#5E2572"
        author="Purezza Dispersa"
        eventType="exibition"
        subTitle="Chiara Granata | Claudia Marini | Julia Merlone | Alice Moschini | Anna Quaranta"
        cover={cover2}
        type="reversed"
        dateIcon={Data2}
        text="Il termine “Purezza” può essere provocatoriamente sostituito con appagamento , inesperienza, obbligo al rispetto di un insegnamento imposto dalla nascita; oppure con cristallizzazione, il mantenimento di uno stato ritenuto valido a priori. Perderla significa l’opposto: mettersi in gioco, rischiare, tendere verso zone che,seppur ignote, una volta esplorate restituiscono immagini e sensazioni nette, spogliate del superfluo. Questa collettiva riesce a illustrare enigmaticamente questo tipo di processo. Attraverso l’utilizzo di metodi espressivi molto diversi tra loro, le cinque artiste portano alla luce l’inconsapevole atto del distacco da una fase falsamente considerata ideale. La comprensione del puro avviene"
      />
    </div>
  );
}
