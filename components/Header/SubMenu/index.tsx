import {
  HighlightItems,
  HighlightList,
  LinkItem,
  Menu,
  MenuColumns,
  MenuList,
} from "@/types";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/svgIcons";
import React, { useState } from "react";
import Image from "next/image";

export default function SubMenu({ menuColumns, highlightList }: Menu) {
  return (
    <div className={"flex gap-16"}>
      {menuColumns?.map(({ label, menuList, callToAction }: MenuColumns) => (
        <div className="flex grow flex-col" key={label}>
          <ColumnLabel label={label} />

          <div className="flex flex-col gap-5">
            {menuList?.map(({ url, label, description, newTab }: MenuList) => (
              <div className="group relative" key={label}>
                <MenuColumnItem label={label} url={url} newTab={newTab} />

                <MenuItemDesc description={description} />
              </div>
            ))}
          </div>

          {callToAction?.label ? (
            <div className="mt-auto">
              <CtaLink
                label={callToAction?.label}
                url={callToAction?.url || "#cta"}
              />
            </div>
          ) : null}
        </div>
      ))}

      {(highlightList?.items ?? []).length > 0 && (
        <HighLightBlock
          label={highlightList?.label}
          items={highlightList?.items}
          callToAction={highlightList?.callToAction}
        />
      )}
    </div>
  );
}

function CtaLink({ url, newTab, label }: LinkItem) {
  if (!label) {
    return null;
  }

  return (
    <Link
      href={url || "#cta"}
      className="mt-8 flex items-center gap-1 text-sm font-semibold"
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <span>{label}</span>
      <ArrowRight className="size-5" />
    </Link>
  );
}

function ColumnLabel({ label }: { label?: string }) {
  if (!label) {
    return null;
  }

  return (
    <p className="mb-4 font-jetBrainsMono text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600 xl:mb-5">
      {label}
    </p>
  );
}

function MenuItemDesc({ description }: { description?: string }) {
  if (!description) {
    return null;
  }

  return (
    <p className="text-xs font-medium leading-none text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-900">
      {description}
    </p>
  );
}

function MenuColumnItem({ url, newTab, label, children }: LinkItem) {
  if (!label) {
    return null;
  }

  return (
    <div className="group relative">
      <Link
        href={url || "#"}
        className="text-sm font-semibold leading-none after:absolute after:inset-0"
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {label}
      </Link>
      {children}
    </div>
  );
}

function HighLightBlock({ label, items, callToAction }: HighlightList) {
  return (
    <div className="flex flex-col">
      <ColumnLabel label={label} />

      {items && items.length > 0 && (
        <div className="grid min-w-[200px] grid-cols-2 flex-wrap gap-5 sm:flex sm:gap-8">
          {items.map(({ image, imageAlt, link }: HighlightItems) => (
            <div key={link?.label} className="flex items-center gap-3">
              {image && (
                <Image
                  src={image}
                  alt={imageAlt || "Logo Alt"}
                  width={20}
                  height={23}
                />
              )}

              <MenuColumnItem
                label={link?.label || "Label"}
                url={link?.url || "#"}
              />
            </div>
          ))}
        </div>
      )}

      {callToAction?.label && (
        <div className="mt-auto flex items-start">
          <Link
            href={callToAction?.url || "#cta"}
            className="mt-8 flex items-center gap-1 text-sm font-semibold"
            target={callToAction?.newTab ? "_blank" : undefined}
            rel={callToAction?.newTab ? "noopener noreferrer" : undefined}
          >
            <span>{callToAction?.label}</span>
            <ArrowRight className="size-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
