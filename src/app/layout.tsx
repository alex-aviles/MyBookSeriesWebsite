import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chronicles of Mieraud',
  description: 'The Book Series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <div className="absolute lg:top-[3%] lg:left-[1%] lg:grid text-left w-1/6 grid-cols-1 grid-rows-4">
          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              About{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[50%]`}>
              Learn about me as the author of this series.
            </p>
          </Link>
    
          <Link
            href="/bookone"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              Book One{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[50%]`}>
              Genesis of Gleipnir
            </p>
          </Link>
    
          <Link
            href="/booktwo"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              Book Two{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[50%]`}>
              Apostasy In Aporlan
            </p>
          </Link>
    
          <Link
            href="/bookthree"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              Book Three{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[50%]`}>
              Maelstrom Upon Mieraud
            </p>
          </Link>
        </div>

        {children}

      </body>
    </html>
  )
}
