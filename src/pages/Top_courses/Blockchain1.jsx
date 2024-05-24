import React from 'react';
import { Link } from 'react-router-dom';
import Blockchain from '../../assets/blockchainview.jpg'
import { FaLinkedin } from "react-icons/fa";
import Certificate from '../../assets/online-certification.avif'
import skill from '../../assets/skills.png'


import { PiNotePencilDuotone } from "react-icons/pi";

function InternshipProgram() {
    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 animate-fadeInUp'>
                <div className='bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-black font-bold mb-5 '>Internship Program</h2>


                            <div className='py-3'>
                                <Link to="/Courseregistration"><button className='p-3 bg-[#fff] text-black rounded-2xl text-lg shadow-2xl shadow-black animate-shake hover:bg-blue-300'>Get Started</button></Link>
                            </div> </div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={Blockchain} alt="" />

                        </div>
                    </div>
                </div></div>

            {/* ******************************************************** */}
            <div className='mx-auto container flex md:flex-row gap-6 py-3 flex-col justify-between '>
                <div className='md:w-1/2 animate-fadeInRight'>
                    <h2 className='text-3xl font-bold py-2'>About The Program</h2>
                    <p className='text-lg'>Kairaa Blockchain Academy is inviting applications for the Blockchain Development and Internship Program.This Internship
                        Program and It's Availability Both Online and Offline Mode.

                    </p>

                    <h2 className='text-2xl font-bold py-3'>Details to know</h2>
                    <div className='flex justify-between gap-5'>
                        <div className='gap-2'>
                            <p className='text-xl font-bold'><span><FaLinkedin size={25} /></span>Shareable certificate</p>
                            <p className='text-lg'>Add to your LinkedIn profile</p></div>

                        <div>
                            <p className='text-xl font-bold'><span><PiNotePencilDuotone size={25} /></span>Assessments</p>
                            <p className='text-lg'>20 quizzes</p>
                        </div>
                    </div>

                </div>


                <div className='md:w-1/2 animate-fadeInLeft'>
                    <div className=''>
                        <h2 className='text-3xl font-bold py-2'>Internship Online&Offline</h2>
                        <p className='text-lg'>Gain insight into a topic and learn the fundamentals.</p>
                    </div>



                    <p className='text-lg font-bold'>Beginner level</p>
                    <p className='text-lg font-bold'>Recommended experience</p>

                    <p className='text-lg font-bold'>1 to 3 months.</p>
                    <div className='border-t-2 border-t-gray-300'>
                        <p>Flexible schedule</p>
                        <p>Learn at your own pace</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold py-3'>Skills you'll gain</h2>
                        <ul className='flex gap-3'>
                            <li className='border-2 border-black p-2 rounded'>Blockchain</li>
                            <li className='border-2 border-black p-2 rounded'>Ethereum</li>
                            <li className='border-2 border-black p-2 rounded'>Cryptography</li>
                            <li className='border-2 border-black p-2 rounded'>Bitcoin</li>
                        </ul>

                    </div>
                </div>

            </div>
            {/* ************************************************************* */}
            <div className='container mx-auto py-10 flex md:flex-row flex-col animate-fadeInLeft'>
                <div className='md:w-1/2'>
                    <h2 className='text-2xl font-bold py-2'>Build your subject-matter expertise</h2>
                    <p className='text-lg py-2'>This course is part of the Blockchain Specialization
                        When you enroll in this course, you'll also be enrolled in this Specialization.</p>
                    <ul className='list-disc font-medium text-lg'>
                        <li >Learn new concepts from industry experts</li>
                        <li>Gain a foundational understanding of a subject or tool</li>
                        <li>Develop job-relevant skills with hands-on projects</li>
                        <li>Earn a shareable career certificate</li>
                    </ul>
                </div>
                <div className='md:w-1/2'>
                    <img src={skill} alt="" />
                </div>
            </div>
            {/* *********************************************************************** */}
            <div className='mx-auto container  py-3'>
                <h2 className='text-2xl font-bold py-2'>Who Is It For?</h2>
                <p className='text-lg'>The course is suitable for anyone interested in technology and have basic
                    knowledge of Javascript or HTML.</p>
            </div>
            {/* ***************************************************************** */}
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 '>
                <div className='border-[#CADDFE] border-2 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl  md:text-4xl text-2xl text-black font-bold mb-5 '>Earn a career certificate</h2>
                            <p className='text-lg'>Add this credential to your LinkedIn profile, resume, or CV Share it on social media and in your performance review</p>

                        </div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded' src={Certificate} alt="" />
                        </div>
                    </div>
                </div></div>
            {/* **************************************************** */}




        </>
    )
}

export default InternshipProgram;