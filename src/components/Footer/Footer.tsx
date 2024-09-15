import React from "react";
import Image from "next/image";
import FooterWrapper from "./FooterWrapper";
import Link from "next/link";
import {
  footerLogo,
  footerArrow,
  footerGPS,
  footerPhone,
  footerFb,
  footerInst,
  footerTwitter,
} from "../../app/icons.index";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="hidden lg:block mr-8 xl:mr-32 2xl:mr-32">
        <Image src={footerLogo} alt={"footer-logo"} />
      </div>

      <div className="flex flex-col-reverse flex-1 justify-between mr-8 md:gap-7 sm:gap-5 lg:gap-0 xl:gap-0 2xl:gap-0 xl:mr-28 2xl:mr-28">
        <div className="flex flex-col sm:flex-col sm:items-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between gap-2">
          <p className="flex items-center gap-4">
            <Image src={footerGPS} alt={"footer-location"} />
            <span>viale Pavia 26 • Lodi, IT, 26900</span>
          </p>

          <p className="flex items-center gap-4">
            <Image src={footerPhone} alt={"footer-phone"} />
            <Link href={""}>(+39) 0371 36011</Link>
          </p>

          <div className="flex items-center gap-2">
            <span>Social Media</span>
            <Link href={""}>
              <Image src={footerFb} alt={"footer-facebook-link"} />
            </Link>
            <Link href={""}>
              <Image src={footerInst} alt={"footer-instagram-link"} />
            </Link>
            <Link href={""}>
              <Image src={footerTwitter} alt={"footer-twitter-x-link"} />
            </Link>
          </div>
        </div>

        <hr
          style={{ borderColor: "#9C1006" }}
          className="hidden lg:block xl:block 2xl:block mt-10 mb-10"
        />

        <div className="flex flex-col sm:flex-col sm:items-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between gap-2">
          <Link href={""}>ABOUT US</Link>
          <Link href={""}>CONTACT</Link>
          <Link href={""}>HELP</Link>
          <Link href={""}>PRIVACY POLICY</Link>
          <p className="text-sm">Copyright © 2022 • Project Space Archinti</p>
        </div>
      </div>

      <div className="hidden lg:block xl:block 2xl:block pt-10">
        <Image src={footerArrow} alt={"footer-arrow"} />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
