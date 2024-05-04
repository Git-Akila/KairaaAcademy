import * as React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';




function ViewCourseDetails1() {


    const [index1, setIndex] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const Tab = ({ label, isActive, onClick }) => {
        return (
            <button
                className={`px-4 py-2 mx-2 text-sm font-semibold focus:outline-none ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                    }`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    };

    const TabContent = ({ children }) => {
        return <div className="mt-4">{children}</div>;
    };

    const Tabs = ({ children }) => {

        return (
            <div>
                <div className="flex">
                    {children.map((child, index) => (
                        <Tab
                            key={index}
                            label={child.props.label}
                            isActive={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </div>
                <div>
                    {children.map((child, index) =>
                        index === activeTab ? <TabContent key={index}>{child.props.children}</TabContent> : null
                    )}
                </div>
            </div>
        );
    };
    //**************************************************************************************************** */   


    const cTop = [
        {
            id: 1,
            name: 'Day 1:Introduction to Blockchain',
            content: [
              'Overview of Blockchain Technology',
              'Historical Context and Evolution',
            ]
          },
          {
            id: 2,
            name: 'Day 2:Understanding Components, Types, and Comparisons',
            content: [
              'Components of Blockchain',
              'Types of Blockchains',
              'Blockchain vs. Traditional Database',
    
            ]
          },
          {
            id: 3,
            name: 'Day 3:Cryptography, Consensus, and Mining',
            content: [
              'Cryptography Basics',
              'Hash Functions'
    
            ]
          },
          {
            id: 4,
            name: 'Day 4:Decoding the Backbone of Blockchain',
            content: [
              'Consensus Mechanisms',
              'Mining in Blockchain',
              'Distributed Ledger Technology',
    
            ]
          },
          {
            id: 5,
            name: 'Day 5: Blockchain Architecture and Merkle Trees',
            content: [
              'Blockchain Network Architecture',
              'Transaction Lifecycle',
            ]
          },
          {
            id: 6,
            name: 'Day 6:Foundations of Blockchain',
            content: [
              'Blocks and Chains',
              'Merkle Trees',
            ]
          },
          {
            id: 7,
            name: 'Day 7: Decentralization, Security, and Cybersecurity',
            content: [
              'Decentralization and Trust',
              'Forks and Consensus Algorithms',
            ]
          },
          {
            id: 8,
            name: 'Day 8: Security Foundations in Blockchain',
            content: [
              'Network Security',
              'Cybersecurity Concepts in Blockchain',
            ]
          },
          {
            id: 9,
            name: 'Day 9: Blockchain Use Cases',
            content: [
              'Use Cases of Blockchain',
              'Industry Adoption and Trends',
            ]
          },
          {
            id: 10,
            name: 'Day 10: Navigating Challenges: Bitcoin Case Study',
            content: [
              'Challenges and Limitations',
              'Case Study: Bitcoin',
            ]
          },
          {
            id: 11,
            name: 'Day 11: Other Blockchain Platforms',
            content: [
              'Ethereum and Smart Contracts Overview'
            ]
          },
          {
            id: 12,
            name: 'Day 12:Exploring Enterprise Solutions: Hyperledger, Corda, and Ripple',
            content: [
              'Hyperledger Fabric and Corda',
              'Ripple and Interbank Transactions'
            ]
          },
          {
            id: 13,
            name: 'Day 13-16:Layer 1 & Layer 2 Blockchains',
            content: [
              'What is Layer1 Blockchain',
              'Understanding of Layer1 Blockchain',
              'Layer 1 Blockchain Architecture',
              'Examples of Layer1 Blockchain',
              'Case Studies of Layer1 Blockchain',
              'Layer2 Blockchain',
              'Understanding of Layer2 Blockchain Architecture',
              'Solana Blockchain (Layer 1)',
              'Binance Blockchain (Layer 2)',
              'Cosmos Blockchain (Layer 1) ',
              'Polygon Blockchain (Layer 2)',
    
            ]
          },
          {
            id: 14,
            name: 'Day 17: Real World Applications of Blockchain',
            content: [
              'Supply Chain and Healthcare',
              'Voting Systems and Governance',
              'Education',
              'Fintech',
    
            ]
          },
          {
            id: 15,
            name: 'Day 18: Decentralised Applications (DApps), Use Cases, and Cybersecurity',
            content: [
              'Challenges in Real-world Implementations',
              'Hashing Algorithms in Blockchain',
              'Decentralised Applications (DApps)',
              'Use Cases of Smart Contracts'
    
            ]
          },
          {
            id: 16,
            name: 'Day 19: Securing the Future: Smart Contracts and Blockchain Security.',
            content: [
              'Security Considerations',
              'Cybersecurity in Smart Contracts'
            ]
          },
          {
            id: 17,
            name: 'Day 20: Ethereum 2.0, Tokenization, and Mining',
            content: [
              'Ethereum 2.0 and Proof of Stake',
              'ERC Standards',
            ]
          },
          {
            id: 18,
            name: 'Day 20: Ethereum 2.0, Tokenization, and Mining',
            content: [
              'Ethereum 2.0 and Proof of Stake',
              'ERC Standards'
            ]
          },
          {
            id: 19,
            name: 'Day 21: Tokenization and Fundraising: ICOs and Mining Pools',
            content: [
              'Tokenisation',
              'ICOs and Mining Pools'
            ]
          },
          {
            id: 20,
            name: 'Day 22-23: Coins Vs Tokens ',
            content: [
              'What is Crypto coin ?',
              'What is a Token',
              'ERC 20 & ERC 721',
              'Creating our Token ',
              'Publishing our Token',
            ]
          },
          {
            id: 21,
            name: 'Day 24-25: Legal, Ethical, and Environmental Considerations',
            content: [
              'Legal Aspects of Blockchain',
              'Intellectual Property and Patents',
              'Ethical Considerations in Blockchain',
              'Environmental Concerns',
              'Social Impact of Blockchain',
              'Inclusion and Accessibility',
              'Data Privacy and GDPR',
            ]
          },
          {
            id: 22,
            name: 'Day 26-27:Mining',
            content: [
              'Introduction to Mining',
              'Why Mining?',
              'Who are Miners?',
              'Miners process',
              'Bitcoin Mining Process',
              'Ethereum Mining Process',
              'Solana ',
              'Polygon'
            ]
          },
          {
            id: 23,
            name: 'Day 24-25:ICO/IDO/IEO',
            content: [
              'ICO & its Process',
              'IDO, its importance and its process',
              'IEO and its process'
            ]
          },
          {
            id: 24,
            name: 'Day 30-32:Centralised Exchanges',
            content: [
              'Understanding about Centralised Exchanges',
              'Wallets',
              'Trading in Centralised Exchanges',
              'Architecture of Exchange'
    
            ]
          },
          {
            id: 25,
            name: 'Day 33-33:Decentralised Exchanges',
            content: [
              'Understanding Decentralised Exchanges',
              'Decentralised Wallets',
              'Architecture of Decentralised Exchanges'
            ]
          },
          {
            id: 26,
            name: 'Day 36:Public / Private and Hybrid Blockchain',
            content: [
              'Case Studies by understanding its Architecture and its usage'
            ]
          },
          {
            id: 27,
            name: 'Day 37: Project',
            content: [
              'Token Creation',
              'Publishing of tokens'
            ]
          },
          {
            id: 28,
            name: 'Day 38:Project  Presentation',
            content: [
              'Case Study : Blockchain in Healthcare',
              'Presentation, Architecture,working process and concepts '
            ]
          },
        {
            id: 29,
            name: 'Free online Quizzes',
            content: [
                'Quizz-1',
                'Quizz-2',
                'Quizz-3',
                'Quizz-4',
                'Quizz-5',
            ],
        },

    ]
    // **************************************************************************************************//

    const project = [
        {
            id: 1,
            para: 'Project',
            title: 'Hello, World! ',
            description: 'The very first project idea that you can implement is just to print a string “Hello, World!”. This is going to be a very simple smart contract that returns the string “Hello, World!”. Although it sounds like a very simple idea, if you’re a beginner this will teach you a lot of things.',
        },
        {
            id: 2,
            para: 'Project',
            title: 'Simple Storage',
            description: 'In this contract, you can take an integer variable and make sure that you are able to read this variable and also update its value. You can define two functions one for incrementing the value of the declared variable and the other for decrementing the value. ',
        },
        {
            id: 3,
            para: 'Project',
            title: 'Multi-Send',
            description: 'The next idea is to build a blockchain application that can send ethers to multiple ethereum addresses. Just like for sending an email you use the email address of another user, for sending ethers you use an ethereum address. So using this application users would be able to send ethers to a list of ethereum addresses.'
        },
    ]


    function ViewOrNot(i) {

        if (index1 === i) {
            setIndex(null);
            setActiveTab(activeTab)
        } else {
            setIndex(i);
            setActiveTab(activeTab)
        }
    }




    return (
        <> <div className='mx-auto py-5 px-10 mt-4 justify-center bg-blue-300'>
            <div className='w-1/2 '>
                <h2 className='fontstyle2 py-3'>Learn Fundemantals of Blockchain Development</h2>
                <p className='text-lg py-3 font-bold '>Learn about the fundamentals of blockchain development, relevant skills, and technical FAQ. </p>
        
                <Link to="/CourseRegistration"><button className="bg-white text-center text-lg p-2 py-3 rounded-md">Register Now</button></Link>
            </div>
        </div>
            {/* ************************************************************************************************************* */}
            <div className='mx-auto container'>
                <Tabs>
                    <div label="About" className='mx-auto section flex md:flex-row flex-col gap-10'>

                        <div className='md:w-1/2'>
                            <h2 className='text-2xl font-bold py-3'>About this course</h2>
                            <p className='text-lg'>Blockchain technology is frequently sought after for efficient database management. It aids in organizing and storing information in a format easily comprehensible to computers. Unlike traditional
                             databases, blockchain formats data digitally, assembling it into clusters or blocks.     </p>
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='text-2xl font-bold py-3'>Skills you'll gain</h2>
                            <p className='text-lg'>⍟ Understanding Blockchain of Fundemantal concepts</p>
                            <p className='text-lg'>⍟  Learn essential skills.</p>
                            <p className='text-lg'>⍟ Familiarize yourself with the blockchain development industry.</p>
                        </div>
                    </div>
                    {/* ****************************************************************************************************************/}
                    <div label="Syllabus" className='container mx-auto border-2 bordder-b-6 border-b-black border-gray-400'>
                        <div className=' px-3 py-3'>
                            <h1 className='text-3xl font-bold py-3'>Syllabus</h1>
                            <p className='text-lg font-medium'>15 lessons • 14 projects • 8 quizzes</p></div>

                        
                        <div className='container mx-auto border-2 border-gray-500'>
                            {cTop.map((ctop, i) => {
                                return (
                                    <>
                                        <div className='flex justify-between'><h1 className='text-xl font-bold py-3 ' key={ctop.id}>{ctop.name}</h1>
                                            <button className='mx-20 font-bold ' onClick={() => ViewOrNot(ctop.id)}>{index1 === ctop.id ? "⊝" : "⊕"}</button></div>

                                        {index1 === ctop.id && (<ul className=' list-disc px-20 leading-10 text-lg border-b-2 border-b-gray-300'>
                                            {ctop.content.map((e) => {
                                                return <li key={i + 100}>{e}</li>
                                            })}
                                        </ul>)}

                                    </>
                                )

                            })}
                        </div>
                    </div>
                    {/* ********************************************************************************************** */}
                    <div label="Project" className='bg-blue-50 mt-8 rounded-2xl py-10'>
                        <h2 className='text-2xl font-bold p-3 text-center'>Project In This Course</h2>
                        <div className='grid md:grid-cols-3 gap-5 grid-cols-1 container mx-auto '>
                            {project.map((project, i) => {
                                return <div key={i.id} className='flex bg-[#fff]  flex-col border-2 border-gray-300 p-5'>
                                    <p className='text-lg text-center'>{project.para}</p>
                                    <h2 className='font-bold text-center py-3 text-xl'>{project.title}</h2>
                                    <p className='text-lg'>{project.description}</p>
                                </div>
                            })}

                        </div>
                    </div>
                </Tabs></div>

        </>
    )
}

export default ViewCourseDetails1