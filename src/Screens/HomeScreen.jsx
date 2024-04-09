import React from 'react'
import Banner from '../Components/Banner.jsx'
import PopularVideos from '../Components/PopularVideos.jsx'
import TopRated from '../Components/TopRated'
import Promos from '../Components/Promos.jsx'
import Layout from '../Layout/layout.jsx'




function HomeScreen() {
  return (
    <Layout>
    <div className='container mx-auto min-h-screen px-2 mb-6'>
      <Banner/>
      <PopularVideos/>
      <TopRated/>
      <Promos/>
    </div>
  </Layout>
  )
}

export default HomeScreen
