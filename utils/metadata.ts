import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGE_QUERY } from "@/sanity/lib/queries/pages/page";
import { SanityDocument } from "next-sanity";
import { Metadata } from "next";

export async function fetchPageMetadata(slug: string): Promise<Metadata | null> {
  const page = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params: { slug }
  });

  if (!page) return null;

  return {
    title: page.metaTitle ?? `This is the ${page.metaTitle} Page`,
    description: page.metaDescription ?? `This is the ${page.metaTitle} description`,
    openGraph: {
      title: page.metaTitle ?? `This is the ${page.metaTitle} OG Title`,
      images: [{ url: page.ogImg ?? "" }]
    }
  };
}