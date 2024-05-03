import React from 'react'
import Image from "../carouselimages/web_infographics.png"
import { GrSend } from "react-icons/gr";


const Getstarted = () => {
  return (
    <div style={{
      backgroundImage: `url(${Image})`, backgroundSize: 'cover',
      width: '100%',
      
    }} className='flex  justify-center items-center md:mt-36 md:flex-row flex-col md:text-4xl text-xl'>
<div className='w-1/2 text-center flex flex-col md:gap-24 gap-8 my-24 items-center justify-center'>
<h3 className='  font-headingFont '>BROUCHER</h3>
<a href='/Kairaa_Blockchain-Developer.pdf' download>
<button  className='text-white  w-fit px-6 py-3  md:text-2xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Download Broucher</button>

  </a></div>
      
      <div className=" md:mx-8 p-4  md:w-3/6 w-full ">
                    <div className="md:w-5/6 w-full md:p-8 shadow-lg text-xl rounded-lg items-center g-4 justify-center bg-blue-800 font-paraFont ">
                      <h3 className='text-3xl font-headingFont py-4 text-center text-white '>Get In Touch</h3>
                        <form className="flex flex-col items-center">

                           
                            <input type="text" placeholder='Your Name' className='p-2 bg-transparent outline-none border-b-2  text-white focus:outline-none'/>

                            
                            <input type="email" placeholder='Your Email Address' className='p-2 bg-transparent outline-none  border-b-2  text-white focus:outline-none'/>

                       
                            <input type="tel" placeholder='Your Contact Number' className='p-2 bg-transparent outline-none  border-b-2  text-white focus:outline-none'/>

                           
                            <textarea rows="4" cols="80" className="  md:w-[400px] w-[300px] p-2 bg-transparent border-b-2 mt-8 text-white focus:outline-none" placeholder='Your Message'></textarea>
                            <button className="rounded-xl bg-white flex gap-2 text-blue-600 font-bold w-fit m-auto my-4 pt-2 px-3"><span><GrSend /></span>Submit</button>
                        </form>

                    </div>
                </div>

    </div>
  )
}

export default Getstarted
