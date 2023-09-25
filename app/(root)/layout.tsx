import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )  
}

export default layout
