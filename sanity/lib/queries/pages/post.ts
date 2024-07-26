import { groq } from "next-sanity"
import { POST_FIELDS } from "../fragments/postFields"

// Get single post
export const POST_QUERY = groq`*[_type == "blog" && slug.current == $slug][0] {
  body,
  ${POST_FIELDS}
}`
