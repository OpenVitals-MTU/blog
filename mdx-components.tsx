import type { MDXComponents } from 'nextra/mdx-components'
import { useMDXComponents as getBlogComponents } from 'nextra-theme-blog'
import { formatDate } from './lib/site'

const blogComponents = getBlogComponents({
  DateFormatter: ({ date }: { date: Date }) => formatDate(date)
})

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...blogComponents,
    ...components
  }
}
