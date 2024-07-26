import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  icon: IoIosLink,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    {
      name: "menuList",
      title: "Menu",
      type: "array",
      of: [
        defineField({
          name: "menuItem",
          title: "Menu Item",
          type: "link",
        }),
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
  },
  preview: {
    select: {
      title: "label",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Label needs to be set",
        media: IoIosLink,
      };
    },
  },
});
