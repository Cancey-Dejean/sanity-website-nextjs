// import {
//   SubMenuBase,
//   SubMenuDocs,
//   SubMenuHighlight,
//   SubMenuResources,
// } from "@/sanity.types";

export type Menu = {
  label?: string | null;
  _type:
    | "subMenuBase"
    | "subMenuHighlight"
    | "subMenuDocs"
    | "subMenuResources";
  menuList: [];
};
