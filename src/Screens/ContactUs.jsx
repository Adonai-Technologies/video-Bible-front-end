/* eslint-disable no-unused-vars */
import React from 'react'
import Head from '../Components/Head'
import Layout from '../Layout/layout'
import { FaVoicemail } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

function ContactUs() {
    const ContactData =[
        {
            id: 1,
            title:'Email Us',
            info:"Interactively cross-platform models.",
            icon:FiMail,
            contact:`akonadu506@gmail`
        },
        {
            id: 2,
            title:'Call Us',
            info:"Call to for more information about our programs",
            icon:FiPhoneCall,
            contact:`+233 549 652 969`
        },
        {
            id: 3,
            title:'Location',
            info:"Anwiankwanta Ghana Ahofadie Kurom",
            icon:FiMapPin,
            contact:``
        },
    ]
  return (

    <Layout>
    <div className="min-height-screen container mx-auto px-2 my-6">
      <Head title='Contact Us'/>
      <div className="grid mg:grid-cols-2 gap-6 lg-my-20 my-10 lg:grid-cols-3 xl:gap-8">
        {
            ContactData.map((item) => (
                <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                     <span className="flex-colo w-20 h-20 rounded-full bg-main text-submain text-2xl">
                        <item.icon/>
                     </span>
                     <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                     <p className="mb-0 text-sm text-text leading-7">
                        <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}
                        </a>{' '}
                        {item.info}
                     </p>
                </div>
            ))
        }
      </div>
    </div>
  </Layout>
  )
}

export default ContactUs
