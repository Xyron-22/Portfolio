import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageObjects } from "@/components/imageInfos";
import cws from "../../../public/projectImages/CWS.png";
import ecom from "../../../public/projectImages/e-com.png";
import memoir from "../../../public/projectImages/Memoir.png";


const Project = () => {

    return (
        <div className="w-full text-center">
          <h1 className="font-anton font-semibold text-3xl md:text-5xl my-5 transition-all duration-700 ease-in-out">Projects</h1>
          <div className="flex flex-col lg:flex-row flex-wrap lg:justify-evenly items-center transition-all duration-700 ease-in-out">
            <div className="h-full w-[80%] lg:w-[30%] text-center border-b-2 border-solid border-dark mb-4">
                <p className=" font-semibold font-anton text-xl md:text-3xl mb-3">Chat With Strangers</p>
                <p className=" font-medium font-anton text-base md:text-2xl mb-2">Real-Time Chat Web App</p>
                <div className="relative group transition-all duration-300 ease-in lg:hover:bg-black">
                    <Image alt="CWS Project" loading="eager" placeholder="blur" src={cws} width={1300} height={1300} className="object-contain lg:group-hover:opacity-30 transition-all duration-300 ease-in"></Image>
                    <div className="font-anton hover:text-mdDark my-2 md:my-4 lg:my-0 lg:absolute lg:top-[50%] w-full text-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in">
                        <Link href={"https://chat-with-strangers-1xoq.onrender.com/"} className="bg-dark lg:p-3 md:text-xl p-2 text-sm" target="_blank">View this Project</Link>
                    </div>
                </div>
                <p className=" font-medium font-anton text-base md:text-xl my-2">TechStack Used</p>
                <div className="w-full flex justify-evenly items-center flex-wrap">
                    {imageObjects.map(({name, fileName, usedIn}, i) => {
                        if (usedIn.includes("CWS")) {
                            return (
                                <div key={i} className="flex items-center flex-col justify-center m-1">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <Image loading="eager" placeholder="blur" src={fileName} width={100} height={100} alt={name} title={name} className="object-contain"></Image>
                                </div>
                                <p className="text-xs">{name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="h-full w-[80%] lg:w-[30%] text-center border-b-2 border-solid border-dark mb-4">
                <p className=" font-semibold font-anton text-xl md:text-3xl mb-3">Seven Zero Five</p>
                <p className=" font-medium font-anton text-base md:text-2xl mb-2">E-Commerce Website</p>
                <div className="relative group transition-all duration-300 ease-in lg:hover:bg-black">
                    <Image alt="E-commerce Project" loading="eager" placeholder="blur" src={ecom} width={1300} height={1300} className="object-contain lg:group-hover:opacity-30 transition-all duration-300 ease-in"></Image>
                    <div className="font-anton hover:text-mdDark my-2 md:my-4 lg:my-0 lg:absolute lg:top-[50%] w-full text-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in">
                        <Link href={"https://seven-sero-five.vercel.app/"} className="bg-dark p-2 text-sm lg:p-3 md:text-xl" target="_blank">View this Project</Link>
                    </div>
                </div>
                <p className=" font-medium font-anton text-base md:text-xl my-2">TechStack Used</p>
                <div className="w-full flex justify-evenly items-center flex-wrap">
                    {imageObjects.map(({name, fileName, usedIn}, i) => {
                        if (usedIn.includes("E-com")) {
                            return (
                                <div key={i} className="flex items-center flex-col justify-center m-1">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <Image loading="eager" placeholder="blur" src={fileName} width={100} height={100} alt={name} title={name} className="object-contain"></Image>
                                </div>
                                <p className="text-xs">{name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="h-full w-[80%] lg:w-[30%] text-center border-b-2 border-solid border-dark mb-4">
                <p className=" font-semibold font-anton text-xl md:text-3xl mb-3">Memoir</p>
                <p className=" font-medium font-anton text-base md:text-2xl mb-2">Social Media Web App</p>
                <div className="relative group transition-all duration-300 ease-in lg:hover:bg-black">
                    <Image alt="Social Media Project" loading="eager" placeholder="blur" src={memoir} width={1300} height={1300} className="object-contain lg:group-hover:opacity-30 transition-all duration-300 ease-in"></Image>
                    <div className="font-anton hover:text-mdDark my-2 md:my-4 lg:my-0 lg:absolute lg:top-[50%] w-full text-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in">
                        <Link href={"https://memoir-bxvx.onrender.com/"} className="bg-dark lg:p-3 md:text-xl p-2 text-sm" target="_blank">View this Project</Link>
                    </div>
                </div>
                <p className=" font-medium font-anton text-base md:text-xl my-2">TechStack Used</p>
                <div className="w-full flex justify-evenly items-center flex-wrap">
                    {imageObjects.map(({name, fileName, usedIn}, i) => {
                        if (usedIn.includes("Memoir")) {
                            return (
                                <div key={i} className="flex items-center flex-col justify-center m-1">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <Image loading="eager" placeholder="blur" src={fileName} width={100} height={100} alt={name} title={name} className="object-contain"></Image>
                                </div>
                                <p className="text-xs">{name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
          </div>
        </div>
    )
}

export default Project