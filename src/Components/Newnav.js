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
    <div className='md:flex justify-between h-24 mx-5 md:items-center  text-lg font-medium py-4 hidden '>
        <div>
         <Link to="/"> <img src={Logo} className='h-[130px] p-4' /></Link>
        </div>
        <div>
          <p>9:00 AM - 5:30 PM IST</p>
        </div>
     
          <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <IoCall size={20} />
            <p>+91 7092774077</p>
          </div>
          <div className='flex gap-4 items-center'>
            <MdEmail  size={20}/>
            support@kairaaacademy.com
          </div>


        </div>
        
        <div className='gap-4 flex text-[#fff] font-bold'>
          <button className='bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-2 rounded-xl hover:animate-wave'>Login</button>
          <button className='bg-gradient-to-r from-cyan-500 to-[#CB77F7] p-2 rounded-xl hover:animate-wave'>SignUp</button>

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
