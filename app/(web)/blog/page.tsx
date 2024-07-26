import { PostProps } from "@/types/Post"
import { sanityFetch } from "@/sanity/lib/fetch"

import Posts from "@/components/Blog/Posts"
import { POSTS_QUERY } from "@/sanity/lib/queries/allPosts"

export default async function Page() {
  const posts = await sanityFetch<PostProps[]>({
    query: POSTS_QUERY,
  })

  if (posts.length < 1) return <div>No posts</div>

  return <Posts posts={posts} />
}
