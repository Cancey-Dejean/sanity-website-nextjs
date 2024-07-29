import { type SchemaTypeDefinition } from "sanity";

import header from "@/sanity/schemas/documents/header";
import page from "@/sanity/schemas/documents/page";
import footer from "@/sanity/schemas/documents/footer";
import menus from "@/sanity/schemas/documents/menus";

import { navItem } from "@/sanity/schemas/objects/navItem";
import { link } from "@/sanity/schemas/objects/link";
import { customUrl } from "@/sanity/schemas/objects/customUrl";
import { pageBlocks } from "@/sanity/schemas/objects/pageBlocks";
import { logoTextLink } from "@/sanity/schemas/objects/logoTextLink";
import { subMenu } from "@/sanity/schemas/objects/subMenu";

import { heroSection } from "@/sanity/schemas/sections/hero";

import { customImage } from "@/sanity/schemas/singletons/customImage";
import { hideSection } from "@/sanity/schemas/singletons/hideSection";
import { button } from "@/sanity/schemas/objects/button";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    header,
    footer,
    menus,
    page,

    // Objects
    button,
    navItem,
    link,
    customUrl,
    subMenu,
    pageBlocks,
    logoTextLink,

    // Singletons
    customImage,
    hideSection,

    // Sections
    heroSection,
  ],
};
