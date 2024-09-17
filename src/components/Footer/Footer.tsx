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
          <p className="items-center gap-4 2xl:flex xl:flex lg:flex md:flex hidden">
            <Image src={footerGPS} alt={'footer-location'} />
            <span>viale Pavia 26 • Lodi, IT, 26900</span>
          </p>

          <p className="items-center gap-4 2xl:flex xl:flex lg:flex md:flex hidden">
            <Image src={footerPhone} alt={'footer-phone'} />
            <Link href={''}>(+39) 0371 36011</Link>
          </p>

          <div className="fixed bg-white rounded-lg p-2 bottom-1 right-2 flex items-center gap-2 md:relative md:bottom-0 md:right-0 lg:relative lg:bottom-0 lg:right-0 xl:relative xl:bottom-0 xl:right-0 2xl:relative 2xl:bottom-0 2xl:right-0">
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
            <Link href={''} className=' 2xl:hidden xl:hidden lg:hidden md:hidden block'>
              <Image src={footerGPS} alt={'footer-gps'} />
            </Link>
            <Link href={''} className='pt-1 2xl:hidden xl:hidden lg:hidden md:hidden block'>
              <Image src={footerPhone} alt={'footer-phone'} />
            </Link>
          </div>
        </div>

        <hr className="border-customRed mb-10 mt-10 hidden lg:block xl:block 2xl:block" />

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
