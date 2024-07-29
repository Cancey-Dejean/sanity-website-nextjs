"use client";
import React, { useState } from "react";
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
import MobileMenu from "@/components/Header/MobileMenu";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize";

const submenuStyles = "p-6";

export default function HeaderContent({
  logoImage,
  logoAlt,
  menu,
  secondaryMenu,
}: {
  logoImage: string;
  logoAlt?: string;
  menu: Menu[];
  secondaryMenu: [];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  // handle body overflow when menu is open
  useBodyOverflow(menuOpen);

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setMenuOpen(false));

  // Handle mobile menu
  function handleMobileMenu() {
    setMenuOpen((prev) => !prev);
  }

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
                  ({ label, _type, url, menuColumns, highlightList }: Menu) => (
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
          {secondaryMenu.length > 0 &&
            secondaryMenu?.map(({ variant, size, cta }: SecondaryMenu) => (
              <Button
                size={size}
                variant={variant}
                asChild
                className="hidden xl:flex"
                key={cta?.label}
              >
                <Link href={cta?.url || "#"}>{cta?.label}</Link>
              </Button>
            ))}

          {/* Hamburger Menu */}
          <div className="flex items-center gap-2">
            {secondaryMenu.length > 0 &&
              secondaryMenu
                ?.slice(2)
                .map(({ variant, size, cta }: SecondaryMenu) => (
                  <div className="flex xl:hidden" key={cta?.label}>
                    <Button size={size} variant={variant} asChild>
                      <Link href={cta?.url || "#"}>{cta?.label}</Link>
                    </Button>
                  </div>
                ))}

            <button
              type="button"
              className="flex px-0 xl:hidden"
              // @ts-ignore
              popovertarget="mobileMenu"
              onClick={handleMobileMenu}
            >
              <HamburgerMenu className="size-7" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileMenu
        logoImage={logoImage}
        logoAlt={logoAlt}
        menu={menu}
        secondaryMenu={secondaryMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </header>
  );
}
