import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  HandleMobileMenu,
  HighlightItems,
  Menu,
  MenuColumns,
  MenuList,
  SecondaryMenu,
} from "@/types";
import Link from "next/link";
import { ArrowRight, CloseIcon, HamburgerMenu } from "@/components/ui/svgIcons";
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
  handleMobileMenu: HandleMobileMenu;
}) {
  return (
    <div className="flex xl:hidden">
      {/* Custom Button to open the Dialog */}
      <button onClick={handleMobileMenu}>
        <HamburgerMenu className="size-7" />
      </button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="full fixed inset-0 m-auto overflow-auto rounded bg-white shadow-lg">
          <div className="grid h-full grid-rows-[auto_1fr]">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-3 py-3 xl:px-8">
              {/* Logo */}
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

              {/* Hamburger Menu */}
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
                            onClick={() => setIsOpen(false)}
                            target={newTab ? "_blank" : "_self"}
                            rel={newTab ? "noopener noreferrer" : undefined}
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
                                {/* Menu Column */}
                                {menuColumns?.map(
                                  ({
                                    label,
                                    menuList,
                                    callToAction,
                                  }: MenuColumns) => (
                                    <div key={label}>
                                      <ColumnLabelMobile label={label} />

                                      <div className="flex flex-col gap-5">
                                        {menuList?.map(
                                          ({
                                            url,
                                            label,
                                            description,
                                            newTab,
                                          }: MenuList) => (
                                            <div className="flex" key={label}>
                                              <div className="group relative">
                                                <Link
                                                  href={url || "#"}
                                                  className="text-sm font-semibold leading-none after:absolute after:inset-0"
                                                  target={
                                                    newTab ? "_blank" : "_self"
                                                  }
                                                  rel={
                                                    newTab
                                                      ? "noopener noreferrer"
                                                      : undefined
                                                  }
                                                  onClick={() =>
                                                    setIsOpen(false)
                                                  }
                                                >
                                                  {label}
                                                </Link>

                                                <MenuItemDescMobile
                                                  description={description}
                                                />
                                              </div>
                                            </div>
                                          ),
                                        )}
                                      </div>

                                      {/* Menu Column CTA */}

                                      {callToAction?.label ? (
                                        <Link
                                          href={callToAction?.url || "#cta"}
                                          className="mt-8 flex items-center gap-1 text-sm font-semibold"
                                          target={newTab ? "_blank" : "_self"}
                                          rel={
                                            newTab
                                              ? "noopener noreferrer"
                                              : undefined
                                          }
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <span>{callToAction?.label}</span>
                                          <ArrowRight className="size-5" />
                                        </Link>
                                      ) : null}
                                    </div>
                                  ),
                                )}

                                {/* Highlight Section */}
                                {(highlightList?.items ?? []).length > 0 && (
                                  <div className="flex flex-col">
                                    <ColumnLabelMobile
                                      label={highlightList?.label}
                                    />

                                    {/* Highlight Section Items */}
                                    {highlightList?.items &&
                                      highlightList?.items.length > 0 && (
                                        <div className="grid min-w-[200px] grid-cols-2 flex-wrap gap-5 sm:flex sm:gap-8">
                                          {highlightList?.items.map(
                                            ({
                                              image,
                                              imageAlt,
                                              link,
                                            }: HighlightItems) => (
                                              <div
                                                key={link?.label}
                                                className="flex items-center gap-3"
                                              >
                                                {image && (
                                                  <Image
                                                    src={image}
                                                    alt={imageAlt || "Logo Alt"}
                                                    width={20}
                                                    height={23}
                                                  />
                                                )}

                                                <div className="group relative">
                                                  <Link
                                                    href={link?.url || "#"}
                                                    className="text-sm font-semibold leading-none after:absolute after:inset-0"
                                                    target={
                                                      highlightList
                                                        ?.callToAction?.newTab
                                                        ? "_blank"
                                                        : "_self"
                                                    }
                                                    rel={
                                                      highlightList
                                                        ?.callToAction?.newTab
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                    }
                                                    onClick={() =>
                                                      setIsOpen(false)
                                                    }
                                                  >
                                                    {link?.label || "Label"}
                                                  </Link>
                                                </div>
                                              </div>
                                            ),
                                          )}
                                        </div>
                                      )}

                                    {/* Highlight Section CT */}
                                    {highlightList?.callToAction?.label ? (
                                      <div className="mt-auto flex items-start">
                                        <Link
                                          href={
                                            highlightList?.callToAction?.url ||
                                            "#cta"
                                          }
                                          className="mt-8 flex items-center gap-1 text-sm font-semibold"
                                          target={
                                            highlightList?.callToAction?.newTab
                                              ? "_blank"
                                              : undefined
                                          }
                                          rel={
                                            highlightList?.callToAction?.newTab
                                              ? "noopener noreferrer"
                                              : undefined
                                          }
                                        >
                                          <span>
                                            {highlightList?.callToAction?.label}
                                          </span>
                                          <ArrowRight className="size-5" />
                                        </Link>
                                      </div>
                                    ) : null}
                                  </div>
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

// function CtaLinkMobile({ url, newTab, label }: LinkItem) {
//   if (!label) {
//     return null;
//   }
//
//   return (
//     <Link
//       href={url || "#cta"}
//       className="mt-8 flex items-center gap-1 text-sm font-semibold"
//       target={newTab ? "_blank" : "_self"}
//       rel={newTab ? "noopener noreferrer" : undefined}
//       onClick={() => alert("CtaLink Mobile")}
//     >
//       <span>{label}</span>
//       <ArrowRight className="size-5" />
//     </Link>
//   );
// }

function ColumnLabelMobile({ label }: { label?: string }) {
  if (!label) {
    return null;
  }

  return (
    <p className="mb-4 font-jetBrainsMono text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600 xl:mb-5">
      {label}
    </p>
  );
}

function MenuItemDescMobile({ description }: { description?: string }) {
  if (!description) {
    return null;
  }

  return (
    <p className="text-xs font-medium leading-none text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-900">
      {description}
    </p>
  );
}

// function MenuColumnItemMobile({
//   url,
//   newTab,
//   label,
//   children,
//   setIsOpen,
// }: LinkItem) {
//   if (!label) {
//     return null;
//   }
//
//   return (
//     <div className="group relative">
//       <Link
//         href={url || "#"}
//         className="text-sm font-semibold leading-none after:absolute after:inset-0"
//         target={newTab ? "_blank" : "_self"}
//         rel={newTab ? "noopener noreferrer" : undefined}
//         // onClick={() => alert("MenuColumnItem Mobile")}
//         // onClick={() => setIsOpen(false)}
//       >
//         {label}
//       </Link>
//       {children}
//     </div>
//   );
// }

// function HighLightBlockMobile({ label, items, callToAction }: HighlightList) {
//   return (
//     <div className="flex flex-col">
//       <ColumnLabelMobile label={label} />
//
//       {items && items.length > 0 && (
//         <div className="grid min-w-[200px] grid-cols-2 flex-wrap gap-5 sm:flex sm:gap-8">
//           {items.map(({ image, imageAlt, link }: HighlightItems) => (
//             <div key={link?.label} className="flex items-center gap-3">
//               {image && (
//                 <Image
//                   src={image}
//                   alt={imageAlt || "Logo Alt"}
//                   width={20}
//                   height={23}
//                 />
//               )}
//
//               <MenuColumnItemMobile
//                 label={link?.label || "Label"}
//                 url={link?.url || "#"}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//
//       {callToAction?.label && (
//         <div className="mt-auto flex items-start">
//           <Link
//             href={callToAction?.url || "#cta"}
//             className="mt-8 flex items-center gap-1 text-sm font-semibold"
//             target={callToAction?.newTab ? "_blank" : undefined}
//             rel={callToAction?.newTab ? "noopener noreferrer" : undefined}
//           >
//             <span>{callToAction?.label}</span>
//             <ArrowRight className="size-5" />
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
