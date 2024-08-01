import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const socialProof = defineType({
  name: "socialProof",
  type: "object",
  title: "Social Proof",
  fields: [
    {
      name: "items",
      title: "Items",
      description: "Add 2 image groups for social proof section to work.",
      type: "array",
      of: [
        {
          type: "socialProofGroup",
        },
      ],
      validation: (rule) => rule.required().min(2).max(2),
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
