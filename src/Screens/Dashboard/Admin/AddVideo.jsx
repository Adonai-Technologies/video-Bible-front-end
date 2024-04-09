import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { Input, Message, Select } from "../../../Components/UserInputs";
import Uploader from "../../../Components/Uploader";
import { CategoriesData } from "../../../Data/CategoryData";
import { UsersData } from "../../../Data/UsersData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import ProductionModel from "../../../Components/CastModel";

function AddVideo() {
  const [modelOpen, setModelOpen] = useState(false);
  const [cast, setCast] = useState(null);


    useEffect(()=>{

      if(modelOpen === false ){
          setCast();
      }

    },[modelOpen])





  return (
    <SideBar>
     <ProductionModel modelOpen={modelOpen} setModelOpen={setModelOpen} cast={cast}/>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Upload Video</h2>
        <div className="w-full grid md:grid-cols-2 gap-2">
          <Input
            label="Video Title"
            placeholder="How to get Closer To God"
            type="text"
            bg={true}
          />
          <Input label="Video Title" placeholder="2hrs" type="text" bg={true} />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="Twi"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Release"
            placeholder="2024"
            type="number"
            bg={true}
          />
        </div>
        {/* IMAGES */}

        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* img without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/banner3.png"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* image with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/banner4.png"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        {/* DESCRIPTION */}

        <Message
          label="Video Description"
          placeholder="Make it short and sweet"
        />
        {/* CATEGORY */}
        <div className="text-sm w-full">
          <Select label="Category" options={CategoriesData} />
        </div>

        {/* VIDEO */}

        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">Video</label>
          <Uploader />
        </div>
        {/* PRODUCTION TEAM */}
        <div className="w-full grid lg:grid-cols-2 gap-2 items-start">
          <button 
          onClick={() => setModelOpen(true)} className="w-full py-4 bg-main border border-submain border-dashed text-white rounded">
            Add Production Team
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/${user.image ? user.image : "Akua.png"}`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p>{user.fullName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 bg-dry border flex-colo  border-border  text-submain rounded">
                    <MdDelete />
                  </button>
                  <button 
                       onClick={() =>{
                         setCast(user);
                        setModelOpen(true)}}
                       className="w-6 h-6 bg-dry border flex-colo  border-border text-green-600 rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button className="bg-submain w-full gap-6 flex-rows font-medium  text-white py-4  rounded">
          <ImUpload />
          Publish Video
        </button>
      </div>
    </SideBar>
  );
}

export default AddVideo;
