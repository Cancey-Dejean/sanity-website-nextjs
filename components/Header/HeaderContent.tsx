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
import SubMenuBase from "@/components/Header/SubMenuBase";
import { Menu } from "@/types";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/svgIcons";
import SubMenuHighlight from "@/components/Header/SubMenuHighlight";
import SubMenu from "@/components/Header/SubMenu";

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
    <header className={"py-3"}>
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

                      {/*{_type === "subMenuBase" && (*/}
                      {/*  <NavigationMenuContent*/}
                      {/*    className={cn("!w-[500px]", submenuStyles)}*/}
                      {/*  >*/}
                      {/*    <SubMenuBase*/}
                      {/*      key={label}*/}
                      {/*      label={label}*/}
                      {/*      menuColumns={menuColumns}*/}
                      {/*    />*/}
                      {/*  </NavigationMenuContent>*/}
                      {/*)}*/}

                      {/*{_type === "subMenuHighlight" && (*/}
                      {/*  <NavigationMenuContent*/}
                      {/*    className={cn("!w-[600px]", submenuStyles)}*/}
                      {/*  >*/}
                      {/*    <SubMenuHighlight*/}
                      {/*      key={label}*/}
                      {/*      label={label}*/}
                      {/*      highlightList={highlightList}*/}
                      {/*    />*/}
                      {/*  </NavigationMenuContent>*/}
                      {/*)}*/}
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <div>Secondary</div>
      </Container>
    </header>
  );
}

// const SubMenu = ({ label, _type }: Menu) => {
//   return (
//     <div>
//       <p>{label}</p>
//       <p>
//         This is the <strong>{_type}</strong> component showing
//       </p>
//     </div>
//   );
// };

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
