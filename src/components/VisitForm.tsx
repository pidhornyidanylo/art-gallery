import React from 'react';
import Link from 'next/link';

const VisitForm = () => {
  return (
    <form className="flex w-full justify-center gap-4 pl-11 pr-11 2xl:w-[1180px]">
      <input
        placeholder="Your e-mail :"
        type="email"
        className="border-customRed flex-1 border-y pb-4 pl-2 pr-6 pt-4 focus:outline-none text-xl placeholder:text-black"
      />
      <button className="border-customRed border pb-4 pl-6 pr-6 pt-4 text-xl font-light hover:shadow-none lg:text-2xl xl:text-2xl 2xl:text-2xl">
        <Link href={`/booking/${'nicogalmozzi'}`}>PRENOTA LA VISITA</Link>
      </button>
    </form>
  );
};

export default VisitForm;
