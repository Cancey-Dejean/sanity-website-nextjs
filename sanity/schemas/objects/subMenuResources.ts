import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const subMenuResources = defineType({
  name: "subMenuResources",
  title: "Resources",
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
      title: "Menu",
      type: "array",
      of: [
        {
          type: "navItem",
        },
      ],
      validation: (rule) => rule.required().min(1).max(4),
    },
    {
      name: "callToAction",
      title: "Call to action",
      type: "customUrl",
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
