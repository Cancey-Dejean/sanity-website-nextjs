import { QueryParams, SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Metadata } from "next";
import { PageContent } from "@/components/PageContent";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries/pages/page";
import AddContent from "@/components/AddContent";
import { fetchPageMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: QueryParams }): Promise<Metadata> {
  const slug = params.slug || "home";
  const metadata = await fetchPageMetadata(slug);

  if (!metadata) return notFound();

  return metadata;
}

export async function generateStaticParams() {
  const pages = await sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY,
    perspective: "published",
    stega: false
  });

  return pages.map((page) => ({
    slug: page.currentSlug
  }));
}

export default async function Page({ params }: { params: QueryParams }) {

  const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params });
  if (!page) {
    return notFound();
  }

  if (params.slug !== "home") {

    const pageBuilder = page.pageBuilder;

    if (pageBuilder === null) {
      return <AddContent />;
    }
    return <>{pageBuilder.map(PageContent)}</>;
  }
}