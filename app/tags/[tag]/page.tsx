import { notFound } from 'next/navigation'
import { PostCard } from '../../../components/post-card'
import { getPosts, getTagCounts, postTags } from '../../../lib/posts'

type TagPageProps = {
  params: Promise<{
    tag: string
  }>
}

// A static export refuses a dynamic route with no params at all, so while no post
// has a tag this route still writes one page, a 404.
const NO_TAGS = '_'

export async function generateStaticParams() {
  const tagCounts = await getTagCounts()

  if (tagCounts.length === 0) {
    return [{ tag: NO_TAGS }]
  }

  return tagCounts.map(([tag]) => ({ tag }))
}

export async function generateMetadata(props: TagPageProps) {
  const { tag } = await props.params
  return { title: `Posts tagged “${decodeURIComponent(tag)}”` }
}

export default async function TagPage(props: TagPageProps) {
  const tag = decodeURIComponent((await props.params).tag)
  const posts = (await getPosts()).filter(post => postTags(post).includes(tag))

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div data-pagefind-ignore="all">
      <h1>Posts tagged “{tag}”</h1>
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
