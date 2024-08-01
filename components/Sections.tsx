import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Narrative from "@/components/Narrative";

export const Sections = (section: any) => {
  switch (section._type) {
    case "hero":
      return <Hero key={section._type} {...section} />;
    case "socialProof":
      return <SocialProof key={section._type} {...section} />;
    case "narrative":
      return <Narrative key={section._type} {...section} />;
  }
};
