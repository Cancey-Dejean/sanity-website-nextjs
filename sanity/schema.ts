import { type SchemaTypeDefinition } from "sanity";

import header from "@/sanity/schemas/documents/header";
import footer from "@/sanity/schemas/documents/footer";
import { customImage } from "@/sanity/schemas/singletons/customImage";
import menus from "@/sanity/schemas/documents/menus";
import { navItem } from "@/sanity/schemas/objects/navItem";
import { subMenuBase } from "@/sanity/schemas/objects/subMenuBase";
import { subMenuHighlight } from "@/sanity/schemas/objects/subMenuHighlight";
import { link } from "@/sanity/schemas/objects/link";
import { subMenuDocs } from "@/sanity/schemas/objects/subMenuDocs";
import { subMenuResources } from "@/sanity/schemas/objects/subMenuResources";
import { customUrl } from "@/sanity/schemas/objects/customUrl";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    header,
    footer,
    menus,

    // Objects
    navItem,
    link,
    subMenuBase,
    subMenuHighlight,
    subMenuDocs,
    subMenuResources,
    customUrl,

    // Singletons
    customImage,
  ],
};
