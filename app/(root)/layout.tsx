import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <>
      NavBar
      {children}
      Footer

    </>
  )  
}

export default layout
