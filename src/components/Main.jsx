"use client"

import React from 'react'

const Main = ({children, toggle}) => {
    // const [toggle, setToggle] = useState(false)

  return (
    <main className={`min-h-[75%] pb-28 transition-all duration-400 ease-in-out ${toggle ? "bg-[url('../../public/backgrounds/1311.jpg')]" : "bg-[url('../../public/backgrounds/night.jpg')]"} lg:bg-cover bg-bottom`}>
          <div className={`min-h-[77vh] text-${toggle ? "dark" : "mdLight"}`}>
        {children}
        </div>
    </main>
  )
}

export default Main