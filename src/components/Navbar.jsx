"use client"

import React, {useState} from "react";
import Image from "next/image";
import sun from "../../public/modeImages/sun.png";
import moon from "../../public/modeImages/moon.png";

import Link from "next/link";

import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = ({toggle, setToggle}) => {
 
    const [hideBurger, setHideBurger] = useState("hidden");
    
    const showHamburgerMenu = () => {
        if (hideBurger === "hidden") {
            setHideBurger("block")
        }
        else {
            setHideBurger("hidden")
        }
    }

    return (
        <nav className="lg:flex lg:justify-between lg:px-3 container-fluid h-full bg-mdLight border-b-2 border-dark border-solid relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center px-3 text-gray hover:text-mdDark hover:bg-dark lg:mx-8 transition-all duration-300 ease-in-out md:hover:scale-y-110 md:hover:scale-x-110 h-[100%] md:h-[95%]">
                <Link href={"/"} className="font-anton text-2xl md:text-4xl font-extrabold tracking-wide border-b-8 border-dark border-solid lg:px-3 hover:border-mdDark">Turn Ideas Into Reality</Link>
                </div>
            <button type="button" className="lg:hidden px-3 text-2xl text-black" onClick={showHamburgerMenu}><GiHamburgerMenu className="md:w-10 md:h-10"></GiHamburgerMenu></button>
            </div>
            <button className={`bg-dark w-16 h-6 md:w-20 md:h-8 flex justify-center rounded-3xl p-0.5 mx-auto my-2 lg:my-auto`} onClick={() => {
          setToggle(!toggle)
        }}><div className={`w-[50%] h-full ${toggle ? "mr-[50%] bg-black" : "ml-[50%] bg-light"} transition-all duration-700 ease-in-out rounded-full`}>
            <Image src={toggle ? moon : sun} alt="Mode Image" width={20} height={20} className="mx-auto my-auto transition-all duration-700 ease-in-out rounded-full w-[90%] h-[100%]"></Image>
            </div>
            </button>
            <ul className={`lg:px-3 bg-opaque lg:bg-mdLight lg:inline lg:flex lg:justify-between lg:w-[50%] xl:w-[30%] lg:items-center w-full text-center ${hideBurger} font-anton text-2xl text-mdDark lg:text-gray absolute lg:relative z-50`}>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"/about"}>About</Link></li>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"/about"}>Services</Link></li>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"/projects"}>Projects</Link></li>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar