import { groq } from "next-sanity";
import { HERO_FIELDS } from "./heroFields";
import { SOCIAL_PROOF_FIELDS } from "@/sanity/lib/queries/fragments/socialProofFields";

export const ALL_SECTIONS_QUERY = groq`
  _type == "hero" => {
    ${HERO_FIELDS}
  },
  
  _type == "socialProof" => {
    ${SOCIAL_PROOF_FIELDS}
  }
`;
