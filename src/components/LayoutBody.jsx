"use client"

import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from '././Main'

const LayoutBody = ({children}) => {
    const [toggle, setToggle] = useState(false)
  return ( <>
    <header className='h-[10%]'>
    <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
</header>
  <Main toggle={toggle}>{children}</Main>
   <footer className='h-28 absolute bottom-0 w-full'>
    <Footer></Footer>
  </footer>
  </>
  )
}

export default LayoutBody