import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const subMenu = defineType({
  name: "subMenu",
  title: "Dropdown",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "menuColumns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "navItem",
        },
      ],
      validation: (rule) => rule.required().min(1).max(3),
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
          validation: (rule) => rule.max(14),
        },
        {
          name: "callToAction",
          title: "Call to action",
          type: "customUrl",
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
