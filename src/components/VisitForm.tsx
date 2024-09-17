import React from 'react';
import Link from 'next/link';

const VisitForm: React.FC = () => {
  return (
    <form className="flex w-full flex-col justify-center gap-4 pl-1 pr-1 lg:flex-row xl:flex-row xl:pl-11 xl:pr-11 2xl:w-[1180px] 2xl:flex-row 2xl:pl-11 2xl:pr-11">
      <input
        placeholder="Your e-mail :"
        type="email"
        className="flex-1 border-y border-customRed pb-4 pl-2 pr-6 pt-4 text-xl placeholder:text-black focus:outline-none"
      />
      <button className="border border-customRed pb-4 pl-6 pr-6 pt-4 text-xl font-light hover:shadow-none lg:text-2xl xl:text-2xl 2xl:text-2xl">
        <Link href={`/booking/${'nicogalmozzi'}`}>PRENOTA LA VISITA</Link>
      </button>
    </form>
  );
};

export default VisitForm;
