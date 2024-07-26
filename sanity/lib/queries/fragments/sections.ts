import { groq } from "next-sanity";
import { HERO_FIELDS } from "./heroFields";

export const ALL_SECTIONS_QUERY = groq`
  _type == "hero" => {
    ${HERO_FIELDS}
  },
`;
