export type Link = {
  url: string;
  label: string | null;
  newTab?: boolean;
};

export type MenuList = Link & {
  description?: string;
};

export type HighlightItems = {
  image: string;
  imageAlt: string;
  url: Link;
};

export type MenuColumns = {
  label: string;
  menuList?: MenuList[];
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
  menuColumns?: MenuColumns[];
  menuColumn?: MenuColumn;
};

// export type HeaderContent = {
//   logoImage: string;
//   logoAlt?: string;
//   menu: [];
// };
