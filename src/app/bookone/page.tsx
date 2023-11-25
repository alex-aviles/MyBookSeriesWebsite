import Image from "next/image"
import bookonecover from '../../../assets/bookonecover.png'

export default function BookOnePage() {

  return (
    <main className="hover:bg-blue-400/20 flex flex-row justify-around h-screen max-w-screen">
      
      <div className="hover:bg-blue-400/10 w-1/3 order-1">
        
      </div>

      <div className="hover:bg-blue-400/40 w-1/3 order-2">
        <p className="text-[200%] font-bold text-center mt-[15%]">
          Book One:
        </p>
        <p className="text-[300%] font-bold text-center mt-[15%]">
          Genesis of Gleipnir
        </p>
        <p className="text-lg max-w-prose text-center mt-[13%]">
          ---Summary---
        </p>
        <p className="text-lg max-w-prose text-center mb-[20%]">
          In the village of Canfis, Soren Gleipnir is a spurned boy 
          who found work in a putrid but loving place. He goes on nightly walks 
          around his hometown after work to ease his mind from the stresses his family&apos;s past placed on him. 
          On one placid night, fumes fill the dark sky. The events of the night come to light and Soren is exiled from the village. 
          With his childhood friend Rell, and a curious girl who knows him only by name, 
          he sets off on a hunt for the royal Seal of Amnesty that will grant him acceptance back home.
        </p>
      </div>

      <div className="hover:bg-blue-400/40 w-1/3 order-3">
        <Image
          src={bookonecover}
          alt="Cover for Book One: Genesis of Gleinpir"
          //width={500}
          //height={500}
        />
      </div>
      
    </main>
  );
}