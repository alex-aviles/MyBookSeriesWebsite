//import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col lg:flex-row min-h-screen min-w-screen justify-around p-5 lg:p-10">
      
      <div className="lg:order-1 mb-8 lg:order-2 lg:absolute lg:top-1 lg:right-1 lg:pt-5 lg:items-center lg:justify-end lg:max-w-4xl lg:pr-10">
        <p className="flex justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-full lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a 
            href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now&nbsp;
          </a>
        </p>
      </div>

      <div className="lg:order-1 mb-8 lg:order-2">
        <h1 className="text-2xl font-bold text-white lg:text-9xl">
          Chronicles{' '}of{' '}Mieraud
        </h1>
      </div>

      <div className="lg:order-1 mb-8 lg:order-2 lg:top-1 lg:left-1 lg:absolute lg:grid lg:text-center lg:pt-5 lg:max-w-3xl lg:w-[200px] lg:mb-0 lg:grid-cols-1 lg:grid-rows-4 lg:text-left">
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

        <Link
          href="/booktwo"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
        </Link>

        <Link
          href="/bookthree"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
        </Link>
      </div>
    </main>
  );
}