import React from 'react';
import Image from 'next/image';
import FooterWrapper from './FooterWrapper';
import Link from 'next/link';
import {
  footerLogo,
  footerArrow,
  footerGPS,
  footerPhone,
  footerFb,
  footerInst,
  footerTwitter,
} from '../../app/icons.index';

const Footer: React.FC = () => {
  const footerInnerInfoContainerStyles =
    'flex flex-col items-center justify-between gap-2 sm:flex-col sm:items-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row';

  return (
    <FooterWrapper>
      <div className="mr-8 hidden lg:block xl:mr-32 2xl:mr-32">
        <Image src={footerLogo} alt={'footer-logo'} />
      </div>

      <div className="mr-0 flex flex-1 flex-col justify-between gap-2 sm:gap-5 md:gap-7 lg:gap-0 xl:mr-28 xl:gap-0 2xl:mr-28 2xl:gap-0">
        <div className={footerInnerInfoContainerStyles}>
          <p className="hidden items-center gap-4 md:flex lg:flex xl:flex 2xl:flex">
            <Image src={footerGPS} alt={'footer-location'} />
            <span>viale Pavia 26 • Lodi, IT, 26900</span>
          </p>

          <p className="hidden items-center gap-4 md:flex lg:flex xl:flex 2xl:flex">
            <Image src={footerPhone} alt={'footer-phone'} />
            <Link href={''}>(+39) 0371 36011</Link>
          </p>

          <div className="fixed bottom-1 right-2 flex items-center gap-2 rounded-lg bg-white p-2 md:relative md:bottom-0 md:right-0 lg:relative lg:bottom-0 lg:right-0 xl:relative xl:bottom-0 xl:right-0 2xl:relative 2xl:bottom-0 2xl:right-0">
            <span className="hidden md:block lg:block xl:block 2xl:block">
              Social Media
            </span>
            <Link href={''}>
              <Image src={footerFb} alt={'footer-facebook-link'} />
            </Link>
            <Link href={''}>
              <Image src={footerInst} alt={'footer-instagram-link'} />
            </Link>
            <Link href={''}>
              <Image src={footerTwitter} alt={'footer-twitter-x-link'} />
            </Link>
            <Link
              href={''}
              className="block md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
              <Image src={footerGPS} alt={'footer-gps'} />
            </Link>
            <Link
              href={''}
              className="block pt-1 md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
              <Image src={footerPhone} alt={'footer-phone'} />
            </Link>
          </div>
        </div>

        <hr className="mb-10 mt-10 hidden border-customRed lg:block xl:block 2xl:block" />

        <div className={footerInnerInfoContainerStyles}>
          <Link href={''}>ABOUT US</Link>
          <Link href={''}>CONTACT</Link>
          <Link href={''}>HELP</Link>
          <Link href={''}>PRIVACY POLICY</Link>
          <p className="text-sm">Copyright © 2022 • Project Space Archinti</p>
        </div>
      </div>

      <div className="hidden pt-10 lg:block xl:block 2xl:block">
        <Image src={footerArrow} alt={'footer-arrow'} />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
