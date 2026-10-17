import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import './globals.css'
import { site } from '../lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s - OpenVitals'
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: 'OpenVitals',
    url: site.url
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml'
    }
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 175, saturation: 55, lightness: 35 }} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Link href="/" className="openvitals-brand">
              <img src="/openvitals-logo.png" alt="" width="28" height="28" />
              <b>OpenVitals</b>
            </Link>
            <a href="https://openvitals.health" className="openvitals-home">
              Home
            </a>
            <a href="https://docs.openvitals.health">Docs</a>
            <Search placeholder="Search posts…" className="openvitals-search" />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            <span className="openvitals-footer">
              <span>OpenVitals posts</span>
              <a href="/feed.xml">RSS</a>
            </span>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
