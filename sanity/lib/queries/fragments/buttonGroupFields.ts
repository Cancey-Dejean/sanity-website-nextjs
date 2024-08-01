import { groq } from "next-sanity";

export const BUTTON_GROUP_FIELDS = groq`
  buttons [] {
    variant,
    size,
    hide,
    cta {
      url,
      label,
      newTab,
    }
  }
`;
