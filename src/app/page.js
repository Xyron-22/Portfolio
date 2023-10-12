import { Inter } from 'next/font/google';
import Image from 'next/image';
import bg from "../../public/backgrounds/bg-removebg-preview.png";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='h-[82vh] md:h-[75vh] lg:h-[68vh] container-fluid text-center overflow-auto flex justify-center items-center flex-col lg:flex-row'>
      <div className='flex justify-center items-center lg:h-[20%] flex-col transition-all duration-700 ease-in-out'>
      <h1 className='font-anton font-bold text-2xl md:text-5xl tracking-wide text-gray'>Hello. World.</h1>
      <h1 className='font-anton font-bold text-5xl md:text-7xl lg:text-8xl tracking-wide'>I&apos;m Xyron Uy</h1>
      <h1 className='font-anton font-bold text-2xl md:text-5xl tracking-wide'>A Fullstack Developer</h1>
      </div>
      <div>
        <Image src={bg} alt='bg-image' width={350} height={350}></Image>
      </div>
      <h1 className='font-anton font-bold text-xl md:text-3xl tracking-wide transition-all duration-700 ease-in-out'>Find Out More <br></br>Aboout Me</h1>
    </div>
  )
}
