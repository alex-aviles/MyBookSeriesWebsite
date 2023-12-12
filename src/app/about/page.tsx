import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about the Author.',
}

export default function aboutPage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="w-1/3 order-2">
        <p className="max-w-full text-[200%] font-bold text-center mt-[15%]">About Me!</p>
        {/*<p className="text-[300%] font-bold text-center mt-[15%]">
          Alexander Aviles
  </p>*/}
        <p className="max-w-full text-[150%] text-center mt-[13%]">Hello Everyone,</p>
        <p className="max-w-full indent-8 text-[150%] text-left mt-[5%]">
          My name is Alexander Aviles, and I can&apos;t thank you enough for visiting my page. I hope you enjoy the 
          website which I built myself and details the novels that make up the book series
          which I have written myself. Well what&apos;s written so far at least. I came up with
          the idea for the series over winter break my senior year of high school. Then, with the time
          I acquired from COVID-19, I dedicated the following 4 months writing my first ever novel: Genesis of Gleipnir.
        </p>
        <p className="max-w-full indent-8 text-[150%] text-left mt-[5%]">
            Eventually, I will finish writing the series. But for the time being, I hope you find interest enough to purchase
            and enjoy the first book!
        </p>
      </div>

      <div className="w-1/3 order-3 flex flex-col">
        
      </div>
      
    </main>
  );
}