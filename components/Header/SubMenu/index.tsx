import { HighlightItems, Menu, MenuColumns, MenuList } from "@/types";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/svgIcons";
import React from "react";
import Image from "next/image";

export default function SubMenu({ menuColumns, highlightList }: Menu) {
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
                <Link
                  className="text-sm font-semibold leading-none"
                  href={url || ""}
                  target={newTab ? "_blank" : "_self"}
                >
                  {label}
                </Link>

                {description && (
                  <p className="text-xs font-medium leading-none text-gray-600 transition-colors duration-300 ease-in-out after:absolute after:inset-0 group-hover:text-gray-900">
                    {description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {callToAction?.label ? (
            <div className="mt-auto">
              <Link
                href={callToAction?.url || "#cta"}
                className="mt-8 flex items-center gap-1 text-sm font-semibold"
              >
                <span>{callToAction?.label}</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          ) : null}
        </div>
      ))}

      {(highlightList?.items ?? []).length > 0 && (
        <div className="flex flex-col">
          <p className="font-jetBrainsMono mb-5 text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600">
            {highlightList?.label}
          </p>

          <div className="flex min-w-[200px] gap-8">
            {highlightList?.items.map(
              ({ image, imageAlt, link }: HighlightItems) => (
                <div key={link?.label} className="flex items-center gap-3">
                  {image && (
                    <Image
                      src={image}
                      alt={imageAlt || "Logo Alt"}
                      width={20}
                      height={23}
                    />
                  )}

                  <Link
                    href={link?.url || "#"}
                    className="text-sm font-semibold leading-none"
                  >
                    {link?.label}
                  </Link>
                </div>
              ),
            )}
          </div>

          {highlightList?.callToAction?.label && (
            <div className="mt-auto flex items-start">
              <Link
                href={highlightList?.callToAction?.url || "#cta"}
                className="mt-8 flex items-center gap-1 text-sm font-semibold"
              >
                <span>{highlightList?.callToAction?.label}</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
