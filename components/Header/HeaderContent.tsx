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

import Container from "@/components/Container";
import { Menu, SecondaryMenu } from "@/types";
import Link from "next/link";
import SubMenu from "@/components/Header/SubMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/Header/MobileMenu";
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize";

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
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setIsOpen(false));

  // Handle mobile menu
  function handleMobileMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="animate-fade-in sticky top-0 z-[9] bg-white py-3">
      <Container className="z-10 flex items-center justify-between gap-5">
        <Link href="/">
          <Image
            src={logoImage || "https://dummyimage.com/115x24.png/dddddd/ffffff"}
            width={114}
            height={24}
            alt={logoAlt || "Logo Alt"}
          />
        </Link>

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
                        <NavigationMenuContent className="p-6">
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
                <Link
                  href={cta?.url || "#"}
                  target={cta?.newTab ? "_blank" : "_self"}
                  rel={cta?.newTab ? "noopener noreferrer" : undefined}
                >
                  {cta?.label}
                </Link>
              </Button>
            ))}

          <div className="flex items-center gap-2">
            {/* Header CTA for Mobile */}
            {secondaryMenu.length > 0 &&
              secondaryMenu
                ?.slice(2)
                .map(({ variant, size, cta }: SecondaryMenu) => (
                  <div className="flex xl:hidden" key={cta?.label}>
                    <Button size={size} variant={variant} asChild>
                      <Link
                        href={cta?.url || "#"}
                        target={cta?.newTab ? "_blank" : "_self"}
                        rel={cta?.newTab ? "noopener noreferrer" : undefined}
                      >
                        {cta?.label}
                      </Link>
                    </Button>
                  </div>
                ))}

            {/* Mobile Menu */}
            <MobileMenu
              handleMobileMenu={handleMobileMenu}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              logoImage={logoImage}
              logoAlt={logoAlt}
              menu={menu}
              secondaryMenu={secondaryMenu}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
