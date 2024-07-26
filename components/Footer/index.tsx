import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings";
import { SanityDocument } from "next-sanity";
import { Button } from "../ui/button";
import { PortableText } from "next-sanity";

export default async function Footer() {
  const data = await sanityFetch<SanityDocument>({
    query: ALL_SETTINGS_QUERY,
  });

  const footer = data.footer;

  return <footer>Footer</footer>;
}
