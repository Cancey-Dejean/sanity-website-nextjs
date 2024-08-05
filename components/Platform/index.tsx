import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import {
  MaterialSymbolsLightCheck,
  PlatformSectionApiIllustration,
  PlatformSectionIllustrationLayers,
  PlatformSectionStudioIllustration,
} from "@/components/ui/svgIcons";
import { twMerge } from "tailwind-merge";

export default function Platform() {
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="heading-md font-inter font-extrabold leading-none text-red-400">
            Platform overview
          </p>

          <SectionTitle size="display-md" className="font-light leading-[1.2]">
            Sanity Composable Content Cloud
          </SectionTitle>
        </div>

        <div className="mx-auto grid max-w-[1036px] grid-cols-[1fr_240px_1fr] grid-rows-3 gap-12">
          {/* SVGs */}

          <div className="col-start-2 row-span-3 grid gap-6">
            <PlatformSectionStudioIllustration />

            <PlatformSectionApiIllustration />

            <PlatformSectionIllustrationLayers />
          </div>

          {/* Text 1 */}
          <div className="col-start-3">
            <TextGroup
              title="Studio"
              description="A fully customizable content workspace that mirrors your business and unleashes velocity and creativity."
            />
          </div>

          {/* Text 2 */}
          <div className="row-start-2">
            <TextGroup
              alignment="right"
              title="APIs"
              description="Powerful and intuitive interfaces that are the fabric of your composable content architecture."
            />
          </div>

          {/* Text 3 */}
          <div className="col-start-3 row-start-3">
            <TextGroup
              title="Content Lake"
              description="A no-ops storage and distribution layer that syncs content and data for use by teams across your organization."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TextGroup({
  title,
  description,
  alignment = "left",
}: {
  title: string;
  description: string;
  alignment?: "left" | "right";
}) {
  return (
    <div className={twMerge(alignment === "left" ? "text-left" : "text-right")}>
      <Badge>{title}</Badge>
      <p>{description}</p>
    </div>
  );
}
