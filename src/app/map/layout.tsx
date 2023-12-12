import type { Metadata } from '../../../node_modules/next'

export const metadata: Metadata = {
    title: 'Map of Mieraud',
    description: 'Have Fun Exploring!',
  }

export default function MapLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav></nav>
        {children}
      </section>
    )
  }