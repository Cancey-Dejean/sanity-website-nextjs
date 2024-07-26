import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const subMenuHighlight = defineType({
  name: "subMenuHighlight",
  title: "Highlight",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "menuList",
      title: "Menu Lists",
      type: "array",
      of: [
        {
          type: "navItem",
        },
      ],
      validation: (rule) => rule.required().min(1).max(3),
    },
  ],
  initialValue: {
    label: "Link",
    newTab: false,
    cta: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: IoIosLink,
      };
    },
  },
});
