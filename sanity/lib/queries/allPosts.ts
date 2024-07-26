import { groq } from "next-sanity"
import { client } from "../client"
import { POST_FIELDS } from "./fragments/postFields"

export const POSTS_QUERY = groq`*[_type == "blog"]  | order(_createdAt desc) {
  ${POST_FIELDS}
}`

export const getTotalPosts = async () => {
  const query = groq`count(*[_type == 'blog'])`
  return client.fetch(query)
}
