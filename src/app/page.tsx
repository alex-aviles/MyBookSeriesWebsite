//import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-around">
      
      <div className="absolute top-[3%] right-[1%] items-center pr-[1%]">
        <p className="flex justify-center p-4 dark:bg-zinc-800/30">
          <a 
            href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now&nbsp;
          </a>
        </p>
      </div>

      <div className="justify-center mt-[15%]">
        <h1 className="font-bold text-white text-[700%] leading-tight">
          Chronicles{' '}<br></br>of{' '}Mieraud
        </h1>
      </div>

      <div className="absolute top-[3%] left-[1%] grid text-left w-[12%] grid-cols-1 grid-rows-4">
        <a
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
        </a>

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
    </main>
  );
}