import React from 'react';
import {Link} from 'react-router-dom';
import TopBlock from '../../assets/topcourseBlockchain.jpg'
import { courses } from '../Top_courses/Data/BlockchainData';




function Blockchain() {
   
    
    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 '>
                <div className='bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-black font-bold mb-5 '>Courses Offered in Blockchain Development</h2>


                            {/* <div className='py-3'>
                                <button className='p-3 hover:bg-[#fff] text-black rounded-2xl text-lg bg-[#CADDFE]'>Get Started</button>
                            </div> */}</div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={TopBlock} alt="" />

                        </div>
                    </div>
                </div></div>
            {/* *************************************************************************** */}
            <div className='text-center py-5 '>
                <h2 className='text-4xl font-medium text-center'>Our Top Most Courses (Blockchain) </h2>
            </div>
            {courses.map((e) => (<div className='container mx-auto py-4 '>
                <div className='flex gap-5 flex-col md:flex-row border-b-2 border-gray-400'>
                    <div className='md:w-1/2'>
                        <img src={e.image} alt="" />
                        <div className='bg-blue-100 text-center'>
                            <p className='text-2xl font-medium'>{e.title} </p>
                            

                        </div>


                    </div>
                    <div className='md:w-1/2 py-3 text-lg'>
                        <p>{e.paragraph1}
                        </p>
                        {/* <p>{e.paragraph2}</p> */}
                        <div className='text-center py-3'>
                           <Link key={e.id} to={`/course/${e.id}`}> <button className='bg-blue-300 rounded mt-10 p-2'>View Course Details</button></Link></div>
                    </div>
                </div>

            </div>))}

        </>
    )
}

export default Blockchain;