import React from "react";
import ContactComponent from "@/components/ContactComponent";
import {MdOutlineMailOutline} from "react-icons/md";

const Contact = () => {
    return (
        <div className="w-full flex justify-center text-black">
           <div className="w-full lg:w-[70%] lg:h-[40rem] bg-mdLight rounded-2xl my-5 flex flex-col items-center justify-evenly">
            <h1 className="font-anton font-semibold text-4xl my-5 text-gray mt-10 md:text-5xl">Get in touch!</h1>
            <div className="flex">
            <MdOutlineMailOutline className="text-2xl mr-2 md:text-3xl"></MdOutlineMailOutline>
            <p className="font-semibold md:text-x">xeronuy@gmail</p>
            </div>
                <ContactComponent></ContactComponent>
            </div>
        </div>
    )
}

export default Contact