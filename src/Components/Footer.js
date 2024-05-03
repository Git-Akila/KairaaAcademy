import React from 'react'
import { FaTwitter, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoCallSharp, IoMailSharp, IoLocationSharp } from "react-icons/io5";
import image from "../carouselimages/footerLogo.jpeg";
const Footer = () => {
  return (
    <div className=' text-[#3687F3]  pt-12 bg-[#F7F4FD]'>
      <div className='flex justify-evenly items-center'>
        <div className='w-1/5'>
          <img src={image} className='h-24 w-24' />
          <p className='font-paraFont font-medium text-xl py-4'>
            Kerala Blockchain Academy (KBA) is a center of excellence under the Kerala University of Digital Sciences, Innovation and Technology.

          </p>
          <ul className='flex text-4xl gap-2'>
            <li><FaTwitter /></li>
            <li><FaInstagramSquare /></li>
            <li><FaLinkedin /></li>
            <li><FaFacebookSquare /></li>
          </ul>
        </div>
        <div className='w-1/5'>
          <h4 className='font-headingFont text-2xl font-bold'>Quick links</h4>
          <ul className='text-xl font-paraFont '>
            <li className='p-4 font-medium'>FAQ</li>
            <li className='p-4 font-medium'>Blog</li>
            <li className='p-4 font-medium'>Privacy Policy</li>
          </ul>
        </div>
        <div className='w-1/5'>
          <h4 className='font-headingFont text-2xl font-bold'>Contact</h4>
          <div className='flex items-center gap-2'>
            <IoCallSharp   className='text-3xl'/>
            <p className='py-4 font-medium font-paraFont text-xl'><a href='tel:+91 7092774077'>+91 7092774077</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoMailSharp  className='text-3xl' />
            <p className='py-4 font-medium font-paraFont text-xl'><a href='mailto:support@kairaaacademy.com'>support@kairaaacademy.com</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoLocationSharp  className='text-6xl'/>
            <p className='py-4 font-medium font-paraFont text-xl'>131, 2nd floor, DB Road, RS Puram,Coimbatore - 641002</p>
          </div>

        </div>
      </div>
      <p className='text-right p-4 font-paraFont text-xl'>Copyright @ 2024 Kairaa Blockchain Academy</p>
    </div>
  )
}

export default Footer
