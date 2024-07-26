import { groq } from "next-sanity"

export const FAQ_FIELDS = groq`
  heading,
  "questions": *[_type == "faqList" && title == "Home"] {
    ...,
    items [] {
      "iconImage": icon.asset->url,
      "iconImageAlt": icon.alt,
      question,
      answer,
      imgWidth,
      imgHeight
    }
  }
`
