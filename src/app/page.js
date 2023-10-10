import { Inter } from 'next/font/google';
import Image from 'next/image';
import bg from "../../public/backgrounds/bg-removebg-preview.png";

import {MdOutlineComputer} from "react-icons/md";
import {GrServerCluster} from "react-icons/gr";
import {BsDatabase} from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='h-[75vh] lg:h-[68vh] container-fluid text-center overflow-auto flex justify-center items-center flex-col lg:flex-row'>
      <div className='flex justify-center items-center lg:h-[20%] flex-col transition-all duration-700 ease-in-out'>
      <h1 className='font-anton font-bold text-2xl md:text-5xl tracking-wide'>Hello. World.</h1>
      <h1 className='font-anton font-bold text-5xl md:text-7xl lg:text-8xl tracking-wide'>I'm Xyron Uy</h1>
      <h1 className='font-anton font-bold text-2xl md:text-5xl tracking-wide'>A Fullstack Developer</h1>
      {/* <h1 className='font-anton font-bold text-2xl md:text-5xl text-light tracking-wide'>Hello. World.</h1>
      <h1 className='font-anton font-bold text-5xl md:text-7xl lg:text-8xl text-mdLight tracking-wide'>I'm Xyron Uy</h1>
      <h1 className='font-anton font-bold text-2xl md:text-5xl text-dark tracking-wide'>A Fullstack Developer</h1> */}
      </div>
      <div>
        <Image src={bg} alt='bg-image' width={350} height={350}></Image>
      </div>
      <h1 className='font-anton font-bold text-xl md:text-3xl tracking-wide transition-all duration-700 ease-in-out'>Find Out More <br></br>Aboout Me</h1>
      {/* <div className='h-[80%] w-full flex justify-center md:items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-[33%] bg-shape bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>FRONTEND DEVELOPMENT</p>
          <div className='flex justify-center items-center text-6xl bg-dark m-auto w-24 h-24 rounded-[50%]'><MdOutlineComputer></MdOutlineComputer></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px]  md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Building Static and Dynamic Web Application that is fully Responsive and with Enhanced UI/UX Design to provide great User Experience</p>
          </div>
        <div className='w-full lg:w-[33%] bg-shape2 bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>BACKEND DEVELOPMENT</p>
          <div className='flex justify-center items-center text-5xl bg-dark w-24 h-24 rounded-[50%] m-auto'><GrServerCluster></GrServerCluster></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px] md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Backend Development using Frameworks for Fast and Scalable Solution for Business Logic and Processing of Data</p>
          </div>
        <div className='w-full lg:w-[33%] bg-shape3 bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>DATABASE AND CMS</p>
          <div className='flex justify-center items-center text-6xl bg-dark w-24 h-24 rounded-[50%] m-auto'><BsDatabase></BsDatabase></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px]  md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Database usage for Storing and Accessing Data and Information. Content Management System for managing Content and Quick Development</p>
          </div>
      </div> */}
    </div>
  )
}
