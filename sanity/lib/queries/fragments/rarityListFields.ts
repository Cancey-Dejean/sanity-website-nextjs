import { groq } from "next-sanity"

export const RARITY_LIST_FIELDS = groq`
  heading,
  text,
  "bgImg": bgImage.asset->url,
  "rarityList": *[_type == "rarityList"] {
      title,
      "mainImage": image.asset->url,
      "mainImageAlt": image.alt,
      items []{
        boldText,
        title
      }
  }
`
