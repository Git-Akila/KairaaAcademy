import React from 'react'
import ParticlesContainer from './ParticlesContainer'
import image from "../carouselimages/newBanner1.png"
import aboutImg from "../carouselimages/newblock.png"
import block1 from "../carouselimages/001-blockchain.png";
import block2 from "../carouselimages/002-blockchain-1.png";
import block3 from "../carouselimages/003-online-course.png"
import {motion} from "framer-motion";

// bg-gradient-to-tl from-[#874CCC] to-[#10439F] 
const Hero = () => {


  const info = [
    {
      id: 1,
      img:block1,
      heading: "Blockchain Courses That Drive You Forward",
      para: "Blockchain Technology is evolving fast— learn with us. Get the blockchain skills to achieve goals and stay competitive."
    },
    {

      id: 2,
      img:block2,
      heading: "Internship Opportunities in Blockchain",
      para: "Learn blockchain for free. Unlock the opportunities to work with blockchain research groups on live projects.",
    },
    {
      id: 3,
      img:block3,
      heading: "Blockchain Product Suites For Enterprises",
      para: "Explore Blockchain Solutions—for your business. Tap into the blockchain universe with our custom decentralised solutions."
    },
    {

      id: 4,
      img:block2,
      heading: "Internship Opportunities in Blockchain",
      para: "Learn blockchain for free. Unlock the opportunities to work with blockchain research groups on live projects.",
    },
  ]


  
  return (


    
    <>

      {/* banner image */}

 


      <div className="flex h-[40vh] md:h-[80vh] bg-[#F7F4FD] items-center justify-center" >

        <div className=' md:w-2/3 w-full px-8 text-center md:px-16 font-bold text-[#1C1678] leading-8 z-8 '>
          <h1 className="lg:text-4xl text-2xl font-headingFont md:p-4  md:m-4 m-2 leading-9">Discover Blockchain  Technology with
            <span className='px-3 text-blue-500'>Kairaa Blockchain Academy&#x27;s</span> Online Course.</h1>
          <p className=' font-medium  m-4 md:text-2xl text-xl font-paraFont'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled</p>
          <button className='  text-white w-fit md:px-6 md:py-3 p-2 my-2 md:text-xl text-lg rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-2'>Get Started</button>
        </div>
        <div className='w-1/2  z-10 hidden md:block'>
          <img className='w-[400px] h-[400px]' src={aboutImg} />
        </div>

        <div>

        </div>
        <ParticlesContainer className='' />

      </div>

      
      
      {/* 3 divs */}
      <motion.section
            variants={{
              hidden:{opacity:0},
              show:{
                opacity:1,
                transition:{
                  staggerChildren:0.25,
                }
              }
            }}
            initial="hidden"
            animate="show"
            
            >
      <div  className='items-center flex md:flex-row  flex-col gap-10 justify-center md:m-24 m-12'>
        {info.map((dt) => {
          return (
           
            <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}} className='border-2 border-blue-400 p-4 md:h-[90vh] md:w-[20vw] rounded-2xl '>
              <img src={dt.img} className='w-28 h-28'/>
              <h2 className='md:text-xl text-lg font-bold p-4  font-headingFont'>{dt.heading}</h2>
              <hr />
              <p className=' p-4 font-paraFont'>{dt.para}</p>
              <p className='md:text-lg text-sm font-bold p-4 font-paraFont'>Learn More</p>
            </motion.div>
           
          )
        })}

      </div>
      </motion.section>

{/* about */}
<div className='flex flex-col md:flex-row md:h-[90vh] justify-around items-center '>
<img className='md:h-[70vh] p-8' src={image}/>
  <div className='md:w-2/4 p-12 md:p-4'>
<h2 className='md:text-3xl text-xl font-bold p-6 font-headingFont'>Unlock the Power of Blockchain with Kairaa Blockchain Academy</h2>
<p className='text-xl font-paraFont'>Blockchain Empowerment Kairaa Blockchain Academy (KBA), is a pioneering institution under the Kairaa University of Digital Sciences, Innovation, and Technology. We strive to lead in blockchain education, development, research, and consultancy. KBA is an esteemed member and official training partner of Hyperledger, hosted by the Linux Foundation, the General Partner of R3 Consortium, an Associate Member of InterWork Alliance, a Content Partner of Blockchain Education Network, and a Knowledge Partner of IBF NET.</p>
  </div>


</div>
    </>
  )
}

export default Hero
