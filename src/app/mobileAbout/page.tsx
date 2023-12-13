import Image from "next/image"
import bookOneCover from '../assets/bookonecover.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about the Author.',
}

export default function mobileAboutPage() {

  return (
    <main className="flex flex-row justify-center max-h-screen max-w-screen">

      <div className="w-full m-6">
        <p className="max-w-full text-[200%] text-black font-bold text-center mt-[30%]">About Me!</p>
        <p className="max-w-full text-[85%] text-black text-center mt-[13%]">Hello Everyone,</p>
        <p className="max-w-full indent-8 text-[85%] text-black text-left mt-[5%]">
          My name is Alexander Aviles, and I can&apos;t thank you enough for visiting my page. I hope you enjoy the 
          website which I built myself and details the novels that make up the book series
          which I have written myself. Well what&apos;s written so far at least. I came up with
          the idea for the series over winter break my senior year of high school. Then, with the time
          I acquired from COVID-19, I dedicated the following 4 months writing my first ever novel: Genesis of Gleipnir.
        </p>
        <p className="max-w-full indent-8 text-[85%] text-black text-left mt-[5%]">
            Eventually, I will finish writing the series. But for the time being, I hope you find interest enough to purchase
            and enjoy the first book!
        </p>
      </div>
      
    </main>
  );
}