import Image from "next/image"
import mapImage from '../assets/mieraudmap.jpg'

export default function mobileMapPage() {

  return (
    <main className="flex h-screen max-w-screen">

      <div className="flex flex-col">
        <div className="max-w-full mt-[30vw] m-[1vw]">
          <Image
              className="w-[100%] h-auto"
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