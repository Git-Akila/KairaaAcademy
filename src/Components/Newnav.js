import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// child components
import { menuItems } from '../menuItems';
import MenuItem from "./MenuItem";
// icons
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
// logo
import Logo from "../carouselimages/logo.webp"



const Newnav = () => {

  const [nav, setNav] = useState(false);

  return (
    <>
    <div className='md:flex justify-evenly h-24  md:items-center border-b-2 text-lg font-medium py-4 hidden '>
        <div>
          <img src={Logo} className='h-[130px] p-4' />
        </div>
        <div>
          <p>9:00 AM - 5:30 PM IST</p>
        </div>
        <div>
          <div className='flex gap-4'>
            <IoCall />
            <p>+91 7092774077</p>
          </div>
          <div className='flex gap-4'>
            <MdEmail />
            <p>support@kairaaacademy.com</p>
          </div>


        </div>
        <div>
        <Link to='/contact'>  <button className='  text-white w-fit md:px-6 md:pt-3 p-2 my-2 md:text-xl font-bold text-lg rounded-md  bg-blue-500 cursor-pointer'>Contact Us</button></Link>
        </div>
      </div>
    <nav className='desktop-nav'>

      
      <ul className='menus md:flex justify-around hidden  px-4 cursor-pointer md:h-16 md:items-center border border-b-2 font-bold text-lg text-[#1c2a59] '>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem items={menu} key={index} level={depthLevel} />
        })}
      </ul>
      <div className='flex justify-between md:hidden'>
        <div>
          <img src={Logo} className='h-[100px]' />
        </div>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer p-8 z-50 text-blue-600 '>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white font-bold text-blue-500  z-30 ' onClick={() => setNav(!nav)}>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItem items={menu} key={index} level={depthLevel} />
          })}
        </ul>
      )}
    </nav>
    </>
  )
}

export default Newnav
