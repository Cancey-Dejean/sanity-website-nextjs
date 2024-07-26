import { groq } from "next-sanity"

export const PAGE_FIELDS = groq`
  metaTitle,
  metaDescription,
  "ogImg": ogImage.asset->url,
  "currentSlug": slug.current
`
