# OpenVitals Blog

Nextra blog for OpenVitals: news, release write-ups and longer articles.

Repository:

```text
https://github.com/OpenVitals-MTU/blog
```

Website URL:

```text
https://blog.openvitals.health/
```

## Writing a Post

Each post is a Markdown file in `content/posts/`. The file name is the address: `content/posts/garmin-sync.md` is served at `/posts/garmin-sync/`.

Start the file with front matter:

```markdown
---
title: Syncing a Garmin watch without the cloud
date: 2026-10-17
description: One line shown under the title in the post list and in the RSS feed.
author: Manuel
tags: [garmin, devices]
---

The post, in Markdown.
```

- `title` and `date` are required. The list is sorted by `date`, newest first.
- `tags` is a list, even for one tag (`tags: [release]`). Each tag gets a page at `/tags/<tag>/`; keep tags lowercase with hyphens, since they become addresses.
- `description` and `author` are optional.

Images go next to the post or in `public/`, and are linked with a relative path (`![Dashboard](./dashboard.png)`) or from the root (`![Dashboard](/images/dashboard.png)`).

A GitHub-style alert needs an empty quoted line after its marker:

```markdown
> [!NOTE]
>
> The text of the note.
```

A file named `.mdx` instead of `.md` can also use React components.

## Local Preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
```

The build is a static export: every page is written to `out/` as `<path>/index.html`, with the RSS feed at `out/feed.xml` and the Pagefind search index in `out/_pagefind`. Search only works in the exported site, not in `npm run dev`. To preview the exported site:

```bash
python3 -m http.server --directory out 3000
```

## Layout

- `content/posts/` - the posts.
- `app/page.tsx` - the home page: the tags and the list of posts.
- `app/[...mdxPath]/page.tsx` - renders every Markdown file in `content/`.
- `app/tags/[tag]/page.tsx` - one page per tag.
- `app/feed.xml/route.ts` - the RSS feed, written at build time.
- `app/_meta.ts` - the navbar links.
- `lib/site.ts` - the site's title, description and URL, used by the metadata and the feed.

## GitHub Pages

The GitHub Actions workflow (`.github/workflows/test.yml`) builds the site on every push and pull request and, on a push to `main`, deploys `out/` to GitHub Pages.

One-time setup: in the repository's Settings → Pages, set the source to "GitHub Actions" and the custom domain to `blog.openvitals.health`, and turn on "Enforce HTTPS" once the certificate is issued. In DNS, `blog` is a `CNAME` record pointing to `openvitals-mtu.github.io`.
