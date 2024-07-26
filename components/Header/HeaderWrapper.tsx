import React from "react";
import Header from "./";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings";

export default async function HeaderWrapper() {
  const headerData = await sanityFetch<SanityDocument>({
    query: ALL_SETTINGS_QUERY,
  });

  console.log(headerData);
  return <Header />;
}
