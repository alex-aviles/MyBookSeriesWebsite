import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maelstrom upon Mieraud',
  description: 'Book Three of the Series',
}

export default function mobileBookThreePage() {

    return (
      <main className="flex flex-col justify-around max-h-screen max-w-screen">
  
        <div className="max-w-full items-center order-1 m-6">
          <p className="text-[199%] font-bold text-center mt-[15%]">Maelstrom upon Mieraud</p>
          <p className="text-[85%] text-center mt-[13%]">---Summary---</p>
          <p className="text-[85%] text-center mt-[5%]">coming soon</p>
        </div>
  
       
          <div className="w-[50%] order-2 ml-[25%]">
            {/*<Image
              src={bookOneCover}
              alt="Cover for Book One: Genesis of Gleipnir"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              priority={true}
              placeholder="blur"
            />*/}
          </div>
       
        
      </main>
    );
  }