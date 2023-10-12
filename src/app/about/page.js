import React from "react";

import Image from "next/image";

import { imageObjects } from "@/components/imageInfos";

const About = () => {
    return (
        <div className='container-fluid text-center'>
      <div className='w-full font-anton text-mdDark bg-gray font-medium py-10 px-5 lg:py-auto flex flex-col justify-center'>
        <h1 className="text-2xl md:text-4xl">Hi I am <span className="text-3xl md:text-5xl text-dark">Xyron Uy</span>,</h1>
        <h1 className='text-2xl md:text-4xl mb-3'>A <span className="text-3xl md:text-5xl text-dark">Fullstack Developer</span> based in the Philippines who is <span className="text-3xl md:text-5xl text-dark">Persistent</span>, <span className="text-3xl md:text-5xl text-dark">Resourceful</span>, and <span className="text-3xl md:text-5xl text-dark">Eager to learn.</span></h1>
        <h1 className='text-mdDark text-base md:text-2xl font-anton my-1 tracking-wide'>Started the journey of learning Software Technologies way back 2022, became passionate with solving problems and its challenges.</h1>
        <h1 className='text-mdDark text-base md:text-2xl font-anton my-1 tracking-wide'>Development and Designing Systems became a habit and now I want my skill to bring quality, value, and ease.</h1>
        </div>
      <div className='w-full my-5 transition-all duration-700 ease-in-out'>
        <h1 className="text-sans font-bold text-3xl p-3 text-black">Techstack</h1>
        <div className="flex justify-evenly flex-wrap px-3">
          {imageObjects.map(({name, fileName}, i) => {
            return (
              <div key={i} className="flex items-center flex-col justify-center m-1 sm:m-2">
                <div className="w-16 h-16 md:w-24 md:h-24 flex justify-center items-center">
                  <Image loading="eager" placeholder="blur" src={fileName} width={100} height={100} alt={name} title={name} className={`object-contain`}></Image>
                </div>
              <p className="text-xs sm:text-sm md:text-xl font-semibold">{name}</p>
              </div>
            )
          })}       
        </div>
        </div>
        {/* <div className="w-full bg-gray md:text-2xl lg:flex lg:h-96">
          <p className="lg:w-[33%] font-semibold text-mdDark font-sans w-[80%] md:w-[60%] m-auto pt-3 md:pt-8 lg:p-0 xl:px-5 lg:border-r-2 lg:border-dark lg:border-solid lg:h-48 lg:flex items-center">
          A good knowledge of Frontend Development including Document Object Model (DOM) manipulation, Client side and Server side Rendering, Data Fetching and Components. 
          </p>
          <p className="lg:w-[33%] font-semibold text-mdDark font-sans w-[80%] md:w-[60%] m-auto pt-3 md:pt-8 lg:p-0 xl:px-5 lg:h-48 lg:flex items-center">
          Backend Development including Business Logic, CRUD, API, Integrating Database, Middlewares, Authorization and Authentication, Templating Engines, Model, View, and Controllers.
          </p>
          <p className="lg:w-[33%] font-semibold text-mdDark font-sans w-[80%] md:w-[60%] m-auto py-3 md:py-8 lg:p-0 xl:px-5 lg:border-l-2 lg:border-dark lg:border-solid lg:h-48 lg:flex items-center">
          Integrating Database and Configuring Schema, Querying Database, Read and Write, and knowledgeable of Content Management Systems usage.
          </p>
        </div> */}
    </div>
    )
}

export default About

//sm:h-56 lg:h-96 xl:h-64