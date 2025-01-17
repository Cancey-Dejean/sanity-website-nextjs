import { groq } from "next-sanity";
import { BUTTON_GROUP_FIELDS } from "@/sanity/lib/queries/fragments/buttonGroupFields";

export const HERO_FIELDS = groq`
  heading,
  subHeading,
  copyPasteText,
  hide,
  ${BUTTON_GROUP_FIELDS}
`;
