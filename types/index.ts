import { ButtonProps } from "@/components/ui/button";

export type LinkItem = {
  url: string;
  label: string | null | undefined;
  newTab?: boolean;
};

// export type Link = {
//   url: string;
//   label: string | null;
//   newTab?: boolean;
// };

export type MenuList = LinkItem & {
  description?: string;
};

export type HighlightItems = {
  image?: string;
  imageAlt?: string;
  link?: LinkItem;
};

export type MenuColumns = {
  label: string;
  menuList?: MenuList[] | null;
  callToAction?: LinkItem | null;
};

export type HighlightList = {
  label: string | undefined;
  items: HighlightItems[] | undefined;
  callToAction?: LinkItem | null;
};

export type SecondaryMenu = {
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  cta?: LinkItem | null;
};

export type Menu = {
  label?: string | null;
  url?: string | null;
  _type?: "customUrl" | "subMenu";
  menuColumns?: MenuColumns[] | null;
  highlightList?: HighlightList | null;
  secondaryMenu?: SecondaryMenu | null;
};
