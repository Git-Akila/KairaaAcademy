import React from 'react'
import TopBlock from '../../assets/topcourseBlockchain.jpg'
import image1 from '../../assets/blocktechnology.webp';
import image2 from '../../assets/cryptographyTech.png';
import image3 from '../../assets/cryptocurrencies-and-blockchainTech.jpg'
import image4 from '../../assets/bitcoinTech.webp';
import image5 from '../../assets/cryptocurrencyTech.jpg'
import { Link } from 'react-router-dom';


function Blockchain() {
    const data2 = [
        {
            id: 1,
            image: image1,
            title: "Blockchain Fundamentals",
            para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
            paragraph1: "Blockchain Fundamentals utilizes a hybrid learning approach to help you build and demonstrate an understanding of blockchain concepts, usage and considerations. Learn how to leverage yourin-demand knowledge and ability in blockchain to elevate your IT career.",
            paragraph2: "Beyond matters of trust, blockchain delivers even more business benefits, including the cost savings from increased speed, efficiency and automation. By greatly reducing paperwork and errors, blockchain significantly reduces overhead and transaction costs, and reduces or eliminates the need for third parties or middlemen to verify transactions.",
        },
        {
            id: 2,
            image: image2,
            title: "Cryptocurrency Expert",
            para: "Ratting: 4.5 ★ (7,508 reviews)|95%",
            paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
            paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
        },
        {
            id: 3,
            image: image3,
            title: "Navigating Cryptocurrencies And Blockchain for global Impact",
            para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
            paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
            paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
        },
        {
            id: 4,
            image: image4,
            title: "Bitcoin cryptocurrency",
            para: "Ratting: 4.2 ★ (7,508 reviews)|95%",
            paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
            paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
        },
        {
            id: 5,
            image: image5,
            title: "Cryptocurrency Beginner Guide",
            para: "Ratting: 4.4 ★ (7,508 reviews)|95%",
            paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
            paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
        },


    ]

    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 '>
                <div className='backg3 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-white font-bold mb-5 '>Courses Offered in Blockchain Development</h2>


                            </div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={TopBlock} alt="" />

                        </div>
                    </div>
                </div></div>
            {/* *************************************************************************** */}
            <div className='text-center py-5 '>
                <h2 className='text-4xl font-medium text-center'>Our Top Most Courses (Blockchain) </h2>
            </div>
            {data2.map((e) => (<div className='container mx-auto py-4 '>
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
                       
                        <div className='text-center py-3'>
       
                          <Link to='/course/blockchain/blockchain-fundamentals'>  <button className='bg-blue-300 rounded mt-10 p-2'>View Course Details</button></Link></div>
                    </div>
                </div>

            </div>))}

        </>
    )
}

export default Blockchain;