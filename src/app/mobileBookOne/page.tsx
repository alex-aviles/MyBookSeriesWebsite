import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Genesis of Gleipnir',
  description: 'Book One of the Series',
}

export default function BookOnePage() {

  return (
    <main className="flex flex-col justify-around max-h-screen max-w-screen">

      <div className="max-w-full items-center order-1 m-6">
        <p className="text-[199%] font-bold text-center mt-[15%]">Genesis of Gleipnir</p>
        <p className="text-[85%] text-center mt-[13%]">---Summary---</p>
        <p className="indent-8 text-[85%] text-left mt-[5%]">
          In the village of Canfis, Soren Gleipnir is a spurned boy 
          who found work in a putrid but loving place. He goes on nightly walks 
          around his hometown after work to ease his mind from the stresses his family&apos;s past placed on him. 
          On one placid night, fumes fill the dark sky. The events of the night come to light and Soren is exiled from the village. 
          With his childhood friend Rell, and a curious girl who knows him only by name, 
          he sets off on a hunt for the royal Seal of Amnesty that will grant him acceptance back home.
        </p>
      </div>

     
        <div className="w-[50%] order-2 ml-[25%]">
          <Image
            src={bookOneCover}
            alt="Cover for Book One: Genesis of Gleipnir"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            priority={true}
            placeholder="blur"
          />
        </div>
     
      
    </main>
  );
}