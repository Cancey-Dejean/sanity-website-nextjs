import { Fa42Group } from "react-icons/fa6";

export const dateFormat = "MMMM d, yyyy";

export const GROUPS = [
  {
    name: "seo",
    title: "SEO",
    icon: Fa42Group,
  },
  {
    name: "pageBuilder",
    title: "Page Builder",
    icon: Fa42Group,
  },
];

export const handleClick = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (setIsOpen) {
    setIsOpen(false); // Ensure setIsOpen is called correctly
  }
};
