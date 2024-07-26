import { groq } from "next-sanity"
import { HERO_FIELDS } from "./heroFields"
import { GET_ROBOTS_FIELDS } from "./getRobotFields"
import { RARITY_LIST_FIELDS } from "./rarityListFields"
import { POST_FIELDS } from "./postFields"
import { FAQ_FIELDS } from "./faqFields"
import { ROBOT_GRID_FIELDS } from "./robotGridFields"

export const ALL_SECTIONS_QUERY = groq`
  _type == "hero" => {
    ${HERO_FIELDS}
  },

  _type == "getRobots" => {
    ${GET_ROBOTS_FIELDS}
  },

  _type == "intermission" => {
    ...
  },

  _type == "rarity" => {
    ${RARITY_LIST_FIELDS}
  },

  _type == "recentBlogs" => {
    heading,
    "blogs": *[_type == "blog"] | order(_createdAt desc) {
      ${POST_FIELDS}
    },
  },

  _type == "faqSection" => {
    ${FAQ_FIELDS}
  },

  _type == "robotGrid" => {
    ${ROBOT_GRID_FIELDS}
  },
`
