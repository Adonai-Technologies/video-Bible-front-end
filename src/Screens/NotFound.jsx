import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from "react-icons/bi";

const NotFound = () => {
  return (
   <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img 
      src="/images/4044.png"
      alt="notfound" 
      className='w-full h-96 object-contain' 
      />
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <p className='font-semibold text-border italic leading-6'>
        The page your are looking for does not exist. You may have mistyped the URL
      </p>
      <Link 
        to="/">
          <button className="bg-submain text-white flex-rows gap-4 font-medium hover:text-main py-3 px-6 rounded-md">
          <BiHomeAlt /> Back Home
          </button>
      </Link>
   </div>
  )
}

export default NotFound
