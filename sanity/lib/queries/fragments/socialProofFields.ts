import { groq } from "next-sanity";

export const SOCIAL_PROOF_FIELDS = groq`
  _type == "socialProof" => {
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
    },
`;
