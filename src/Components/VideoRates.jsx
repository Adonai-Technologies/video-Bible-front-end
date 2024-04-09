import React, { useState } from 'react'
import Titles from './Titles'
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from './UserInputs';
import Rating from './Stars';
import { UsersData } from '../Data/UsersData';

 
function VideoRates({movie}) {
  const Ratings = [
    {
      title:"Exceptional",
      value:5
    },
    {
      title:"Deep Mistery",
      value:5
    },
    {
      title:"Exellent",
      value:5
    },
    {
      title:"Splended",
      value:5
    },
    {
      title:"True Gosple of Christ",
      value:5
    },
    {
      title:"Masterpiece",
      value:5
    },
  ]

  const [ rating, setRating ] = useState(0);
  return (
    <div className='my-12'>
       <Titles titles='Comments' Icon={BsBookmarkStarFill}/>
       <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
           {/* writing comments */}
            <div className="xl:col-span-2 w-full flex flex-col gap-8">
                <h3 className="text-xl text-text font-semibold">
                  Comment on "{movie?.name}"
                  </h3>
                  <p className="text-sm leading-7 font-medium text-border">
                      write a comment or a question for this message.
                  </p>
                  <div className="text-sm w-full">
                     <Select label="Select Rating" 
                     options={Ratings} onChange={(e) => setRating(e.target.value)}
                     />
                     <div className="flex mt-4 text-lg gap-2 text-star">
                        <Rating value={rating}/>
                     </div>
                  </div>

                     {/* message */}
                     <Message label="Message" placeholder="Makes it short and sweet...."/>
                     
                     {/* submit */}
                     <button className="bg-submain text-white py-3 w-full flex-colo rounded">
                       Submit
                     </button>
                     </div>
                     {/* REVIEWERS */}
                     <div className="col-span-3  flex flex-col gap-6">
                         <h3 className="text-xl text-text font-semibold">Contributions And Questions(56)</h3>
                          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                             {
                              UsersData.map((user, i) =>(
                                <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                                    <div className="col-span-2 bg-main hidden md:block">
                                      <img src={`/images/${user? user.image : 'Akua.png'}`} 
                                      alt={user.fullName} className='w-full h-24 rounded-lg object-cover' 
                                      /> 
                                    </div>
                                    <div className="col-span-7 flex flex-col gap-2">
                                      <h2>{user.fullName}</h2>
                                      <p className="text-xs leading-6 font-medium text-text">
                                         {user.message}
                                      </p>
                                    </div>
                                    {/* rates */}
                                    <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                                      <Rating/>
                                    </div>
                                </div>
                              ))
                             }
                          </div>
                     </div>
                  </div>
             </div>
      
    
  )
}

export default VideoRates;
