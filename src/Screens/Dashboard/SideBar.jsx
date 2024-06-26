import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt } from "react-icons/fa";
import {RiLockPasswordLine,RiUpload2Fill} from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Layout from "../../Layout/layout";
import { NavLink } from "react-router-dom";

function SideBar({children}) {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: BsFillGridFill
    },
    {
      name: "Videos List",
      link: "/videoslist",
      icon: FaListAlt
    },
    {
      name: "Upload Video",
      link: "/addvideo",
      icon: RiUpload2Fill
    },
    {
      name: "Categories",
      link: "/categories",
      icon: HiViewGridAdd
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUser
    },
    {
      name: "Update Profile",
      link: "/profile",
      icon: FiSettings
    },
    {
      name: "Favorites Videos",
      link: "/favorite",
      icon: FaHeart
    },
    {
      name: "Change Password",
      link: "/password",
      icon: RiLockPasswordLine
    }
  ];
  const active = "bg-dryGray text-submain"
  const hover = "hover:text-white hover:bg-main"
  const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4"
  const Hover = ({isActive}) => 
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  
  return (
    <Layout>
        <div className="min-h-screen container mx-auto px-2">
            <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
                <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
                    {
                        SideLinks.map((link, index) =>(
                             <NavLink to={link.link} key={index} className={Hover}>
                              <link.icon/> <p>{link.name}</p>
                             </NavLink>
                        ))
                    }
                  </div>
                <div
                   data-aos="fade-up"
                   data-aos-duration ="1000"
                   data-aos-delay ="10"
                   data-aos-offset ="200"
                   className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
                   {children}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SideBar;
