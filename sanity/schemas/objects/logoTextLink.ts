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
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "link",
      title: "Link",
      type: "customUrl",
    },
  ],
  preview: {
    select: {
      title: "link.label",
      subtitle: "link.url",
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
