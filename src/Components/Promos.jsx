import React from 'react'
import { FiUser } from "react-icons/fi";

function Promos() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className="lg:grid lg:grid-cols-2 lg-gap-10 items-center">
          <div className="flex lg:gap-10 gap-6 flex-col">
            <h1 className="xl:text-4xl text-xl capitalize font-sans font-medium  leading-relatived">
             Download Your Videos  Watch offline</h1><br/> Enjoy on Your Mobile
             <p className="text-text text-sm  xl:text-base leading-6 xl:leading-8">
             Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. 
                standard Lorem Ipsum has been the industry's 
                  printing and typesetting industry. 
                  standard Lorem Ipsum has been the industry's 
             
             </p>
             <div className="flex gap-4 md:text-lg text-sm">
                   <div className="flex-colo bg-black text-submain px-6 py-3 rounded-md font-bold">
                    HD 4K
                   </div>
                   <div className="flex-rows gap-4 bg-black text-submain px-6 py-3 rounded-md font-bold">
                   <FiUser /> 2K
                   </div>
             </div>
          </div>
          <div>
            <img src="/images/mobile4.png" 
            alt="Mobile app"
            className='w-full  object-contain rounded-3xl' />
          </div>
      </div>
    </div>
  )
}

export default Promos;
