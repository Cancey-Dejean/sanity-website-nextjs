import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";
import { MenuColumn } from "@/types";

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
      name: "menuColumn",
      title: "Menu Column",
      type: "navItem",
    },
    {
      name: "highlightList",
      title: "Highlight List",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: "items",
          title: "Items",
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
    },
  ],
  initialValue: {
    label: "Category",
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
