//import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <main className="relative flex min-h-screen min-w-screen flex justify-around p-10">
      
      <div className="absolute top-0 right-0 pt-10 pr-10 max-w-4xl items-center justify-end font-mono text-sm lg:flex">
        <p className="absolute top-0 right-0 flex w-full justify-right border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk">Buy Now&nbsp;</a>
        </p>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <h1 className="text-9x1 font-bold text-white">
          Chronicles{' '}of{' '}Mieraud
        </h1>
      </div>

      <div className="absolute top-0 left-0 grid text-center pt-10 lg:max-w-3xl lg:w-[200px] lg:mb-0 lg:grid-cols-1 lg:grid-rows-4 lg:text-left">
        <a
          //href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about me as the author of this series.
          </p>
        </a>

        <Link
          href="/bookone"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book One{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Genesis of Gleipnir&nbsp;
          </p>
        </Link>

        <a
          //href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book Two{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Apostasy In Aporlan
          </p>
        </a>

        <a
          //href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book Three{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Maelstrom Upon Mieraud
          </p>
        </a>
      </div>
    </main>
  )
}