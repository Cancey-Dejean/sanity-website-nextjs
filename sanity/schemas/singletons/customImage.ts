import { defineType } from "sanity";

import { FaRegImage } from "react-icons/fa";

export const customImage = defineType({
  name: "customImage",
  type: "image",
  title: "Image",
  icon: FaRegImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt text",
      validation: (rule) => rule.error("Alt text is required").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
});
