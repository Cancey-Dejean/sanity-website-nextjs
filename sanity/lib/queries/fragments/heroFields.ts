import { groq } from "next-sanity";

export const HERO_FIELDS = groq`
  heading,
  subHeading,
  copyPasteText,
  hide,
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
