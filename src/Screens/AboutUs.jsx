import React from 'react'
import Layout from '../Layout/layout'
import Head from '../Components/Head'
const AboutUs = () => {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title='About Us'/>
        <div className="xl:py-20 py-20 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl md-4 font-semibold">
                 Welcome To HOP Video Bible
              </h3><div className="mt-3 text-sm leading-8 text-white">

              <p>
                  Prophet Francis Kwateng is the Founder and General Overseer,
                  of House of Power Ministry International a thriving ministry with over
                  200 Branches across the world including South Africa, USA, UK, Switzerland, Italy, Cote D'ivoire, Gabon, Senegal and still counting
                  The Ministry has its headquarters in Ahofadiekrom - Adjamesu in Kumasi - off Bekwai Road, Ghana.
              </p>
              <p>
                  Prophet Francis Kwateng is the Founder and General Overseer,
                  of House of Power Ministry International a thriving ministry with over
                  200 Branches across the world including South Africa, USA, UK, Switzerland, Italy, Cote D'ivoire, Gabon, Senegal and still counting
                  The Ministry has its headquarters in Ahofadiekrom - Adjamesu in Kumasi - off Bekwai Road, Ghana.
              </p>
               </div>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-8 bg-dry rounded-lg">
                       <span className="text-3xl block font-extrabold">10K</span>
                      <h4 className="text-lg font-semibold mb-2">Listed Videos</h4>
                      <p className="mb-0 text-text leading-7 text-sm">
                        Lorem ipsum dolor sit amet consectetu amet consectetu
                      </p>
                    </div>
                    
                    <div className="p-8 bg-dry rounded-lg">
                       <span className="text-3xl block font-extrabold">241K</span>
                      <h4 className="text-lg font-semibold mb-2">Loverly Users</h4>
                      <p className="mb-0 text-text leading-7 text-sm">
                         Completely Free without registration
                      </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg-4">
              <img 
               src="/images/about.png"
               alt="aboutus" 
               className='w-full xl:block hidden h-header rounded-lg object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
