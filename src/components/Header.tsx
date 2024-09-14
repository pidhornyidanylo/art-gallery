import React from "react";
import Image from "next/image";
import { logo } from "@/app/icons.index";
import LinkItem from "./LinkItem";
import Link from "next/link";
import Burger from "./Burger";

const linksArray = [
  {
    title: "IN PROGRAMMA",
    href: "/",
  },
  {
    title: "PRENOTA VISITA",
    href: "/booking",
  },
  {
    title: "INFO",
    href: "/info",
  },
];

const Header = () => {
  return (
    <header className="flex pl-2 2xl:pr-[160px] pr-0 pt-[37px] pb-[22px]">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <nav className="flex flex-1 justify-end items-center">
        <ul className="items-center lg:gap-[110px] md:gap-12 2xl:flex xl:flex lg:flex md:flex hidden">
          {linksArray.map((linkItem) => (
            <LinkItem
              key={linkItem.href}
              title={linkItem.title}
              href={linkItem.href}
            />
          ))}
        </ul>
        <Burger />
      </nav>
    </header>
  );
};

export default Header;
