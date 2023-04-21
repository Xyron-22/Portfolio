import { Inter } from 'next/font/google';

import {MdOutlineComputer} from "react-icons/md";
import {GrServerCluster} from "react-icons/gr";
import {BsDatabase} from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='container-fluid lg:h-[600px] xl:h-[770px] text-center overflow-y-scroll'>
      <div className='flex justify-center items-center w-full h-20 lg:h-[20%]'>
      <h1 className='font-anton font-bold text-4xl md:text-5xl text-gray tracking-wide'>CAPABILITIES</h1>
      </div>
      <div className='h-[80%] w-full flex justify-center md:items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-[33%] bg-shape bg-no-repeat bg-center bg-top lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>FRONTEND DEVELOPMENT</p>
          <div className='flex justify-center items-center text-6xl bg-dark m-auto w-24 h-24 rounded-[50%]'><MdOutlineComputer></MdOutlineComputer></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px]  md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Building Static and Dynamic Web Application that is fully Responsive and with Enhanced UI/UX Design to provide great User Experience</p>
          </div>
        <div className='w-full lg:w-[33%] bg-shape2 bg-no-repeat bg-center bg-top lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>BACKEND DEVELOPMENT</p>
          <div className='flex justify-center items-center text-5xl bg-dark w-24 h-24 rounded-[50%] m-auto'><GrServerCluster></GrServerCluster></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px] md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Backend Development using Frameworks for Fast and Scalable Solution for Business Logic and Processing of Data</p>
          </div>
        <div className='w-full lg:w-[33%] bg-shape3 bg-no-repeat bg-center bg-top lg:bg-contain lg:bg-center bg-contain md:bg-auto h-72 md:h-[550px] lg:h-full'>
          <p className='text-dark font-medium font-anton text-2xl md:text-3xl tracking-wide'>DATABASE AND CMS</p>
          <div className='flex justify-center items-center text-6xl bg-dark w-24 h-24 rounded-[50%] m-auto'><BsDatabase></BsDatabase></div>
          <p className='m-auto h-[40%] flex justify-center items-center w-[280px] md:w-[350px] lg:w-[280px]  md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl'>Database usage for Storing and Accessing Data and Information. Content Management System for managing Content and Quick Development</p>
          </div>
      </div>
    </div>
  )
}
