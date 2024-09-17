import React from 'react';
import Image from 'next/image';
import { logo } from '@/app/icons.index';
import Link from 'next/link';
import LinkItem from './components/LinkItem';
import Burger from './components/Burger';

const linksArray = [
  {
    title: 'IN PROGRAMMA',
    href: '/',
  },
  {
    title: 'PRENOTA VISITA',
    href: '/booking',
  },
  {
    title: 'INFO',
    href: '/info',
  },
];

const Header: React.FC = () => {
  return (
    <header className="flex items-center pb-8 pl-2 pt-7 2xl:pr-40">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <nav className="flex flex-1 items-center justify-end">
        <ul className="hidden items-center md:flex md:gap-12 lg:flex lg:gap-[110px] xl:flex 2xl:flex">
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
