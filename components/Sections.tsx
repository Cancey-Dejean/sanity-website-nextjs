import AddContent from "@/components/AddContent";

export const Sections = (section: any) => {
  switch (section._type) {
    case "hero":
      return <p key={section._type}>Hero</p>;
  }
};
