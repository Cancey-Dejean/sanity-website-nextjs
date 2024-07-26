import { groq } from "next-sanity"

// Get Sitesettings
const SETTINGS_QUERY = groq`
 "settings": *[_type == "siteSettings"] {
    companyName
  }
`

// Get Header Settings
const HEADER_QUERY = groq`
  "header": *[_type == "header"][0] {
    "logoImage": logoImage.asset->url,
    "logoImageAlt": logoImage.alt,
    menu-> {
      ...,
      menuList [] {
        cta,
        label,
        newTab,
        url
      }
    }
  }
`

// Get Footer Settings
const FOOTER_QUERY = groq`
  "footer": *[_type == "footer"][0] {
    newsletter {
      heading,
      buttonText,
      text
    },
    titleLineOne,
    titleLineTwo,
    button {
      variant,
      label,
      newTab,
      url
    },
    text
  }
`

// Get All Settings
export const ALL_SETTINGS_QUERY = groq`{
  ${SETTINGS_QUERY},
  ${HEADER_QUERY},
  ${FOOTER_QUERY}
}`
