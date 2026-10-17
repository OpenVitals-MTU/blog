import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

// Every Markdown file under content/posts, newest first. The folder is looked up in
// the root page map because getPageMap('/posts') throws while there is no post.
export async function getPosts() {
  const postsFolder = (await getPageMap()).find(
    item => 'name' in item && item.name === 'posts' && 'children' in item
  )

  if (!postsFolder || !('children' in postsFolder)) {
    return []
  }

  const { directories } = normalizePages({
    list: postsFolder.children,
    route: '/posts'
  })

  return directories
    .filter(post => post.name !== 'index')
    .sort(
      (a, b) =>
        Date.parse(b.frontMatter?.date ?? 0) - Date.parse(a.frontMatter?.date ?? 0)
    )
}

export type Post = Awaited<ReturnType<typeof getPosts>>[number]

export function postTags(post: Post): string[] {
  return post.frontMatter?.tags ?? []
}

// Each tag with the number of posts carrying it, most used first.
export async function getTagCounts(): Promise<[string, number][]> {
  const counts = new Map<string, number>()

  for (const post of await getPosts()) {
    for (const tag of postTags(post)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts].sort(([a, x], [b, y]) => y - x || a.localeCompare(b))
}
