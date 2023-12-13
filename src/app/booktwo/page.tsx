import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apostasy in Aporlan',
  description: 'Book Two of the Series',
}

export default function BookTwoPage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="w-1/3 order-2">
        <p className="max-w-full text-[200%] text-black font-bold text-center mt-[15%]">Book Two:</p>
        <p className="max-w-full text-[300%] text-black font-bold text-center mt-[15%]">Apostasy in Aporlan</p>
        <p className="max-w-full text-[150%] text-black text-center mt-[13%]">---Summary---</p>
        <p className="max-w-full text-[150%] text-black text-center mt-[5%]">work in progress</p>
      </div>

      <div className="w-1/3 order-3 flex flex-col">

      </div>
      
    </main>
  );
}