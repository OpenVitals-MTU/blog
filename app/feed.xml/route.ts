import { getPosts } from '../../lib/posts'
import { site } from '../../lib/site'

// Written once at build time to out/feed.xml.
export const dynamic = 'force-static'

function escapeXml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export async function GET() {
  const posts = await getPosts()
  const items = posts.map(post => {
    const { title, description, date } = post.frontMatter ?? {}
    const link = `${site.url}${post.route}/`

    return [
      '    <item>',
      `      <title>${escapeXml(title ?? post.name)}</title>`,
      `      <link>${link}</link>`,
      `      <guid>${link}</guid>`,
      description && `      <description>${escapeXml(description)}</description>`,
      date && `      <pubDate>${new Date(date).toUTCString()}</pubDate>`,
      '    </item>'
    ]
      .filter(Boolean)
      .join('\n')
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${site.url}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
${items.join('\n')}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  })
}
