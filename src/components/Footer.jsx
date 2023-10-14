import React from "react";
import Link from "next/link";

import {BsGithub, BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si"

const Footer = () => {
   
    return (
        <div className="h-full bg-dark z-50">
        <div className="w-full h-[70%] bg-dark flex justify-center items-center text-3xl md:text-5xl">
            <Link href="https://github.com/Xyron-22" target="_blank" className="transition-all duration-300 ease-in-out hover:text-mdDark hover:scale-y-125 hover:scale-x-125 mx-10">
            <BsGithub></BsGithub>
            </Link>
            <Link href="https://www.linkedin.com/in/xyron-uy-b5a915213/" target="_blank" className="transition-all duration-300 ease-in-out hover:text-mdDark hover:scale-y-125 hover:scale-x-125 mx-10">
            <BsLinkedin></BsLinkedin>
            </Link>
            <Link href="/contact" className="transition-all duration-300 ease-in-out hover:text-mdDark hover:scale-y-125 hover:scale-x-125 mx-10">
            <SiGmail></SiGmail>
            </Link>
        </div>
        <h4 className="text-center text-xs md:text-base bg-dark lg:text-xl">
            Copyright © {new Date(Date.now()).getFullYear().toString()} Xyron Uy • Philippines Based Developer
        </h4>
        </div>
    )
}

export default Footer

