import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "button",
    //   title: "Button",
    //   type: "button",
    // }),
  ],
  initialValue: {
    heading: "Title",
  },
  preview: {
    select: {
      title: "heading",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Section Title",
        subtitle: "Hero",
        media: media || FaRegImage,
      };
    },
  },
});
