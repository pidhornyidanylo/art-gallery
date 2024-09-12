import React, { use } from "react";
import Image from "next/image";
import { logo } from "@/app/icons.index";
import LinkItem from "./LinkItem";

const linksArray = [
  {
    title: "IN PROGRAMMA",
    href: "/"
  },
  {
    title: "PRENOTA VISITA",
    href: "/booking"
  },
  {
    title: "INFO",
    href: "/info"
  },
]

const Header = () => {
  return (
    <header className="flex pl-2 pr-[160px] pt-[37px] pb-[22px]">
      <Image src={logo} alt="logo" />
      <nav className="flex flex-1 justify-end">
        <ul className="flex items-center lg:gap-[110px] md:gap-12">
          {linksArray.map((linkItem) => <LinkItem key={linkItem.href} title={linkItem.title} href={linkItem.href} />)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
