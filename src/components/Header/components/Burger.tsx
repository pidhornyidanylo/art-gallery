"use client";

import { useEffect, useState } from "react";
import LinkItem from "./LinkItem";

type BurgerProps = {
  linksArray: { title: string; href: string }[];
};

const Burger: React.FC<BurgerProps> = ({ linksArray }: BurgerProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuShowClass = showMenu
    ? "w-40 flex flex-col items-end -top-8 right-0"
    : "hidden";
  const burerEventTransition = showMenu ? "-translate-x-36 rotate-90" : "";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`transition-all ${burerEventTransition} 2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col gap-1`}
      >
        <span
          className={`h-1 w-9 block bg-slate-600 rounded-md cursor-pointer ${
            showMenu && "rotate-45 translate-y-1"
          }`}
        ></span>
        <span
          className={`h-1 w-9 block bg-slate-600 rounded-md cursor-pointer ${
            showMenu && "hidden"
          }`}
        ></span>
        <span
          className={`h-1 w-9 block bg-slate-600 rounded-md cursor-pointer ${
            showMenu && "-rotate-45 -translate-y-1"
          }`}
        ></span>
      </div>
      <ul
        className={`absolute 2xl:hidden xl:hidden lg:hidden md:hidden ${menuShowClass}`}
      >
        {linksArray.map((linkItem) => (
          <LinkItem
            key={linkItem.href}
            title={linkItem.title}
            href={linkItem.href}
          />
        ))}
      </ul>
    </div>
  );
};

export default Burger;
