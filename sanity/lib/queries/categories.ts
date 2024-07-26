import { groq } from "next-sanity"

export const ALL_CATEGORIES_QUERY = groq`*[_type == "category"] {
  title,
  description,
  "currentSlug": slug.current,
  "categoryImage": image.asset->url,
  "categoryImageAlt": image.alt
}`
