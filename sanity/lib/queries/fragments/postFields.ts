import { groq } from "next-sanity"
import { AUTHOR_FIELDS } from "./authorFields"

export const POST_FIELDS = groq`
  "ogImg": ogImage.asset->url,
  body,
  title,
  excerpt,
  _createdAt,
  _updatedAt,
  "categories": categories[]->,
  "featuredImg": featuredImage.asset->url,
  "featuredImgAlt": featuredImage.alt,
  "currentSlug": slug.current,
  author-> {
    ${AUTHOR_FIELDS}
  }
`
