import React from 'react'
import ParticlesContainer from './ParticlesContainer'
import image from "../carouselimages/newBanner1.png"
import aboutImg from "../carouselimages/newblock.png"
import block1 from "../carouselimages/001-blockchain.png";
import block2 from "../carouselimages/002-blockchain-1.png";
import block3 from "../carouselimages/003-online-course.png"
import { Link} from 'react-router-dom';


const Hero = () => {
 
  


  const info = [
    {
      id: 1,
      img:block1,
      link:"/course/blockchain",
      heading: "Master Blockchain and Unlock Your Potential",
      para: "Blockchain is rapidly changing the game. Get the skills you need with us to achieve your goals and stay ahead of the curve."
    },
    {

      id: 2,
      img:block2,
      link:"/course/internship-program",
      heading: "Internship Opportunities in Blockchain",
      para: "Gain Blockchain Skills. Unlock the opportunities to work on live projects. Don't miss out on this opportunity!",
    },
    {
      id: 3,
      img:block3,
      link:"/course/othercourse",
      heading: "Learn in demand tech skills",
      para: "We provide online courses on popular programming languages such as Python, JavaScript, Java, and C++ etc."
    },
    {

      id: 4,
      img:block2,
      link:"/course/bootcamp",
      heading: "Blockchain Developer Bootcamp",
      para: "This intensive training program equips participants with skills and knowledge needed to become blockchain developer.",
    },
  ]


  
  return (


    
    <>

      {/* banner image */}

 


      <div className="flex h-[40vh] md:h-[80vh] bg-[#F7F4FD] items-center justify-center" >
      <ParticlesContainer className='z-0' />
        <div className=' md:w-2/3 w-full px-8 text-center md:px-16 font-bold text-[#1C1678] leading-8 z-10 '>
          <h1 className="md:text-4xl text-2xl font-headingFont md:p-4 md:m-4 m-2 leading-9">Discover Blockchain  Technology with
            <span className='px-3 text-blue-500'>Kairaa Blockchain Academy&#x27;s</span> Online Course.</h1>
          <p className=' font-medium  m-4 md:text-2xl text-xl font-paraFont'>Kairaa Blockchain Academy is a leading online platform specializing in blockchain education.</p>
<Link to='/course/blockchain'> <button className='  text-white w-fit md:px-6 md:py-3 p-2 my-2 md:text-xl text-lg rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-2'>Get Started</button></Link>
        </div>
        <div className='w-1/2  z-10 hidden md:block'>
          <img className='w-[400px] h-[400px]' src={aboutImg} />
        </div>

        <div>

        </div>
        

      </div>

      
      
      {/* 3 divs */}
    
      <div  className='items-center flex md:flex-row  flex-col gap-10 justify-center md:m-24 m-12' >
        {info.map((dt) => {
          return (
           
            <div  className='box border-2 border-blue-400 p-4 md:h-[90vh] md:w-[20vw] rounded-2xl '>
              <img src={dt.img} className='w-28 h-28'/>
              <h2 className='md:text-xl text-lg font-bold p-4  font-headingFont'>{dt.heading}</h2>
              <hr />
              <p className=' p-4 font-paraFont'>{dt.para}</p>
            <Link to={dt.link}>  <p className='md:text-lg text-sm font-bold p-4 font-paraFont'>Learn More</p></Link>
            </div>
           
          )
        })}

      </div>
    

{/* about */}
<div className='flex flex-col md:flex-row md:h-[90vh] justify-around items-center '>
<img className='md:h-[90vh] h-[70vh] p-8' src={image}/>
  <div className='md:w-2/4 p-12 md:p-4 flex flex-col gap-4 items-center justify-center'>
<h2 className='md:text-3xl text-xl font-bold p-6 font-headingFont'>Unlock the Power of Blockchain with Kairaa Blockchain Academy</h2>
<p className='text-xl font-paraFont'>Kairaa Blockchain Academy is a premier online learning platform designed to equip you with the knowledge and skills needed to thrive in the ever-evolving world of blockchain technology.</p>
<p className='text-xl font-paraFont font-semibold'>Empower yourself with the knowledge of blockchain technology. Start your journey with Kairaa Blockchain Academy today!</p>
<Link to='/course/blockchain'><button className='  text-white  w-fit md:px-6 md:py-3 px-2 py-1 my-2 md:text-xl text-lg rounded-md bg-gradient-to-r from-cyan-500 to-[#CB77F7] cursor-pointer z-2 '>Get Started Now</button></Link>
  </div>


</div>
    </>
  )
}

export default Hero
