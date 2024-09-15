import React from "react";
import Image from "next/image";
import { logo } from "@/app/icons.index";
import Link from "next/link";
import LinkItem from "./components/LinkItem";
import Burger from "./components/Burger";

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
    <header className="flex items-center pl-2 pt-7 pb-5 2xl:pr-40">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <nav className="flex flex-1 justify-end items-center">
        <ul className="items-center hidden 2xl:flex xl:flex lg:gap-[110px] lg:flex md:flex md:gap-12">
          {linksArray.map((linkItem) => (
            <LinkItem
              key={linkItem.href}
              title={linkItem.title}
              href={linkItem.href}
            />
          ))}
        </ul>
        <Burger linksArray={linksArray} />
      </nav>
    </header>
  );
};

export default Header;
