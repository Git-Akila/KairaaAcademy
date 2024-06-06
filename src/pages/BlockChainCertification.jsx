import React from 'react'
import Certificate from '../assets/online-certification.avif';
import Herocertificate1 from '../assets/sideimageforcertificate.png'
import {  Link } from 'react-router-dom';

function BlockChainCertification() {
   
    return (
        <>
            <div className='md:px-12 p-2 max-w-screen-2xl mx-auto mt-10 '>
                <div className='bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={Certificate} alt="" />

                        </div>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-black font-bold mb-5 '>Certification of Blockchain Development</h2>
                        </div>


                    </div>
                </div></div>
            {/* ****************************************************************************************** */}
            

            <div className='px-20 container py-3'>
                <h2 className='md:text-xl xs:lg font-bold py-3'>ABOUT THE PROGRAM</h2>
                <p className='text-lg'>Certification of Blockchain Development Program offers the blockchain developers an exciting opportunity to work with the Research & Development Engineers and Scientists of Kairaa Blockchain Academy on its live Blockchain projects.
                    The program will help the Blockchain Developers to apply their theoretical and practical knowledge and
                    gain real project exposure to all facets of Blockchain development activities.</p>
            </div>

            {/* ***************************************************************************************** */}
            <div className='px-20 container py-2'>
                <h2 className='md:text-xl xs:lg font-bold py-3'>WHO IS IT FOR ?</h2>
                <p className='text-lg'>Certification of Blockchain Devlopment Program is open to candidates who’ve completed the Blockchain Development Online Courses(instructor-led/Self-paced) from Kairaa Blockchain Academy. The certification of Blockchain program will offer a platform for certified blockchain developers to apply their gained subject knowledge in making important decisions concerning the blockchain project they are working on.</p>
            </div>
            {/* **************************************************************************************** */}
            <div className='px-20 container py-2'>
                <h2 className='md:text-xl xs:lg font-bold py-3'>WHAT YOU WILL LEARN...</h2>
                <ul className='list-disc text-lg'>
                    <li>Conceptual view to frame high-level blockchain architecture.</li>
                    <li>Knowledge of designing blockchain-based solutions with best practices.</li>
                    <li>Knowledge of security considerations and risks for blockchain integration.</li>
                    <li>Understanding of integrating external services with blockchain architecture.</li>

                </ul>
            </div>
            {/* ********************************************************************************* */}
            <div className='px-20 container py-4'>
                <h2 className='md:text-xl xs:lg font-bold py-3'>DURATION, MODE OF DELIVERY</h2>
                <p className='text-lg'>After successfully finishing the Blockchain Development online courses, You will be awarded a certificate of completion. This certificate serves as tangible proof of Your dedication, commitment,
                    and newly acquired skills in the specific subject matter covered by the course. It signifies the culmination of their efforts in engaging with course materials,
                    completing assignments, and mastering the concepts presented.
                    The candidates will be assigned to a mentor throughout the duration.
                </p>
            </div>
            {/* ***************************************************************************** */}
            <div className='bg-blue-50 flex md:flex-row flex-col border-l-2 border-b-gray-300'>
                <div className='px-20 container py-10 mx-auto'>
                    <h2 className='md:text-xl xs:lg font-bold py-3' >CERTIFICATION</h2>
                    <p className='text-lg'>Upon completing the live project training, The students are to submit an internship report to the mentor.
                        The Blockchain Courses of certificate will be awarded based on the candidate’s performance during the internship.</p>
                    <div className='py-3'>
                        <Link to="/CourseRegistration"> <button className='p-3 hover:bg-[#fff] text-black rounded-2xl text-lg bg-[#CADDFE]'>Get Started</button></Link>
                    </div>
                </div>
                <div className='md:w-1/4 w-1/2  py-10 mx-auto'>
                    <img className='rounded-2xl' src={Herocertificate1} alt="" />
                </div>
            </div>
            {/* ******************************** ************************************************ */}
            <div className='text-center mx-auto py-3'>
                <h2 className='md:text-3xl xs:text-xl font-bold'>IF You Have Any Queries?</h2>
            </div>
            <div className=' px-10 py-10 bg-blue-100 '>
                <div className='flex md:flex-row flex-col gap-5 justify-center  rounded'>
                    <div className='border-r-4 text-center justify-center border-black p-3'>
                        <h2 className='text-xl font-bold'>E-mail</h2>
                        
                        <p className='text-lg py-3'>Support@kairaaacademy.com</p>
                    </div>
                    <div className='border-r-4 text-center justify-center  border-black p-3'>
                        <h2 className='text-xl font-bold'>Location</h2>
                        <p className='text-lg py-3'>131, 2nd floor, DB Road, RS Puram,Coimbatore - 641002.</p>
                    </div>
                    <div className='text-center justify-center' >
                        <h2 className='text-xl text-center justify-center font-bold p-2'>Phone</h2>
                        <p className='text-lg py-3'>+91-7092774077</p>
                    </div>
                   
                   </div>

            </div>
        </>
    )
}

export default BlockChainCertification;