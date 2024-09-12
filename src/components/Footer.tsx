import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  footerLogo,
  footerArrow,
  footerGPS,
  footerPhone,
  footerFb,
  footerInst,
  footerTwitter,
} from "../app/icons.index";

const Footer = () => {
  return (
    <footer
      style={{ borderColor: "#9C1006", color: "#9C1006" }}
      className="mt-16 pb-14 pt-16 2xl:pl-32 pl-0 border-t flex"
    >
      <div className="2xl:mr-32 xl:mr-32 mr-8 2xl:block xl:block lg:block hidden">
        <Image src={footerLogo} alt={"footer-logo"} />
      </div>
      <div className="flex flex-1 2xl:flex-col justify-between 2xl:mr-28 xl:mr-28 mr-8 flex-row-reverse">
        <div className="flex 2xl:justify-between justify-start gap-2 2xl:flex-row flex-col">
          <p className="flex gap-4 items-center">
            <Image src={footerGPS} alt={"footer-location"} />
            <span>
              {" "}
              viale Pavia 26 • Lodi, IT, 26900
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <Image src={footerPhone} alt={"footer-phone"} />
            <Link href={""}>
              (+39) 0371 36011
            </Link>
          </p>
          <p className="flex gap-2 items-center">
            <span>Social Media</span>
            <Link href={""}>
              <Image src={footerFb} alt={"footer-facebook-link"}></Image>
            </Link>
            <Link href={""}>
              <Image src={footerInst} alt={"footer-instagram-link"}></Image>
            </Link>
            <Link href={""}>
              <Image src={footerTwitter} alt={"footer-twitter-x-link"}></Image>
            </Link>
          </p>
        </div>
        <hr style={{ borderColor: "#9C1006" }} className="mt-10 mb-10 2xl:block xl:block hidden" />
        <div className="flex 2xl:flex-row 2xl:gap-7 xl:gap-2 flex-col">
          <Link href={""}>
            ABOUT US
          </Link>
          <Link href={""}>
            CONTACT
          </Link>
          <Link href={""}>
            HELP
          </Link>
          <Link href={""}>
            PRIVACY POLICY
          </Link>
          <p className="text-sm">
            Copyright © 2022 • Project Space Archinti
          </p>
        </div>
      </div>
      <div className="pt-10 2xl:block xl:block lg:block hidden">
        <Image src={footerArrow} alt={"footer-arrow"} />
      </div>
    </footer>
  );
};

export default Footer;
