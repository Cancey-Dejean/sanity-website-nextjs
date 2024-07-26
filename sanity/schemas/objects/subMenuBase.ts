import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const subMenuBase = defineType({
  name: "subMenuBase",
  title: "Base",
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
      validation: (rule) => rule.required().min(1).max(2),
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
