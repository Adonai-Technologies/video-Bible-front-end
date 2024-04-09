import React from 'react'
import SideBar from './Dashboard/SideBar'
import Uploader from '../Components/Uploader'
import { Input } from '../Components/UserInputs'

function Profile() {
  return (
    <div>
       <SideBar>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <Uploader/>
            <Input
               label="FullName"
               placeholder="video Bible"
               type="text"
               bg={true}
            />
            <Input
               label="Email"
               placeholder="videoBible@gmail.com"
               type="text"
               bg={true}
            />
            <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
               <button className="bg-submain font-medium transitions hover:bg-main border border-submain text-white py-3 px-6 rounded w-full sm:w-auto">
                  Delete Account
               </button>
               <button className="bg-main font-medium transitions hover:bg-submain border border-submain text-white py-3 px-6 rounded w-full sm:w-auto">
                  Update Profile
               </button>
            </div>
          </div>
       </SideBar>
    </div>
  )
}

export default Profile
