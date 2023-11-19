//import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen w-screen justify-around">
      
      <div className="lg:absolute lg:top-[3%] lg:right-[1%] lg:items-center lg:pr-[1%]">
        <p className="flex justify-center lg:p-4 lg:dark:bg-zinc-800/30">
          <a 
            href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now&nbsp;
          </a>
        </p>
      </div>

      <div className="lg: justify-center mt-[15%]">
        <h1 className="font-bold text-white lg:text-9xl">
          Chronicles{' '}<br></br>of{' '}Mieraud
        </h1>
      </div>

      <div className="lg:absolute lg:top-[3%] lg:left-[1%] grid lg:text-center lg:w-[12%] lg:grid-cols-1 lg:grid-rows-4 lg:text-left">
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