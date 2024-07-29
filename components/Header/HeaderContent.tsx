"use client";
import React from "react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import { Menu, SecondaryMenu } from "@/types";
import Link from "next/link";
import SubMenu from "@/components/Header/SubMenu";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/ui/svgIcons";
import { twMerge } from "tailwind-merge";

const submenuStyles = "p-6";

const anchors = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export default function HeaderContent({
  logoImage,
  logoAlt,
  menu,
  secondaryMenu,
}: {
  logoImage: string;
  logoAlt?: string;
  menu: [];
  secondaryMenu: [];
}) {
  return (
    <header className="bg-white py-3">
      <Container className="z-10 flex items-center justify-between gap-5">
        <Image
          src={logoImage || "https://dummyimage.com/115x24.png/dddddd/ffffff"}
          width={114}
          height={24}
          alt={logoAlt || "Logo Alt"}
        />

        {/* Desktop Navigation */}
        {menu.length > 0 && (
          <div className="hidden grow xl:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map(
                  ({
                    label,
                    _type,
                    url,
                    menuColumns,
                    highlightList,
                    secondaryMenu,
                  }: Menu) => (
                    <NavigationMenuItem key={label}>
                      {_type !== "customUrl" ? (
                        <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                      ) : (
                        <Link href={url || "#"} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {label}
                          </NavigationMenuLink>
                        </Link>
                      )}

                      {_type === "subMenu" && (
                        <NavigationMenuContent
                          className={cn("", submenuStyles)}
                        >
                          <SubMenu
                            key={label}
                            label={label}
                            menuColumns={menuColumns}
                            highlightList={highlightList}
                          />
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <div className="flex gap-2">
          {secondaryMenu?.map(({ variant, size, cta }: SecondaryMenu) => (
            <Button
              size={size}
              variant={variant}
              asChild
              className="hidden xl:flex"
            >
              <Link href={cta?.url || "#"}>{cta?.label}</Link>
            </Button>
          ))}

          {/* Hamburger Menu */}
          {menu.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex xl:hidden">
                {secondaryMenu
                  ?.slice(2)
                  .map(({ variant, size, cta }: SecondaryMenu) => (
                    <Button size={size} variant={variant} asChild>
                      <Link href={cta?.url || "#"}>{cta?.label}</Link>
                    </Button>
                  ))}
              </div>

              <button
                type="button"
                className="flex px-0 xl:hidden"
                // @ts-ignore
                popoverTarget="mobileMenu"
              >
                <HamburgerMenu className="size-7" />
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div>
        {/*<button popoverTarget="nav">*/}
        {/*  <span className="sr-only">Show Navigation</span>*/}
        {/*  <HamburgerMenu className="size-7" />*/}
        {/*</button>*/}
        <nav
          // @ts-ignore
          popover=""
          id="mobileMenu"
          className={twMerge(
            "bg-transparent h-full w-full place-items-center p-0 text-4xl text-white",
            "transition-discrete starting:popover-open:opacity-0 popover-open:opacity-100 opacity-0 transition-[opacity,overlay,display] duration-500",
            "backdrop:transition-discrete backdrop:starting:popover-open:opacity-0 backdrop:popover-open:opacity-100 backdrop:bg-black backdrop:opacity-0 backdrop:backdrop-blur-md backdrop:transition-[opacity,overlay,display] backdrop:duration-500",
          )}
        >
          <button
            className="absolute right-5 top-5 z-20"
            // @ts-ignore
            popoverTarget="mobileMenu"
          >
            <span className="sr-only">Hide Navigation</span>
            close
          </button>

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 text-4xl">
            <ul>
              {anchors.map(({ url, label }) => (
                <li key={label}>
                  <a href={url}>{label}</a>
                </li>
              ))}
              {/*<li>*/}
              {/*  <a href="#">Hello</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="#">Hello 2</a>*/}
              {/*</li>*/}
            </ul>
          </div>
        </nav>

        {/* Modal Content */}
        <div className="white black grid min-h-screen place-items-center bg-black">
          Just one more z-index
        </div>
      </div>
    </header>
  );
}
