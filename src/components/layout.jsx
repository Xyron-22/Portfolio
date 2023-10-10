"use client"

import React, { useState } from 'react'

const Layout = ({children}) => {
    const [toggle, setToggle] = useState(false)

  return (
    <main className={`min-h-[75%] pb-28 transition-all duration-700 ease-in-out ${toggle ? "bg-[url('../../public/backgrounds/20067927.jpg')]" : "bg-[url('../../public/backgrounds/nighttime.jpg')]"} lg:bg-cover bg-bottom`}>
          <div className={`min-h-[77vh] text-${toggle ? "dark" : "mdLight"}`}>
        {children}
        </div>
        <button className={`bg-dark w-20 h-8 flex justify-center rounded-3xl p-1`} onClick={() => {
          setToggle(!toggle)
        }}><div className={`w-[50%] h-full bg-light ${toggle ? "mr-[50%]" : "ml-[50%]"} transition-all duration-700 ease-in-out rounded-full`}></div></button>
    </main>
  )
}

export default Layout