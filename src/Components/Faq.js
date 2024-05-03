"use client"
import React, { useState } from "react";


export default function Faq() {

    const [faqs, setFaqs] = useState(-1);
    const faqData = [
        {
            id: 1,
            question: "What courses does Kairaa Blockchain Academy offer?",
            answer: "Kairaa Blockchain Academy offers a wide range of courses covering blockchain technology, cryptocurrency, smart contracts, decentralized finance (DeFi), and more. Our courses are designed to cater to beginners as well as experienced professionals in the blockchain industry.",
            isOpen: false
        },
        {
            id: 2,
            question: "Are the courses at Kairaa Blockchain Academy suitable for beginners?",
            answer: "Yes, our courses are structured to accommodate learners at all levels, including beginners. We provide comprehensive introductory material, hands-on projects, and expert guidance to ensure that beginners can grasp blockchain concepts effectively."
        },
        {
            id: 3,
            question: "Is financial aid available for Kairaa Blockchain Academy's courses?",
            answer: "Kairaa Blockchain Academy understands the importance of accessibility in education. We offer financial aid options, scholarships, and flexible payment plans to make our courses more accessible to deserving candidates. Contact us to learn more about our financial assistance programs."
        },
       
        {
            id: 4,
            question: "Do you offer any mentorship or career guidance programs?",
            answer: "Currently we have career raodmap which cater to different goals. Coming soon we will include both mentorship and career guidance along with Mock interviews and much more. So stay tuned!"
        },

    ];

    const toggleFaq = (i) => {
        setFaqs(i);
    }

    return (
        <>
            <div className="w-full  md:p-12 p-4 py-8 flex flex-col items-center justify-center md:my-36 my-12 md:text-xl text-lg">
                <div className="flex flex-col gap-4  md:mx-48  md:w-4/6 w-full ">
                    <h1 className="font-bold md:text-2xl text-lg text-center py-4 font-headingFont">Frequently Asked Questions</h1>
                    {faqData.map((e, i) => {
                        return (
                            <div key={i} className="border-b-gray-300 font-paraFont">
                                <div className={`flex justify-between gap-18 text-left border-2 border-[#230FBF]  p-4 cursor-pointer ${faqs===i ? "bg-blue-800 text-white" :"bg-white text-[#230FBF]" }`}   onClick={() => toggleFaq(i)}>
                                    <p className="font-bold ">{e.question}</p>
                                  
                                
                                </div>
                                <div className="  bg-[#EEF4FA]">
                                    {faqs === i && <p className=" p-4">{e.answer}</p>}
                                </div>
                                <hr />

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
