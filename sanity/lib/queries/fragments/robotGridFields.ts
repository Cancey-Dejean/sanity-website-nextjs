import { groq } from "next-sanity";

export const ROBOT_GRID_FIELDS = groq`
  "bgImg": bgImage.asset->url,
  heading,
  text,
  items [] {
    title,
    "mainImage": image.asset->url,
    "mainImageAlt": image.alt,
  }
`;
