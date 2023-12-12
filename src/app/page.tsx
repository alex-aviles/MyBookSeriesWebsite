import Image from "next/image"
import mapImage from '../app/assets/mieraudmap.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chronicles of Mieraud',
  description: 'The Book Series',
}

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen justify-around">

      <div className="w-fit h-fit mt-[13%] items-center text-center">
        <h1 className="font-bold text-white text-[200%] sm:text-[200%] md:text-[300%] lg:text-[500%] xl:text-[700%] leading-tight ">
          Chronicles{' '}<br></br>of{' '}Mieraud
        </h1>
        {/*<div className="w-fit h-fit mt-[-1%] ml-[23%]">
          <Image
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{
              maxWidth: '70%',
              height: 'auto',
            }}
          />
          </div>*/}
      </div>

    </main>
  );
}