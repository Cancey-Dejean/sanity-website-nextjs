import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { CircleCheck } from "@/components/ui/svgIcons";

export default function TabContentDefault() {
  return (
    <div className="pt-6 text-xl">
      <SectionTitle className="mb-12 text-center">
        The most flexible content workspace
      </SectionTitle>

      <div className="grid grid-cols-[478px_100px_1fr] gap-6 font-sourceSerif4">
        <div className="col-start-1">
          <div className="[&_em]:not-italic [&_em]:text-red-400">
            <em>Sanity Studio</em> provides content creators with tailored
            editing interfaces that match the unique ways content drives your
            business. Built as open-source, the Studio acts as a central hub for
            content creation and operations for your composable business.
          </div>
        </div>

        <ul className="row-start-2 flex flex-col gap-3">
          <li className="item-center flex gap-2">
            <CircleCheck className="size-[25px] self-center text-red-400" />
            <span>Deeply customizable content workspaces</span>
          </li>
          <li className="item-center flex gap-2">
            <CircleCheck className="size-[25px] self-center text-red-400" />
            <span>Deeply customizable content workspaces</span>
          </li>
          <li className="item-center flex gap-2">
            <CircleCheck className="size-[25px] self-center text-red-400" />
            <span>Deeply customizable content workspaces</span>
          </li>
        </ul>

        <div className="col-start-1 row-start-3">
          <Button asChild variant="outline">
            <Link href="#">Learn more</Link>
          </Button>
        </div>

        <div className="col-start-3 row-span-3">
          <Image
            src="/images/platform1.webp"
            alt={""}
            width={612}
            height={459}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
