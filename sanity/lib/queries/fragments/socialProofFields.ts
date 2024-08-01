import { groq } from "next-sanity";

export const SOCIAL_PROOF_FIELDS = groq`
  items [] {
    images [] {
      alt,
      asset-> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      }
    }
  }
`;
