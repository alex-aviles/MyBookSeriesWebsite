import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'

export default function BookThreePage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="w-1/3 order-2">
        <p className="max-w-full text-[200%] font-bold text-center mt-[15%]">Book Three:</p>
        <p className="max-w-full text-[300%] font-bold text-center mt-[15%]">Maelstrom Upon Mieraud</p>
        <p className="max-w-full text-[150%] text-center mt-[13%]">---Summary---</p>
        <p className="max-w-full text-[150%] text-center mt-[5%]">coming soon</p>
      </div>

      <div className="w-1/3 order-3 flex flex-col">
        
      </div>
      
    </main>
  );
}