import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chronicles of Mieraud',
  description: 'The Book Series',
}

export default function mobileHome() {
  return (
    <main className="flex flex-row h-screen w-screen justify-around">

      <div className="w-fit h-fit mt-[30%] items-center text-center">
        <h1 className="font-bold text-[300%] text-black leading-tight">
          Chronicles{' '}<br></br>of<br></br>{' '}Mieraud
        </h1>
        <h2 className="m-[30%] text-[120%] text-black leading-tight">
            <i>By: Alexander Aviles</i>
        </h2>
      </div>

    </main>
  );
}