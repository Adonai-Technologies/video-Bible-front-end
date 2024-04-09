import React from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import { Movies } from '../../../Data/MovieData'


function VideosList() {
  return (
   < SideBar>
         <div className="flex flex-col gap-6">
            <div className="flex-btn gap-2">
                <h2 className="text-xl font-bold">Video List</h2>
                 <button className='bg-main font-medium transitions hover:bg-submain border border-submain text-white py-3 px-6 rounded'>
                     Delete All
                 </button>
            </div>
            <Table data={Movies} admin={true}/>
         </div>
   </SideBar>
  )
}

export default VideosList