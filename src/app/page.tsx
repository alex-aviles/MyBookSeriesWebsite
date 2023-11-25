//import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen justify-around">

      <div className="mt-[10%]">
        <h1 className="font-bold text-white text-[200%] sm:text-[200%] md:text-[300%] lg:text-[500%] xl:text-[700%] leading-tight ">
          Chronicles{' '}<br></br>of{' '}Mieraud
        </h1>
      </div>
    </main>
  );
}