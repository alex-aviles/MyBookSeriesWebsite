import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Genesis of Gleipnir',
  description: 'Book One of the Series',
}

export default function BookOnePage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="w-1/3 order-2">
        <p className="max-w-full text-[200%] font-bold text-center mt-[15%]">Book One:</p>
        <p className="max-w-full text-[300%] font-bold text-center mt-[15%]">Genesis of Gleipnir</p>
        <p className="max-w-full text-[150%] text-center mt-[13%]">---Summary---</p>
        <p className="max-w-full indent-8 text-[150%] text-left mt-[5%]">
          In the village of Canfis, Soren Gleipnir is a spurned boy 
          who found work in a putrid but loving place. He goes on nightly walks 
          around his hometown after work to ease his mind from the stresses his family&apos;s past placed on him. 
          On one placid night, fumes fill the dark sky. The events of the night come to light and Soren is exiled from the village. 
          With his childhood friend Rell, and a curious girl who knows him only by name, 
          he sets off on a hunt for the royal Seal of Amnesty that will grant him acceptance back home.
        </p>
      </div>

      <div className="w-1/3 order-3 flex flex-col">
        <div className="max-w-full mt-[10vw] ml-[6vw]">
          <Image
            src={bookOneCover}
            alt="Cover for Book One: Genesis of Gleipnir"
            style={{
              maxWidth: '80%',
              height: 'auto',
            }}
            priority={true}
            placeholder="blur"
            /*className="w-1/2"
            src="https://m.media-amazon.com/images/I/41-OyfiZ03L._SY445_SX342_.jpg"
            alt="Cover for Book One: Genesis of Gleinpir"
            width={300}
            height={0}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}*/
          />
        </div>
      </div>
      
    </main>
  );
}