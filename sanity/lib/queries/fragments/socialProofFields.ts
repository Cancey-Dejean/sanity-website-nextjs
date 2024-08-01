import { groq } from "next-sanity";

export const SOCIAL_PROOF_FIELDS = groq`
  items [] {
    images [] {
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
