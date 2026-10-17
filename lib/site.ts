export const site = {
  title: 'OpenVitals Blog',
  description: 'News and write-ups from the OpenVitals project.',
  url: 'https://blog.openvitals.health',
  repository: 'https://github.com/OpenVitals-MTU/blog'
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
