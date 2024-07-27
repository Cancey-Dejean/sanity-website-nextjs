import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";
import { FaRegImage } from "react-icons/fa6";

export const logoTextLink = defineType({
  name: "logoTextLink",
  title: "Text Link",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "customImage",
      type: "image",
      title: "Image",
      icon: FaRegImage,
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
    },
    {
      name: "url",
      title: "Url",
      type: "customUrl",
    },
  ],
  preview: {
    select: {
      title: "url.label",
      subtitle: "url.url",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: IoIosLink,
      };
    },
  },
});
