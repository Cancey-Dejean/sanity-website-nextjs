import { groq } from "next-sanity";

// Get Site settings
const SETTINGS_QUERY = groq`
 "settings": *[_type == "siteSettings"] {
    companyName
  }
`;

// Get Header Settings
const HEADER_QUERY = groq`
  "header": *[_type == "header"][0] {
    "logoImage": logo.asset->url,
    "logoImageAlt": logo.alt,
    menu [] {
      _type,
      
      _type == "customUrl" => {
        url,
        label,
        newTab
      },
      
      _type == "subMenu" => {
        label,
        url,
        menuColumns [] {
          label,
          menuList[] {
            url,
            description,
            label,
            newTab
          },
          callToAction {
            label,
            url,
            newTab,
          }
        },
        
        highlightList {
          label,
          items [] {
            "image": customImage.asset->url,
            "imageAlt": customImage.alt,
            link {
              label,
              newTab,
              url
            }
          },
          callToAction {
            label,
            newTab,
            url
          }
        },
      },


    }
  }
`;

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
`;

// Get All Settings
export const ALL_SETTINGS_QUERY = groq`{
  ${HEADER_QUERY},
}`;
