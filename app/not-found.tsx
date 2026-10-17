import Link from 'next/link'

export default function NotFound() {
  return (
    <div data-pagefind-ignore="all">
      <h1>Page not found</h1>
      <p>
        The page is not available. <Link href="/">Return to the posts.</Link>
      </p>
    </div>
  )
}
