import { Metadata } from "next"
import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { sanityFetch } from "@/sanity/lib/fetch"
import Post from "@/components/Blog/Post"
import { format } from "date-fns"

import { dateFormat } from "@/constants"
import { POST_QUERY } from "@/sanity/lib/queries/pages/post"
import { POSTS_QUERY } from "@/sanity/lib/queries/allPosts"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })

  if (!post) return notFound()

  return {
    title: post.title ?? `This is the ${post.title} Page`,
    description: post.excerpt ?? `This is the ${post.title} description`,
    openGraph: {
      title: post.title ?? `This is the ${post.title} OG Title`,
      images: [{ url: post.ogImg ?? "" }],
      publishedTime: format(post._createdAt, dateFormat),
      modifiedTime: post.updatedAt,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.currentSlug,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })

  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}
