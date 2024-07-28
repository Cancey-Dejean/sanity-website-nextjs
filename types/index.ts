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
  callToAction: Link | null;
};

export type HighlightList = {
  label: string;
  items: HighlightItems[];
  callToAction: Link | null;
};

export type MenuColumn = MenuColumns;

export type Menu = {
  label?: string | null;
  _type?:
    | "subMenuBase"
    | "subMenuHighlight"
    | "subMenuDocs"
    | "subMenuResources";
  menuColumns?: MenuColumns[] | null;
  menuColumn?: MenuColumn | null;
  highlightList?: HighlightList | null;
};

// export type HeaderContent = {
//   logoImage: string;
//   logoAlt?: string;
//   menu: [];
// };
