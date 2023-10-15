import React from 'react'

import {MdOutlineComputer} from "react-icons/md";
import {GrServerCluster} from "react-icons/gr";
import {BsDatabase} from "react-icons/bs";

const Services = () => {
  return (
    <div className='lg:h-[77vh] container-fluid text-center overflow-auto flex justify-center items-center flex-col m-auto'>
        <h1 className='font-anton text-5xl font-semibold mt-5'>Services</h1>
    <div className='h-[80%] w-full flex justify-center md:items-center flex-col lg:flex-row m-auto'>
    <div className='w-full lg:w-[33%] bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-[30%] md:h-[550px] lg:h-full flex justify-center items-center flex-col'>
      <p className='text-black font-medium font-anton text-2xl md:text-3xl tracking-wide'>FRONTEND DEVELOPMENT</p>
      <ul>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Website&#47;&gt;</li>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Web Application&#47;&gt;</li>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Integration&#47;&gt;</li>
      </ul>
      <div className='flex justify-center items-center text-5xl bg-dark w-24 h-24 rounded-[50%] m-2 text-black'><MdOutlineComputer></MdOutlineComputer></div>
      <p className='p-6 m-2 flex justify-center items-center h-[50%] w-[280px] md:w-[500px] lg:w-[320px] xl:w-[360px] md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl bg-mdLight rounded-2xl'>Building Static and Dynamic Web Application that is fully Responsive and with Enhanced UI/UX Design to provide great User Experience</p>
      </div>
    <div className='w-full lg:w-[33%] bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-[30%] md:h-[550px] lg:h-full flex justify-center items-center flex-col'>
      <p className='text-black font-medium font-anton text-2xl md:text-3xl tracking-wide'>BACKEND DEVELOPMENT</p>
      <ul>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Server&#47;&gt;</li>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Web API&#47;&gt;</li>
      </ul>
      <div className='flex justify-center items-center text-5xl bg-dark w-24 h-24 rounded-[50%] m-2 text-black'><GrServerCluster></GrServerCluster></div>
      <p className='p-6 m-2 flex justify-center items-center h-[50%] w-[280px] md:w-[500px] lg:w-[320px] xl:w-[360px] md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl bg-mdLight rounded-2xl'>Backend Development using Frameworks for Fast and Scalable Solution for Business Logic and Processing of Data</p>
      </div>
    <div className='w-full lg:w-[33%] bg-no-repeat bg-center lg:bg-contain lg:bg-center bg-contain md:bg-auto h-[30%] md:h-[550px] lg:h-full flex justify-center items-center flex-col'>
      <p className='text-black font-medium font-anton text-2xl md:text-3xl tracking-wide'>DATABASE AND CMS</p>
      <ul>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Content Management System&#47;&gt;</li>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;Relational Database&#47;&gt;</li>
      <li className='text-black font-medium font-anton text-lg md:text-xl tracking-wide'>&lt;NonRelational Database&#47;&gt;</li>
      </ul>
      <div className='flex justify-center items-center text-6xl bg-dark w-24 h-24 rounded-[50%] m-2 text-black'><BsDatabase></BsDatabase></div>
      <p className='p-6 m-2 flex justify-center items-center h-[50%] w-[280px] md:w-[500px] lg:w-[320px] xl:w-[360px] md:text-2xl text-gray font-sans lg:text-xl xl:text-2xl bg-mdLight rounded-2xl'>Database usage for Storing and Accessing Data and Information. Content Management System for managing Content and Quick Development</p>
      </div>
  </div>
  </div>
  )
}

export default Services