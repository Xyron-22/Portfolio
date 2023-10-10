import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import './globals.css'
import Layout from '@/components/layout'

export const metadata = {
  title: 'XU Portfolio',
  description: 'Web Developer Portfolio',
  icons: {
    icon: "/new-logo.png",
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='container-fluid bg-light flex flex-col min-h-screen relative'>
        <header className='h-[10%]'>
          <Navbar></Navbar>
      </header>
        <Layout children={children}></Layout>
        {/* <main className='min-h-[75%] pb-28 bg-[url("../../public/backgrounds/20067927.jpg")] lg:bg-contain'>
          <div className='min-h-[77vh]'>
        {children}
        </div>
        </main> */}
         <footer className='h-28 absolute bottom-0 w-full'>
          <Footer></Footer>
        </footer>
     </body>
    </html>
  )
}
