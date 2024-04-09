import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movies } from '../Data/MovieData'
import { Autoplay, Scrollbar, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FlexMoviesItems from './FlexMoviesItems';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';



function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper
       direction='vertical'
       slidesPerView={1}
       loop={true}
       speed={1000}
       modules={[Autoplay ,Scrollbar, Pagination]}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{delay: 4000, disableOnInteraction:false}}
       className='w-full xl:h-96 bg-dry lg:h-64 max-h-60'
      >
       { 
       Movies.slice(0, 5).map((movie,index)=>(
        <SwiperSlide key={index} className='relative rounded overflow-hidden'>
            <img src={`/images/${movie.image}`} 
            alt={movie.name}
            className='h-full w-full object-cover'
             />
              <div className="absolute linear-bg xl:pl-52 smpl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                    {movie.name}
                </h1>
                <div className="flex gap-5 items-center text-dryGray">
                  <FlexMoviesItems movie ={movie}/>
                </div>
                <div className="flex gap-5 items-center">
                     <Link to={`/movies/${movie.name}`} className='bg-submain hover:text-main transition text-white px-8 py-3 rounded font-medium sm: text-xs'
                     >
                     Watch Now
                     </Link>
                     <button className='bg-white hover:text-submain transition text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                        <FaHeart/>
                     </button>
                </div>
              </div>
        </SwiperSlide>
       ))
       }
      </Swiper>
    </div>
  )
}

export default Banner
