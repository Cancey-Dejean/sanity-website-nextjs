import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const subMenuDocs = defineType({
  name: "subMenuDocs",
  title: "Docs",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "menuList",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "navItem",
        },
      ],
      validation: (rule) => rule.required().min(1).max(4),
    },
    defineField({
      name: "callToAction",
      title: "Call to action",
      type: "link",
    }),
  ],
  initialValue: {
    label: "Link",
    newTab: false,
    cta: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "link.url",
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
