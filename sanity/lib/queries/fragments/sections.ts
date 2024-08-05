import { groq } from "next-sanity";
import { HERO_FIELDS } from "./heroFields";
import { SOCIAL_PROOF_FIELDS } from "@/sanity/lib/queries/fragments/socialProofFields";
import { NARRATIVE_FIELDS } from "@/sanity/lib/queries/fragments/narrativeFields";
import { PLATFORM_FIELDS } from "@/sanity/lib/queries/fragments/platformFields";

export const ALL_SECTIONS_QUERY = groq`
  _type == "hero" => {
    ${HERO_FIELDS}
  },
  
  _type == "socialProof" => {
    ${SOCIAL_PROOF_FIELDS}
  },
  
  _type == "narrative" => {
    ${NARRATIVE_FIELDS}
  },
  
  _type == "platform" => {
    ${PLATFORM_FIELDS}
  },
`;
