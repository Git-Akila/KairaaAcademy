import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { Selfpacedcourses } from './Top_courses/Data/Selfpacedcourses';
import Block from '../assets/selfpacedcourse1.jpg';
import Course1 from './Top_courses/Data/selfBlockchainDev/Course1';

function SelfBlockChainDev() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <>
            <div className='bg-blue-400 p-12 mt-2  rounded border-t-8 border-t-black'>

                <h2 className='text-4xl font-bold ml-5 '> Blockchain Development</h2>

            </div>

            <div className='md:mx-auto  container mt-3 flex md:flex-row flex-col p-3 justify-between'>
                <div><h2 className='text-xl'>Blockchain developer fundamental</h2>
                    <p className='text-gray-500 py-2'>Teacher<span className='text-lg font-bold ml-3 text-black'>Kairaa Blockchain Academy</span></p>
                </div>
                <div className=' px-2'>
                    <button className='rounded hover:bg-green-400 hover:text-black mr-4  text-green-600 text-2xl  font-bold p-1 w-[110px] border-2 border-black'>FREE</button>
                    <button className='bg-blue-200 text-lg hover:bg-blue-400 rounded p-2'>START NOW</button>
                </div> </div>
            <div className='p-5 container mx-auto'>
                <img className='' src={Block} alt="" />
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className='justify-center text-center' onChange={handleChange} aria-label="lab API tabs example">
                            <Tab sx={{ marginLeft: 20, }} label="Overview" value="1" />
                            <Tab sx={{ marginLeft: 20, }} label="Curriculum" value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='flex md:flex-row flex-col mx-auto container'>
                            <div className='w-3/4'>
                                <h2 className='text-2xl font-bold py-3 border-b-2 border-b-gray-300'>Skill level: Beginner</h2>
                                <h2 className='font-bold text-2xl py-3 '>About Blockchain Development Fundamental </h2>
                                <p className='text-lg py-3'>The objective of this course is to provide novice candidates with a clear understanding of blockchain technology. By the end of the course, participants should be able to explain what blockchain is, how it works, and its potential applications. They will also gain insights into the
                                    impact of blockchain on various industries and its role in the future of technology.</p>
                                <h2 className='text-2xl font-bold py-3'>Who Should Enroll?</h2>
                                <ul className='list-disc text-lg leading-7'>
                                    <li>This course is designed for individuals with little to no prior knowledge of blockchain technology.</li>
                                    <li>It is suitable for: Students and professionals from various backgrounds interested in understanding blockchain.</li>
                                    <li>Business professionals looking to explore how blockchain can benefit their industry. </li>                  <li>
                                        Entrepreneurs and innovators seeking inspiration for blockchain-based projects.</li>
                                    <li>
                                        Anyone curious about the fundamental concepts of blockchain technology.</li>
                                </ul></div>


                            <div className=' bg-blue-50  border-2 border-gray-100 md:mt-20 mt-5 p-5 text-lg'>
                                <h2 className='text-xl font-bold'>Course Feature</h2>
                                <p className='py-2 border-b-2 border-b-gray-400'>📝Lessons-17</p>
                                <p className='py-2 border-b-2 border-b-gray-400'>🎖Quizzes-8</p>
                                <p className='py-2 border-b-2 border-b-gray-400'>🕜Duration-Lifetime</p>
                                <p className='py-2 border-b-2 border-b-gray-400'>⤴️Skill Level-Beginner</p>
                                <p className='py-2 border-b-2 border-b-gray-400'>🏅Certificate-Yes</p>
                                <p className='py-2 border-b-2 border-b-gray-400'>🗒 Assessments-Yes</p></div>


                        </div>

                        <div className='mx-auto container'>
                            <h2 className='text-2xl font-bold py-4'>Learning Outcomes</h2>
                            <ul className='list-disc text-lg py-2'>
                                <li>Understand the fundamental concepts and principles of blockchain technology.</li>
                                <li>Analyze and make informed decisions about blockchain technology.</li>
                            </ul>
                            <h2 className='text-2xl font-bold py-3'>Prerequisites</h2>
                            <ul className='list-disc text-lg py-3'>                              <li>Certified Ethereum Developer Course – Instructor-led or Self-paced</li>
                                <li>Hardware Requirements: Participants should have access to at least three virtual machines or systems, each equipped with an Intel i5
                                    or equivalent, 4 GB RAM, and an 80 GB SSD.</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                            <Course1/>
                        
                    </TabPanel>

                </TabContext>
            </Box>
        </>
    )
}

export default SelfBlockChainDev;




