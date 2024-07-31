import AddContent from "@/components/AddContent";
import Hero from "@/components/Hero/Hero";

export const Sections = (section: any) => {
  switch (section._type) {
    case "hero":
      return <Hero key={section._type} />;
  }
};
