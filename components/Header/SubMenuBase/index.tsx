import { Menu, MenuColumns, MenuList } from "@/types";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/svgIcons";
import React from "react";

export default function SubMenuBase({ menuColumns }: Menu) {
  return (
    <div className={"flex gap-16"}>
      {menuColumns?.map(({ label, menuList, callToAction }: MenuColumns) => (
        <div className="flex grow flex-col" key={label}>
          <p className="font-jetBrainsMono mb-5 text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600">
            {label}
          </p>

          <div className="flex flex-col gap-5">
            {menuList?.map(({ url, label, description, newTab }: MenuList) => (
              <div className="group relative" key={label}>
                <p className="text-sm font-semibold leading-none">{label}</p>
                <Link
                  href={url || ""}
                  className="text-xs font-medium leading-none text-gray-600 transition-colors duration-300 ease-in-out after:absolute after:inset-0 group-hover:text-gray-900"
                  target={newTab ? "_blank" : "_self"}
                >
                  {description}
                </Link>
              </div>
            ))}
          </div>

          {callToAction?.label !== null && (
            <div className="mt-auto">
              <Link
                href={callToAction?.url || "#cta"}
                className="mt-8 flex items-center gap-1 text-sm font-semibold"
              >
                <span>{callToAction?.label}</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
