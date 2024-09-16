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
        'border-customRed text-customRed relative mt-16 flex border-t pb-14 pl-0 pt-16',
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
