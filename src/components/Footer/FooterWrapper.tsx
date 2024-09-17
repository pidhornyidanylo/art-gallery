'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type FooterWrapperProps = {
  children: React.ReactNode;
};

const FooterWrapper: React.FC<FooterWrapperProps> = ({
  children,
}: FooterWrapperProps) => {
  const pathaname = usePathname();
  return (
    <footer
      className={clsx(
        'relative mt-16 flex border-t border-customRed pb-9 pl-0 pt-4 text-customRed md:pb-12 md:pt-12 lg:pb-12 lg:pt-12 xl:pb-12 xl:pt-12 2xl:pb-12 2xl:pt-12',
        {
          '2xl:pl-32': pathaname === '/',
        }
      )}
    >
      {children}
    </footer>
  );
};

export default FooterWrapper;
