import Image from "next/image"
import mapImage from '../assets/mieraudmap.jpg'

export default function mapPage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="order-2 flex flex-col">
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
              className="w-[80%] h-auto"
              src={mapImage}
              alt="Map of the Continent of Mieraud"
              priority={true}
              placeholder="blur"
            />
        </div>
        </div>
      
    </main>
  );
}