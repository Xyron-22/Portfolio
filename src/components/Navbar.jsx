"use client"

import React, {useState} from "react";

import Link from "next/link";

import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
 
    const [toggle, setToggle] = useState("hidden");
    
    const showHamburgerMenu = () => {
        if (toggle === "hidden") {
            setToggle("block")
        }
        else {
            setToggle("hidden")
        }
    }

    return (
        <nav className="md:flex md:justify-between md:px-3 md:px-10 container-fluid h-full bg-mdLight border-b-2 border-dark border-solid relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center px-3 text-gray hover:text-mdDark hover:bg-dark lg:mx-8 transition-all duration-300 ease-in-out md:hover:scale-y-110 md:hover:scale-x-110 h-[100%] md:h-[95%]">
                <Link href={"/"} className="font-anton text-2xl md:text-4xl font-extrabold tracking-wide border-b-8 border-dark border-solid lg:px-3 hover:border-mdDark">Turn Ideas Into Reality</Link>
                </div>
            <button type="button" className="md:hidden px-3 text-2xl text-black" onClick={showHamburgerMenu}><GiHamburgerMenu></GiHamburgerMenu></button>
            </div>
            <ul className={`md:px-3 bg-opaque md:bg-mdLight md:inline md:flex md:justify-between md:w-96 md:items-center w-full text-center ${toggle} font-anton text-2xl text-mdDark md:text-gray absolute md:relative z-50`}>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"/about"}>About</Link></li>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"/projects"}>Projects</Link></li>
                <li className="h-[100%] md:h-[95%] transition-all duration-300 ease-in-out hover:scale-y-110 hover:scale-x-110 hover:text-mdDark md:hover:bg-dark p-5 first-letter:text-dark first-letter:text-4xl hover:first-letter:text-gray"><Link href={"contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar