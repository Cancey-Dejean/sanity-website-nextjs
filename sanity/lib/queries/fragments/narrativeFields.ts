import { groq } from "next-sanity";
import { BUTTON_GROUP_FIELDS } from "@/sanity/lib/queries/fragments/buttonGroupFields";

export const NARRATIVE_FIELDS = groq`
  heading,
  subHeading,
  hide,
  ${BUTTON_GROUP_FIELDS},
`;
