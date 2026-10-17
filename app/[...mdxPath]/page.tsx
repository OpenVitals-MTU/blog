import { notFound } from 'next/navigation'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

type PageProps = {
  params: Promise<{
    mdxPath: string[]
  }>
}

// A static export refuses a dynamic route with no params at all, so while content/
// has no page this route still writes one page, a 404.
const NO_PAGES = ['_']

function isNoPages(mdxPath: string[]): boolean {
  return mdxPath.join('/') === NO_PAGES.join('/')
}

export async function generateStaticParams() {
  const params = await generateStaticParamsFor('mdxPath')()
  return params.length > 0 ? params : [{ mdxPath: NO_PAGES }]
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  if (isNoPages(params.mdxPath)) {
    return {}
  }

  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper!

export default async function Page(props: PageProps) {
  const params = await props.params
  if (isNoPages(params.mdxPath)) {
    notFound()
  }

  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    params.mdxPath
  )

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
