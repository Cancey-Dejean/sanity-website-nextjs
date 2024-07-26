import { groq } from "next-sanity"
import { ALL_SECTIONS_QUERY } from "../fragments/sections"
import { PAGE_FIELDS } from "../fragments/pageFields"

// Get all pages
export const PAGES_QUERY = groq`*[_type == "page"] {
  ${PAGE_FIELDS},
}`

// Get Single Page
export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  ${PAGE_FIELDS},
  pageBuilder [] {
    _type,
    ${ALL_SECTIONS_QUERY}
  }
}`
