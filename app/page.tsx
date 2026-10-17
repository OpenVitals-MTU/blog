import Link from 'next/link'
import { PostCard } from '../components/post-card'
import { getPosts, getTagCounts } from '../lib/posts'

export default async function PostsPage() {
  const posts = await getPosts()
  const tagCounts = await getTagCounts()

  // Pagefind refuses to build an empty index, so while there is no post this line,
  // left outside the ignored list, is the one thing it indexes.
  if (posts.length === 0) {
    return (
      <>
        <h1>Posts</h1>
        <p>No posts yet.</p>
      </>
    )
  }

  return (
    <div data-pagefind-ignore="all">
      <h1>Posts</h1>
      {tagCounts.length > 0 && (
        <div className="not-prose openvitals-tags">
          {tagCounts.map(([tag, count]) => (
            <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
              {tag} ({count})
            </Link>
          ))}
        </div>
      )}
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
