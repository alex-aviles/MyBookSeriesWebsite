import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

const fontType = EB_Garamond({ subsets: ['latin'] })

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

      <body className={fontType.className}>
        <Analytics />
        <div className="absolute top-[3%] sm:right-[%] md:top-[3%] md:right-[1%] lg:top-[3%] lg:right-[1%] xl:top-[3%] xl:right-[1%] pr-[1%]">
          <p className="text-black text-[120%] sm:p-2 md:p-3 lg:p-4 xl:p-5 dark:bg-zinc-200">
            <a 
              href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Buy Now&nbsp;</b>
            </a>
          </p>
        </div>
        
        <div className="absolute lg:top-[3%] lg:left-[1%] lg:grid text-left text-black w-[12%] grid-cols-1 grid-rows-5">
          
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              Home{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
              Back to Home Page
            </p>
          </Link>
          
          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              About{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
              Learn about me as the author of this series.
            </p>
          </Link>
          
          <Link
            href="/map"
            className="group rounded-lg border border-transparent px-[2%] py-[4%] hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-[3%] text-[160%] font-semibold`}>
              The Map{' '}
              <span className="inline-block transition-transform group-hover:translate-x-[20%] motion-reduce:transform-none">
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
              World Map of Mieraud
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
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
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
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
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
                &gt;
              </span>
            </h2>
            <p className={`max-w-[90%] text-[90%] opacity-[100%]`}>
              Maelstrom Upon Mieraud
            </p>
          </Link>
        </div>

        {children}

      </body>
    </html>
  )
}
