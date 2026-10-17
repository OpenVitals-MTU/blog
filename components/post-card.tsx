import Link from 'next/link'
import type { Post } from '../lib/posts'
import { formatDate } from '../lib/site'

// The theme's PostCard prints its date with toDateString(); this one prints the
// date the way a post's own page does. The classes are the theme's.
export function PostCard({ post }: { post: Post }) {
  const { title, description, date } = post.frontMatter ?? {}
  const dateObj = date ? new Date(date) : undefined

  return (
    <div>
      <h2 className="x:mt-6 x:mb-2 x:text-xl x:font-semibold">
        <Link href={post.route} className="x:no-underline!">
          {title ?? post.name}
        </Link>
      </h2>
      {description && (
        <p className="x:mb-2 x:dark:text-gray-400 x:text-gray-600">
          {description}
          <Link href={post.route} className="x:ml-2">
            Read more →
          </Link>
        </p>
      )}
      {dateObj && (
        <time
          className="x:text-sm x:dark:text-gray-400 x:text-gray-600"
          dateTime={dateObj.toISOString()}
        >
          {formatDate(dateObj)}
        </time>
      )}
    </div>
  )
}
