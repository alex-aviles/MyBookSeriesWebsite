import Image from "next/image"
import mapImage from '../assets/mieraudmap.jpg'

export default function mapPage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="ml-[10%] order-2">
          <Image
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{
              maxWidth: '80%',
              height: 'auto',
            }}
          />
        </div>
      
    </main>
  );
}