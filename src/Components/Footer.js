import React from 'react'
import { FaTwitter, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoCallSharp, IoMailSharp, IoLocationSharp } from "react-icons/io5";
import image from "../carouselimages/footerLogo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' text-[#3687F3] md:text-xl text-lg  pt-12 md:p-2 px-8 bg-[#F7F4FD]'>
      <div className='flex md:flex-row flex-col md:justify-evenly items-center'>
        <div className='md:w-1/5'>
          <img src={image} className='h-24 w-24' />
          <p className='font-paraFont font-medium md:text-xl py-4'>
          Kairaa Blockchain Academy is a top-notch online learning center that offers a wide range of courses.

          </p>
          
          <ul className='flex md:text-4xl text-3xl gap-2'>
           <Link to='https://www.linkedin.com/company/kairaa-blockchain-academy/'> <li><FaLinkedin /></li></Link>
            <Link to='https://www.instagram.com/kairaaacademy/'><li><FaInstagramSquare /></li></Link>
           <Link to='https://twitter.com/Kairaa_academy'><li><FaTwitter /></li></Link> 
          <Link to='https://www.facebook.com/kairaaacademy'><li><FaFacebookSquare /></li></Link>  
          </ul>
        </div>
        
        <div className='md:w-1/5 w-full pt-8'>
          <h4 className='font-headingFont md:text-2xl font-bold'>Quick links</h4>
          <ul className='text-xl font-paraFont p-4 '>
         <Link to="/about-kairaa-blockchain-academy">   <li className='md:p-4 p-2 font-medium'>About Us</li></Link>
           <Link to='/resources'> <li className='md:p-4 p-2 font-medium'>Blog</li></Link>
            <Link to="/payment-terms-condition"><li className='md:p-4 p-2 font-medium'>Payments Terms & Conditions</li></Link>
          </ul>
        </div>


        <div className='md:w-2/6'>
          <h4 className='font-headingFont md:text-2xl font-bold'>Contact</h4>
          <div className='flex items-center gap-2'>
            <IoCallSharp   className='md:text-3xl '/>
            <p className='py-4 font-medium font-paraFont '><a href='tel:+91 7092774077'>+91 7092774077</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoMailSharp  className='md:text-3xl' />
            <p className='py-4 font-medium font-paraFont '><a href='mailto:support@kairaaacademy.com'>support@kairaaacademy.com</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoLocationSharp  className='md:text-5xl'/>
            <p className='py-4 font-medium font-paraFont '>131, 2nd floor, DB Road, RS Puram,Coimbatore - 641002</p>
          </div>

        </div>
      </div>
      <p className='text-right p-4 font-paraFont text-xl'>Copyright @ 2024 Kairaa Blockchain Academy</p>
    </div>
  )
}

export default Footer
