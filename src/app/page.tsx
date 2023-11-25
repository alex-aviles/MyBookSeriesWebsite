//import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen justify-around">
      
      <div className="absolute top-[3%] sm:right-[%] md:top-[3%] md:right-[1%] lg:top-[3%] lg:right-[1%] xl:top-[3%] xl:right-[1%] pr-[1%]">
        <p className="sm:p-2 md:p-3 lg:p-4 xl:p-5 dark:bg-zinc-800/30">
          <a 
            href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now&nbsp; {/*use sticky headers for buy now buttons*/}
          </a>
        </p>
      </div>

      <div className="mt-[10%]">
        <h1 className="font-bold text-white text-[200%] sm:text-[200%] md:text-[300%] lg:text-[500%] xl:text-[700%] leading-tight ">
          Chronicles{' '}<br></br>of{' '}Mieraud
        </h1>
      </div>
    </main>
  );
}