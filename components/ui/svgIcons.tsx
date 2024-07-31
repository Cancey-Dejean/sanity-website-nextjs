import React, { SVGProps } from "react";
import { cn } from "@/lib/utils";

export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
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
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-sanity-icon="close"
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 7L7 18M7 7L18 18"
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

export function IcSharpAttachMoney(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"
      ></path>
    </svg>
  );
}
