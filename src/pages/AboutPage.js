import React from 'react';
import {Link } from 'react-router-dom';
import Image from "../carouselimages/blockchainbanner.png"
import Mission from "../carouselimages/mission.webp";
import Vision from "../carouselimages/vision.webp"
import bigStar from "../carouselimages/element-01.png";
import star from "../carouselimages/element-02.png"
import backgroundImg from "../carouselimages/backgroundimg.png"






const AboutPage = () => {


  const info = [
    {
      id: 1,
      heading: "Language Inclusivity",
      para: "We offer courses in Tamil, breaking down language barriers and making tech education more accessible to a wider audience."
    }, {
      id: 2,
      heading: "Practical Learning Approach",
      para: "Our curriculum is designed with a practical approach, allowing students to learn by doing and gain hands-on experience."
    },
    {
      id: 3,
      heading: "Wide Range of Courses",
      para: "We offer a variety of courses on popular programming languages such as Python, JavaScript, Java, and C++, catering to all levels of expertise."
    },
    {
      id: 4,
      heading: "Experienced Instructors",
      para: "Our instructors are industry professionals with years of experience, providing students with insights into real-world applications of their learning."
    },
    {
      id: 5,
      heading: "Community Support",
      para: "We foster a supportive and collaborative learning environment, encouraging students to learn from each other and grow together."
    }
  ]
  return (
    <>
      {/* section1 */}
      <div className="flex gap-8 md:px-24 px:8 md:py-12 py-8 flex-col md:flex-row items-center bg-[#F7F4FD]">
        <div className="w-5/6"> <img src={Image} /></div>
        <div className="flex flex-col gap-4 w-5/6  text-md font-medium items-center text-2xl md:px-8 px-4 font-paraFont ">
          <h1 className=" font-bold md:text-3xl text-2xl text-center text-[#15265D] font-headingFont">Kairaa Blockchain Academy: Your Gateway to Blockchain Mastery</h1>

          <p className='text-xl'>Kairaa Blockchain Academy is a leading online educational institution offering a variety of courses and programs tailored to students all over the world. With its focus on flexibility and comprehensive support, Kairaa Academy has become a popular destination for students wishing to advance their academic goals or acquire new skills.</p>
          <p className='text-xl'>We guarantee to unlock the full potential of your skills, paving a path towards success.</p>


          <button className="text-white w-fit md:px-6 px-2 md:py-3 py-2 my-2 text-2xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">Explore Courses</button>
        </div>
      </div>

      {/* section2 */}
      <div className=" md:h-[80vh] my-12  p-4 font-paraFont md:text-2xl text-lg">

        <div className="flex md:w-3/5 w-full m-auto h-1/2 text-[#15265D] ">

          <div className="flex flex-col gap-4 md:p-8 p-4 ">
            <h2 className="font-bold  md:text-4xl text-xl font-headingFont">OUR <span className="text-[#1C4CE4]">VISION</span></h2>
            <p className="  text-xl">To be a leading force in shaping a blockchain-powered world through education and innovation.</p>
          </div>
          
       <div
       
       className="w-2/3"
       >
       <img src={Vision}  className=' md:w-60 md:h-60 '/>  
       </div>
        </div>

        <div className="flex md:flex-row  md:w-3/5 w-full m-auto h-1/2">
       
        <div className="w-2/3" >
       <img src={Mission}  className='md:h-56 md:w-56 '/>  
       </div>
          
          <div className="flex flex-col gap-4 md:p-8 p-4 w-2/3">
            <h2 className="font-bold  md:text-4xl text-xl text-end font-headingFont">OUR <span className="text-[#1C4CE4]">MISSION</span></h2>
            <p className="  text-xl text-end">To bridge the knowledge gap in blockchain technology by offering high-quality, industry-relevant education to a global audience.</p>
          </div>
        </div>


      </div>

      {/* section3 */}


      <div className="flex gap-8 md:px-24 px-8 md:py-12 py-8  md:flex-row items-center bg-[#F7F4FD]">
       
        <div className="flex flex-col gap-4 md:w-3/3 w-full text-md font-medium items-center md:text-xl text-lg md:px-8 font-paraFont text-center">
          <h1 className=" font-bold md:text-3xl text-xl text-center text-[#15265D] font-headingFont md:p-4">Learn in-demand tech skills <span className='font-bold text-blue-500'>தமிழில்</span></h1>

          <p > At Kairaa Blockchain Academy, we believe in the power of technology and the importance of making it accessible to everyone. We are proud to offer a range of courses on programming languages, all taught in Tamil.
          </p>
          <p>Our mission is to break down language barriers in tech education and empower our students to gain the skills they need to succeed in the rapidly evolving tech industry. We understand that learning in one’s native language can make complex concepts more digestible and enjoyable.
          </p>
          <p>Our curriculum includes courses on popular programming languages such as Python, JavaScript, Java, and C++, among others. Each course is designed with a practical approach, allowing students to learn by doing.
          </p>
          <p>Whether you are a beginner looking to start your coding journey or an experienced programmer aiming to enhance your skills, our courses cater to all levels of expertise.
          </p>
          <p>Join us at Kairaa Blockchain Academy and take the first step towards a promising career in technology, all in the comfort of your mother tongue, Tamil. Let’s code தமிழில்!</p>


          <Link to="/course/othercourse"><button className="text-white w-fit px-6 py-3 my-2 text-lg rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">Explore Courses</button></Link>
        </div>
      </div>

      {/* section 4 */}

      <div className="flex gap-8 md:px-24 md:py-12 px-8 flex-col md:flex-row items-center ">
        <div className="w-3/6"> <img src={backgroundImg} className='hover:rotate-45 '/></div>
        <div className="flex flex-col gap-4 md:w-5/6 w-full  text-md font-medium items-center md:text-2xl px-8 font-paraFont">
          <h1 className=" font-bold md:text-3xl text-2xl text-center text-[#15265D] font-headingFont">What sets Kairaa Blockchain Academy apart?</h1>

          <div>
            {info.map((e) => {
              return (
                <div className='flex gap-2 py-4'>
                  <img src={star} className='w-6 h-6' /> <p className='text-xl'><span className='text-blue-500 font-bold pr-2'>{e.heading} :</span>{e.para}</p>
                </div>
              )
            })}
          </div>

          <Link to="/course/blockchain"><button className="text-white w-fit px-6 py-3 my-2 text-xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Know More</button></Link>
        </div>
      </div>

      {/* section5 */}
    </>
  )
}

export default AboutPage
