"use client"

import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import {MdOutlineDriveFileRenameOutline, MdOutlineMailOutline, MdOutlineSubject} from "react-icons/md";

const ContactComponent = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cql81ph', 'template_8v327jr', form.current, 'IaX8qnYJFgT0U0dPW')
          .then(() => {
              toast.success("Email Successfuly Sent");
          }, () => {
              toast.error("Something Happened, Please Try Again");
          });
        e.target.reset();
      };

    return (
            <form className="flex flex-col w-full h-full items-center justify-evenly" ref={form} onSubmit={sendEmail}>
                <Toaster></Toaster>
                <div className="flex w-full h-full items-center flex-col lg:flex-row lg:justify-evenly">
                <div className="flex flex-col w-[85%] lg:w-[40%] h-[70%] font-semibold">
                    <div className="flex flex-col focus-within:text-dark relative">
                        <label htmlFor="name" className="md:text-xl">Your Name</label>
                        <input className="pr-14 focus:text-black focus:outline-dark md:h-14 h-12 border-2 border-solid border-gray rounded-xl pl-2" id="name" type="text" placeholder="Full Name" name="user_name" required></input>
                        <MdOutlineDriveFileRenameOutline className="absolute bottom-[14%] right-[3%] md:text-4xl text-3xl text-gray z-10"></MdOutlineDriveFileRenameOutline>
                    </div>
                   <div className="flex flex-col group focus-within:text-dark relative">
                        <label className="mt-5 md:text-xl" htmlFor="Email">Your Email</label>
                        <input className="pr-14 focus:text-black focus:outline-dark md:h-14 h-12 border-2 border-solid border-gray rounded-xl pl-2" id="Email" type="email" placeholder="Email" name="user_email" required></input>
                        <MdOutlineMailOutline className="absolute bottom-[11%] right-[3%] md:text-4xl text-3xl text-gray"></MdOutlineMailOutline>
                   </div>
                   <div className="flex flex-col group focus-within:text-dark relative">
                        <label className="mt-5 md:text-xl" htmlFor="subject">Email Subject</label>
                        <input className="pr-14 focus:text-black focus:outline-dark md:h-14 h-12 border-2 border-solid border-gray rounded-xl pl-2" id="subject" type="text" placeholder="Subject" name="subject" required></input>
                        <MdOutlineSubject className="absolute bottom-[10%] right-[3%] md:text-4xl text-3xl text-gray"></MdOutlineSubject>
                   </div>                   
                </div>
                <div className="flex flex-col mt-5 lg:mt-0 w-[85%] lg:w-[40%] h-[70%] font-semibold focus-within:text-dark">
                    <label htmlFor="message" className="md:text-xl">Send Message</label>
                    <textarea className="pl-2 pt-2 focus:outline-dark focus:text-black rounded-xl border-2 border-solid border-gray" id="message" name="message" cols="30" rows="10" placeholder="Type Message"></textarea>
                </div>
                </div>
                <button className="transition-all duration-300 ease-in-out hover:text-mdDark hover:scale-y-125 hover:scale-x-125 md:text-3xl text-2xl font-anton bg-dark m-5 mb-10 px-3 py-2" type="submit">Send Email</button>
            </form>
    )
}

export default ContactComponent