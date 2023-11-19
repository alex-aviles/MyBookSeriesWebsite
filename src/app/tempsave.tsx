/*

//import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <main className="relative flex min-h-screen min-w-screen flex justify-around p-10">
      
      <div className="absolute top-0 right-0 pt-10 pr-10 max-w-4xl items-center justify-end font-mono text-sm lg:flex">
        <p className="absolute top-0 right-0 flex w-full justify-right border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a 
          href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
          target="_blank"
          rel="noopener noreferrer"
          >
            Buy Now&nbsp;
          </a>
        </p>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <h1 className="text-9x1 font-bold text-white">
          Chronicles{' '}of{' '}Mieraud
        </h1>
      </div>

      <div className="absolute top-0 left-0 grid text-center pt-10 lg:max-w-3xl lg:w-[200px] lg:mb-0 lg:grid-cols-1 lg:grid-rows-4 lg:text-left">
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
  )
}

*/

/* 11/18/23

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen p-5 lg:p-10">
      
      <div className="lg:w-1/4 lg:pr-5 lg:order-1">
        <div className="lg:pt-2">
          <Link href="/about" className="link">
            <h2>About -&gt;</h2>
            <p>Learn about me as the author of this series.</p>
          </Link>
        </div>
        <div className="lg:pt-2">
          <Link href="/bookone" className="link">
            <h2>Book One -&gt;</h2>
            <p>Genesis of Gleipnir&nbsp;</p>
          </Link>
        </div>
        <div className="lg:pt-2">
          <Link href="/booktwo" className="link">
            <h2>Book Two -&gt;</h2>
            <p>Apostasy In Aporlan</p>
          </Link>
        </div>
        <div className="lg:pt-2">
          <Link href="/bookthree" className="link">
            <h2>Book Three -&gt;</h2>
            <p>Maelstrom Upon Mieraud</p>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
        <h1 className="text-4xl lg:text-9xl font-bold text-white">
          Chronicles{' '}of{' '}Mieraud
        </h1>
      </div>

      <div className="lg:w-1/4 lg:pl-5 lg:pr-2 lg:order-3">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          <a 
            href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now&nbsp;
          </a>
        </p>
      </div>
    </main>
  );
}
*/

/* Condensation 11/18/23 Good Progress
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

      <div className="lg:absolute lg:top-[3%] lg:left-[1%] grid lg:text-left lg:w-[12%] lg:grid-cols-1 lg:grid-rows-4">
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-1 py-2 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-[160%] font-semibold`}>
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
          className="group rounded-lg border border-transparent px-1 py-2 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-[160%] font-semibold`}>
            Book One{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Genesis of Gleipnir
          </p>
        </Link>

        <Link
          href="/booktwo"
          className="group rounded-lg border border-transparent px-1 py-2 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-[160%] font-semibold`}>
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
          className="group rounded-lg border border-transparent px-1 py-2 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-[160%] font-semibold`}>
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
*/