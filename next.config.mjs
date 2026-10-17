import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  output: 'export',
  // Every page is written as <path>/index.html, which GitHub Pages serves at <path>/
  // without a <path>.html file sitting next to a <path>/ folder of navigation data.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})
