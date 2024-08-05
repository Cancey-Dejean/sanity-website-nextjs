import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const platformSection = defineType({
  name: "platform",
  type: "object",
  title: "Platform",
  fields: [
    {
      name: "focusText",
      type: "string",
      title: "Focus Text",
    },
    {
      name: "heading",
      type: "sectionTitle",
      title: "Heading",
    },
    {
      name: "hide",
      type: "hideItem",
    },
  ],
  initialValue: {
    title: "Section Title",
    heading: "Heading",
  },
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Platform",
        media: FaRegImage,
      };
    },
  },
});
