import { defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "customImage",
    },
    {
      name: "menu",
      type: "array",
      title: "Primary Menu",
      of: [{ type: "customUrl" }, { type: "subMenu" }],
      validation: (rule) => rule.required().min(1).max(6),
    },
    {
      name: "secondaryMenu",
      type: "array",
      title: "Secondary Menu",
      of: [{ type: "button" }],
      validation: (Rule) => Rule.max(4),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
  initialValue: {
    title: "Change Text To Desired Title",
  },
});
