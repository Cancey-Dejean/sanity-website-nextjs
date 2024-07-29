import { twMerge } from "tailwind-merge";
import { CloseIcon } from "@/components/ui/svgIcons";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import {
  HighlightList,
  Menu,
  MenuColumns,
  MenuList,
  SecondaryMenu,
} from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  ColumnLabel,
  CtaLink,
  HighLightBlock,
  MenuColumnItem,
  MenuItemDesc,
} from "@/components/Header/SubMenu";

export default function MobileMenu({
  logoImage,
  logoAlt,
  secondaryMenu,
  menu,
  handleMobileMenu,
}: {
  logoImage: string;
  logoAlt?: string;
  menu: Menu[];
  secondaryMenu: SecondaryMenu[];
  handleMobileMenu: () => void;
}) {
  return (
    <nav
      // @ts-ignore
      popover=""
      id="mobileMenu"
      className={twMerge(
        "h-full w-full place-items-center bg-transparent p-0 text-black",
        "opacity-0 transition-[opacity,overlay,display] duration-500 transition-discrete popover-open:opacity-100 starting:popover-open:opacity-0",
        "backdrop:bg-white backdrop:opacity-0 backdrop:backdrop-blur-md backdrop:transition-[opacity,overlay,display] backdrop:duration-500 backdrop:transition-discrete backdrop:popover-open:opacity-100 backdrop:starting:popover-open:opacity-0",
      )}
    >
      <div className="relative flex h-full w-full flex-col items-stretch justify-start">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 bg-white p-3 xl:px-8">
          <Image
            src={logoImage || "https://dummyimage.com/115x24.png/dddddd/ffffff"}
            width={114}
            height={24}
            alt={logoAlt || "Logo Alt"}
            className="pt-1"
          />

          <button
            type="button"
            // @ts-ignore
            popovertarget="mobileMenu"
            onClick={handleMobileMenu}
          >
            <span className="sr-only">Hide Navigation</span>
            <CloseIcon className="size-7" />
          </button>
        </div>

        <Container>
          {secondaryMenu.length > 0 && (
            <div className="flex flex-col-reverse gap-3 pt-3">
              {secondaryMenu?.map(({ variant, size, cta }: SecondaryMenu) => (
                <Button
                  size={size}
                  variant={variant}
                  asChild
                  key={cta?.label}
                  className="first:justify-start"
                >
                  <Link href={cta?.url || "#"}>{cta?.label}</Link>
                </Button>
              ))}
            </div>
          )}

          {menu.length > 0 && (
            <ul className="flex grow flex-col items-start justify-center">
              {menu.map(
                ({ label, url, menuColumns, highlightList }: Menu, index) => (
                  <li key={label} className="w-full border-t border-b-gray-50">
                    {url ? (
                      <Link
                        href={url}
                        className={twMerge(
                          "!w-full !justify-start",
                          navigationMenuTriggerStyle(),
                        )}
                      >
                        {label}
                      </Link>
                    ) : (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                          value={`item-${index}`}
                          className="border-b-0"
                        >
                          <AccordionTrigger
                            className={twMerge(
                              "!justify-between hover:no-underline",
                              navigationMenuTriggerStyle(),
                            )}
                          >
                            {label}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-8 px-3 py-5">
                            {menuColumns?.map(
                              ({
                                label,
                                menuList,
                                callToAction,
                              }: MenuColumns) => (
                                <div key={label}>
                                  <ColumnLabel label={label} />

                                  <div className="flex flex-col gap-5">
                                    {menuList?.map(
                                      ({
                                        url,
                                        label,
                                        description,
                                        newTab,
                                      }: MenuList) => (
                                        <div className="flex" key={label}>
                                          <div
                                            className="group relative"
                                            key={label}
                                          >
                                            <MenuColumnItem
                                              label={label}
                                              url={url}
                                              newTab={newTab}
                                            />

                                            <MenuItemDesc
                                              description={description}
                                            />
                                          </div>
                                        </div>
                                      ),
                                    )}
                                  </div>

                                  <CtaLink
                                    label={callToAction?.label}
                                    url={callToAction?.url || "#cta"}
                                  />
                                </div>
                              ),
                            )}

                            {(highlightList?.items ?? []).length > 0 && (
                              <HighLightBlock
                                label={highlightList?.label}
                                items={highlightList?.items}
                                callToAction={highlightList?.callToAction}
                              />
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </li>
                ),
              )}
            </ul>
          )}
        </Container>
      </div>
    </nav>
  );
}
