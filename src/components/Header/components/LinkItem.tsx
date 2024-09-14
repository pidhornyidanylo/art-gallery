"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps = {
  title: string;
  href: string;
};

const LinkItem: React.FC<LinkItemProps> = (props: LinkItemProps) => {
  const pathname = usePathname();
  const isActualPathname = pathname === props.href
  return (
    <li>
      <Link className="text text-2xl" style={{ color: isActualPathname ? "#9C1006" : "black" }} href={props.href}>
        {props.title}
      </Link>
    </li>
  );
};

export default LinkItem;
