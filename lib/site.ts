export const site = {
  title: 'OpenVitals Posts',
  description: 'News and write-ups from the OpenVitals project.',
  url: 'https://posts.openvitals.health',
  repository: 'https://github.com/OpenVitals-MTU/posts'
}

// Front matter dates carry no time zone and parse as UTC midnight, so they are
// printed in UTC too; a local zone west of UTC would show the day before.
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}
