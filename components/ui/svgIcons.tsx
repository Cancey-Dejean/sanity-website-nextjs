import React, { SVGProps } from "react";
import { cn } from "@/lib/utils";

export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-sanity-icon="menu"
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 7.5H19M6 17.5H19M6 12.5H19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      color="#F36458"
      {...props}
    >
      <path
        d="M19.5 12.5H5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14 7L19.5 12.5L14 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
