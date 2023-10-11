import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import './globals.css'
import Layout from '@/components/Main'
import LayoutBody from '@/components/LayoutBody'

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
        <LayoutBody children={children}></LayoutBody>
     </body>
    </html>
  )
}
