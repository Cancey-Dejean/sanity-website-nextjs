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

const submenuStyles = "p-6";

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
      <Container className="flex items-center justify-between gap-5">
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
              className="hidden lg:flex"
            >
              <Link href={cta?.url || "#"}>{cta?.label}</Link>
            </Button>
          ))}

          {/* Hamburger Menu */}
          {menu.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex lg:hidden">
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
                className="px-0"
                onClick={() => alert("Mobile Menu")}
              >
                <HamburgerMenu className="size-7" />
              </button>
            </div>
          )}

          {/* Mobile Navigation */}
        </div>
      </Container>
    </header>
  );
}
