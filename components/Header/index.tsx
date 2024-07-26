// import { sanityFetch } from "@/sanity/lib/fetch";
// import HeaderWrapper from "./HeaderWrapper";
// import { SanityDocument } from "next-sanity";
// import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings";
//
// const Header = async () => {
//   const navigation = await sanityFetch<SanityDocument>({
//     query: ALL_SETTINGS_QUERY,
//   });
//
//   const menuList = navigation.header.menu.menuList;
//   const logo = navigation.header.logoImage;
//   const logoAlt = navigation.header.logoImageAlt;
//   const settings = navigation.settings[0].companyName;
//
//   return (
//     <>
//       <HeaderWrapper
//         menuList={menuList}
//         logoSrc={logo}
//         logoAlt={logoAlt}
//         companyName={settings}
//       />
//     </>
//   );
// };
//
// export default Header;
export default function Header() {
  return <header>Header</header>;
}
