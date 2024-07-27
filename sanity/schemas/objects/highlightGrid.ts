import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const highlightGrid = defineType({
  name: "highlightGrid",
  title: "Highlight Grid",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [
        {
          name: "menuItem",
          title: "Menu Item",
          type: "logoTextLink",
        },
      ],
      validation: (rule) => rule.required().min(1).max(12),
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
