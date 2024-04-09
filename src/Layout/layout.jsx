import React from 'react'
import Navbar from '../Layout/navbar'
import Footer from  '../Layout/footer.jsx'
function layout({children}) {
  return (
    <>
    
    <div className='bg-main text-white'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
    
    </>
  )
}

export default layout
