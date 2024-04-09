import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";


function FlexMoviesItems({movie}) {
  return (
    <>
     <div className="flex items-center ga-2">
           <span className="text-sm font-medium">{movie.category}</span>
     </div>
    
     <div className="flex items-center ga-2">
           <FaRegCalendarAlt className='text-submain w-3 h-3' />
           <span className="text-sm font-medium">{movie.year}</span>
     </div>
     <div className="flex items-center ga-2">
           <BiTime className='text-submain w-3 h-3' />
           <span className="text-sm font-medium">{movie.time}</span>
     </div>
    
    
    </>
  )
}

export default FlexMoviesItems
