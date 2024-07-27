"use client";
import Image from "next/image";
import { HeaderContent, Menu, MenuColumns, MenuList } from "@/types";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const submenuStyles = "p-6";

export default function HeaderContent({
  logoImage,
  logoAlt,
  menu,
}: HeaderContent) {
  return (
    <header className={"px-8 py-3"}>
      <Container className="flex items-center justify-between gap-5">
        <Image
          src={logoImage || "https://dummyimage.com/114x24.png/dddddd/ffffff"}
          height={24}
          width={114}
          alt={logoAlt || "Logo Alt"}
        />

        <div className="grow">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map(({ label, _type, menuColumns }: Menu) => (
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
                        _type={_type}
                      />
                    </NavigationMenuContent>
                  )}

                  {_type === "subMenuHighlight" && (
                    <NavigationMenuContent
                      className={cn("!w-[500px]", submenuStyles)}
                    >
                      <p>subMenuHighlight</p>
                      <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>Secondary</div>
      </Container>
    </header>
  );
}

// Make a component for subMenuBase
const SubMenuBase = ({ menuColumns }: Menu) => {
  return (
    <div className={"flex gap-16"}>
      {menuColumns?.map(({ label, menuList }: MenuColumns) => (
        <div className="grow" key={label}>
          <p className="font-jetBrainsMono mb-5 text-xs font-medium uppercase leading-none tracking-[0.5px] text-gray-600">
            {label}
          </p>

          <div className="flex flex-col gap-5">
            {menuList?.map(({ url, label, description, newTab }: MenuList) => (
              <div className="group relative">
                <p className="text-sm font-semibold leading-none">{label}</p>
                <Link
                  href={url || ""}
                  className="text-xs font-medium leading-none text-gray-600 transition-colors duration-300 ease-in-out after:absolute after:inset-0 group-hover:text-gray-900"
                >
                  {description}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SubMenuHighlight = ({ label, _type }: Menu) => {
  return (
    <div>
      <p>{label}</p>
      <p>
        This is the <strong>{_type}</strong> component showing
      </p>
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
