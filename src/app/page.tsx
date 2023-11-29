import Image from "next/image"
import mapImage from '../app/assets/Mieraud Map  5.jpg'

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen justify-around">

      <div className="w-fit h-fit mt-[2%] items-center text-center">
        <h1 className="font-bold text-white text-[200%] sm:text-[200%] md:text-[300%] lg:text-[500%] xl:text-[700%] leading-tight ">
          Chronicles{' '}of{' '}Mieraud
        </h1>
        <div className="w-fit h-fit mt-[-1%] ml-[23%]">
          <Image
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{
              maxWidth: '70%',
              height: 'auto',
            }}
          />
        </div>
      </div>

    </main>
  );
}