import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'

export default function BookTwoPage() {

  return (
    <main className="hover:bg-blue-400/20 flex flex-row justify-around h-screen max-w-screen">
      
      <div className="hover:bg-blue-400/10 w-1/3 order-1">
        
      </div>

      <div className="hover:bg-blue-400/40 w-1/3 order-2">
        <p className="text-[200%] font-bold text-center mt-[15%]">
          Book Two:
        </p>
        <p className="text-[300%] font-bold text-center mt-[15%]">
          Apostasy In Aporlan
        </p>
        <p className="text-lg max-w-prose text-center mt-[13%]">
          ---Summary---
        </p>
        <p className="text-lg max-w-prose text-center mb-[20%]">
          work in progress
        </p>
      </div>

      <div className="hover:bg-blue-400/40 w-1/3 order-3 flex flex-col">

      </div>
      
    </main>
  );
}