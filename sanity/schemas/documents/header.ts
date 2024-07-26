import { defineField, defineType } from "sanity";

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
      title: "Menu",
      of: [
        { type: "subMenuBase" },
        { type: "subMenuHighlight" },
        { type: "subMenuDocs" },
        { type: "subMenuResources" },
      ],
      validation: (rule) => rule.required().min(1),
    },
    // {
    //   name: "menu",
    //   type: "object",
    //   title: "Menu",
    //   fields: [
    //     {
    //       name: "content",
    //       type: "array",
    //       title: "Content",
    //       of: [
    //         { type: "subMenuBase" },
    //         { type: "subMenuHighlight" },
    //         { type: "subMenuDocs" },
    //         { type: "subMenuResources" },
    //       ],
    //       validation: (rule) => rule.required().min(1),
    //     },
    //   ],
    // },
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
