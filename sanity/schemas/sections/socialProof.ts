import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const socialProof = defineType({
  name: "socialProof",
  type: "object",
  title: "Social Proof",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "customImage",
        },
      ],
      validation: (rule) => rule.required().min(8).max(16),
    },
    {
      name: "hide",
      type: "hideItem",
    },
  ],
  initialValue: {},
  preview: {
    select: {
      title: "Social Proof",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Social Proof",
        media: FaRegImage,
      };
    },
  },
});
