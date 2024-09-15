"use client";
import React from "react";
import { usePathname } from "next/navigation";

type FooterWrapperProps = {
  children: React.ReactNode;
};

const FooterWrapper: React.FC<FooterWrapperProps> = ({
  children,
}: FooterWrapperProps) => {
  const pathaname = usePathname();
  return (
    <footer
      style={{ borderColor: "#9C1006", color: "#9C1006" }}
      className={`relative flex mt-16 pt-16 pb-14 border-t pl-0 ${pathaname === "/" ? "2xl:pl-32" : ""}`}
    >
      {children}
    </footer>
  );
};

export default FooterWrapper;
