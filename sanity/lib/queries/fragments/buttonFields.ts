import { groq } from "next-sanity";

export const BUTTON_FIELDS = groq`
  label,
  newTab,
  url,
  variant
  size,
  hide,
`;
