import { groq } from "next-sanity"

export const AUTHOR_FIELDS = groq`
  name,
  bio,
  "authorImage": image.asset->url,
  "authorImageAlt": image.alt,
  "authorSlug": slug.current,
`
