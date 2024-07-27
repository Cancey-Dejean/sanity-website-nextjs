export type Link = {
  url: string;
  label: string;
  newTab?: boolean;
};

export type MenuList = Link & {
  description?: string;
};

export type MenuColumns = {
  label: string;
  menuList?: MenuList[];
};

export type Menu = {
  label?: string | null;
  _type:
    | "subMenuBase"
    | "subMenuHighlight"
    | "subMenuDocs"
    | "subMenuResources";
  menuColumns?: MenuColumns[] | null;
};

export type HeaderContent = {
  logoImage: string;
  logoAlt?: string;
  menu: [];
};
