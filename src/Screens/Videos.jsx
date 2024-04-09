
import React, { useState } from 'react'
import Layout from '../Layout/layout';
import Filters from '../Components/Filters';
import Movie from '../Components/Movies'
import { Movies } from '../Data/MovieData'
import { CgSpinner } from "react-icons/cg";

function VideosPage() {
     const maxPage = 4
     const [page,setPage] = useState(maxPage)
     const HandleLoadingMore = () =>{
            setPage(page + maxPage)
     }
     
return (
    <Layout>
        <div className="min-height-screen container mx-auto px-2 my-6">
          <Filters/>
          <p className='text-lg font-medium my-6'>
            Total <span className='font-bold text-submain'>{Movies?.length}</span>items Found
          </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
           {
            Movies.slice(0,page)?.map((movie,index) =>(
               <Movie key={index} movie={movie}/>
            ))}
        </div>
           {/* loading More */}
            <div className="w-full flex-colo md:my-20 my-10">
                <button onClick={ HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-submain'>
                    Loading More  <CgSpinner className='animate-spin'/>
                </button>
            </div>
        </div>
  </Layout>
  )
}

export default VideosPage;
