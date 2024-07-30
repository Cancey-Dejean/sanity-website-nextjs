import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Menu, MenuColumns, MenuList, SecondaryMenu } from "@/types";
import Link from "next/link";
import { CloseIcon, HamburgerMenu } from "@/components/ui/svgIcons";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";
import {
  ColumnLabel,
  CtaLink,
  HighLightBlock,
  MenuColumnItem,
  MenuItemDesc,
} from "@/components/Header/SubMenu";

export default function MobileMenu({
  isOpen,
  setIsOpen,
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
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMobileMenu: () => void;
}) {
  return (
    <div className="flex xl:hidden">
      {/* Custom Button to open the Dialog */}
      <button onClick={handleMobileMenu}>
        <HamburgerMenu className="size-7" />
      </button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button style={{ display: "none" }}></button>
        </Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="full fixed inset-0 m-auto overflow-auto rounded bg-white shadow-lg">
          <div className="grid h-full grid-rows-[auto_1fr]">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-3 py-3 xl:px-8">
              <Link href="/" className="flex h-10" onClick={handleMobileMenu}>
                <Image
                  src={
                    logoImage ||
                    "https://dummyimage.com/115x24.png/dddddd/ffffff"
                  }
                  width={114}
                  height={24}
                  alt={logoAlt || "Logo Alt"}
                />
              </Link>

              <button onClick={handleMobileMenu}>
                <span className="sr-only">Hide Navigation</span>
                <CloseIcon className="size-7" />
              </button>
            </div>

            <Container className="flex grow flex-col pb-3">
              {secondaryMenu.length > 0 && (
                <div className="mt-3 flex flex-col-reverse gap-3">
                  {secondaryMenu?.map(
                    ({ variant, size, cta }: SecondaryMenu) => (
                      <Button
                        size={size}
                        variant={variant}
                        asChild
                        key={cta?.label}
                        className="first:justify-start"
                        onClick={handleMobileMenu}
                      >
                        <Link href={cta?.url || "#"}>{cta?.label}</Link>
                      </Button>
                    ),
                  )}
                </div>
              )}

              {menu.length > 0 && (
                <ul className="flex grow flex-col items-start justify-start">
                  {menu.map(
                    (
                      { label, url, newTab, menuColumns, highlightList }: Menu,
                      index,
                    ) => (
                      <li
                        key={label}
                        className="w-full last:border-b last:border-b-gray-50 has-[>a]:border-t has-[>a]:border-t-gray-50"
                      >
                        {url ? (
                          <Link
                            href={url || "#"}
                            className={twMerge(
                              "!w-full !justify-start",
                              navigationMenuTriggerStyle(),
                            )}
                            onClick={handleMobileMenu}
                          >
                            {label}
                          </Link>
                        ) : (
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem
                              value={`item-${index}`}
                              className="border-b-0 data-[state=closed]:border-t data-[state=closed]:border-t-gray-50 data-[state=open]:!border-t-transparent"
                            >
                              <AccordionTrigger
                                className={twMerge(
                                  "!justify-between hover:!bg-transparent hover:no-underline data-[state=open]:!bg-gray-50",
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
                                    handleMobileMenu,
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
                                              <MenuColumnItem
                                                label={label}
                                                url={url}
                                                newTab={newTab}
                                              >
                                                <MenuItemDesc
                                                  description={description}
                                                />
                                              </MenuColumnItem>
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
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
