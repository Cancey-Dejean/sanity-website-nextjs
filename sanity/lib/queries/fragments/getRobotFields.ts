import { groq } from "next-sanity"
import { BUTTON_FIELDS } from "./buttonFields"

export const GET_ROBOTS_FIELDS = groq`
  heading,
  text,
  "bgImg": bgImage.asset->url,
  "topImage": image.asset->url,
  "topImageAlt": image.alt,
  button {
    ${BUTTON_FIELDS}
  },
  availability,
`
