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
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import SubMenuBase from "@/components/Header/SubMenuBase";
import { Menu, MenuColumn, MenuColumns, MenuList } from "@/types";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/svgIcons";

const submenuStyles = "p-6";

export default function HeaderContent({
  logoImage,
  logoAlt,
  menu,
}: {
  logoImage: string;
  logoAlt?: string;
  menu: [];
}) {
  return (
    <header className={"px-8 py-3"}>
      <Container className="flex items-center justify-between gap-5">
        <Image
          src={logoImage || "https://dummyimage.com/114x24.png/dddddd/ffffff"}
          width={114}
          height={24}
          alt={logoAlt || "Logo Alt"}
        />

        {menu.length > 0 && (
          <div className="grow">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map(({ label, _type, menuColumns, menuColumn }: Menu) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuTrigger className="p-3 text-sm leading-none">
                      {label}
                    </NavigationMenuTrigger>

                    {_type === "subMenuBase" && (
                      <NavigationMenuContent
                        className={cn("!w-[500px]", submenuStyles)}
                      >
                        <SubMenuBase
                          key={label}
                          label={label}
                          menuColumns={menuColumns}
                        />
                      </NavigationMenuContent>
                    )}

                    {_type === "subMenuHighlight" && (
                      <NavigationMenuContent
                        className={cn("!w-[500px]", submenuStyles)}
                      >
                        <SubMenuHighlight
                          key={label}
                          label={label}
                          menuColumn={menuColumn}
                        />
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <div>Secondary</div>
      </Container>
    </header>
  );
}

const SubMenuHighlight = ({ menuColumn }: Menu) => {
  return (
    <div className={"flex gap-16"}>
      <div className="flex grow flex-col">
        <p className="font-jetBrainsMono mb-5 text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600">
          {menuColumn?.label}
        </p>

        <div className="flex flex-col gap-5">
          {menuColumn?.menuList?.map(
            ({ url, label, description, newTab }: MenuList) => (
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
            ),
          )}
        </div>
      </div>
    </div>
  );
};

const SubMenuDoc = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};

const SubMenuResources = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
    </div>
  );
};
