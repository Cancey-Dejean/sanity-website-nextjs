import { ButtonProps } from "@/components/ui/button";

export type Link = {
  url: string;
  label: string | null;
  newTab?: boolean;
};

export type MenuList = Link & {
  description?: string;
};

export type HighlightItems = {
  image?: string;
  imageAlt?: string;
  link?: Link;
};

export type MenuColumns = {
  label: string;
  menuList?: MenuList[] | null;
  callToAction?: Link | null;
};

export type HighlightList = {
  label: string;
  items: HighlightItems[];
  callToAction?: Link | null;
};

export type SecondaryMenu = {
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  cta?: Link | null;
};

export type Menu = {
  label?: string | null;
  url?: string | null;
  _type?: "customUrl" | "subMenu";
  menuColumns?: MenuColumns[] | null;
  highlightList?: HighlightList | null;
  secondaryMenu?: SecondaryMenu | null;
};
