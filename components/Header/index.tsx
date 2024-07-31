import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings";
import HeaderContent from "@/components/Header/HeaderContent";

export default async function Header() {
  const headerData = await sanityFetch<SanityDocument>({
    query: ALL_SETTINGS_QUERY,
  });

  const logoImage = headerData.header.logoImage;
  const menu = headerData.header.menu;
  const secondaryMenu = headerData.header.secondaryMenu;

  return (
    <HeaderContent
      logoImage={logoImage}
      menu={menu}
      secondaryMenu={secondaryMenu}
    />
  );
}
