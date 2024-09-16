'use client';
import { useEffect, useState } from 'react';
import LinkItem from './LinkItem';
import clsx from 'clsx';

type BurgerProps = {
  linksArray: { title: string; href: string }[];
};

const Burger: React.FC<BurgerProps> = ({ linksArray }: BurgerProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const burgerSpanClasses =
    'block h-1 w-9 cursor-pointer rounded-md bg-slate-600';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={clsx(
          'flex flex-col gap-1 transition-all md:hidden lg:hidden xl:hidden 2xl:hidden',
          {
            '-translate-x-36 rotate-90': showMenu,
          }
        )}
      >
        <span
          className={clsx(burgerSpanClasses, {
            'translate-y-1 rotate-45': showMenu,
          })}
        ></span>
        <span
          className={clsx(burgerSpanClasses, {
            hidden: showMenu,
          })}
        ></span>
        <span
          className={clsx(burgerSpanClasses, {
            '-translate-y-1 -rotate-45': showMenu,
          })}
        ></span>
      </div>
      <ul
        className={clsx('absolute md:hidden lg:hidden xl:hidden 2xl:hidden', {
          '-top-8 right-0 flex w-40 flex-col items-end': showMenu,
          hidden: !showMenu,
        })}
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
