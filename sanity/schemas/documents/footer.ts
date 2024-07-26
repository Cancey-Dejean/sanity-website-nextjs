import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
  initialValue: {
    title: "Change Text To Desired Title",
  },
  preview: {
    select: {
      title: "title",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Robotos",
        subtitle: "Footer",
        media: media || FaRegImage,
      };
    },
  },
});
