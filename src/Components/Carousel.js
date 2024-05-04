import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Webdev from "../carouselimages/webdev.jpeg"
import C from "../carouselimages/c.jpeg";
import Flutter from "../carouselimages/flutter.jpeg";
import Blockchain from "../carouselimages/blockchain.jpeg";
import Java from "../carouselimages/java.jpeg";
import Cpp from "../carouselimages/c++.jpeg"


export default function Carousel() {
    const sliderContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const [cards, setCards] = useState([]);
    const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    let elementsToShow = 3;
    const courses = [
        {
            id: 1,
            img: Java,
            course: "Advanced Java Training"
        },
        {
            id: 2,
            img: Cpp,
            course: "Programming with C++"
        },
        {
            id: 3,
            img: Blockchain,
            course: "Fundamentals of Blockchain"
        },
        {
            id: 4,
            img: C,
            course: "Programming with C"
        },
        {
            id: 5,
            img: Flutter,
            course: "Flutter"
        },
        {
            id: 6,
            img: Webdev,
            course: "Web Development"
        },

    ]

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        const slider = sliderRef.current;


        if (sliderContainer) {
            const width = sliderContainer.clientWidth;
            setSliderContainerWidth(width);
            setCardWidth(width / elementsToShow);
        }

        if (sliderContainer && slider) {
            const cards = Array.from(sliderContainer.getElementsByTagName('li'));
            setCards(cards);

            const cardWidth = sliderContainerWidth / elementsToShow;
            slider.style.width = `${cards.length * cardWidth}px`;

            for (let i = 0; i < cards.length; i++) {
                const element = cards[i];
                element.style.width = `${cardWidth}px`;
            }
        }
    }, [sliderContainerWidth]);

    const prev = () => {
        const slider = sliderRef.current;
        const cardWidth = sliderContainerWidth / elementsToShow;
        if (slider) {
            const currentMarginLeft = parseInt(slider.style.marginLeft.slice(0, -2)) || 0;
            const newMarginLeft = Math.min(currentMarginLeft + cardWidth, 0);
            slider.style.marginLeft = `${newMarginLeft}px`;
        }
    };

    const next = () => {
        const slider = sliderRef.current;
        const cardWidth = sliderContainerWidth / elementsToShow;
        const maxMarginLeft = -cardWidth * (cards.length - elementsToShow);
        if (slider) {
            const currentMarginLeft = parseInt(slider.style.marginLeft.slice(0, -2)) || 0;
            const newMarginLeft = Math.max(currentMarginLeft - cardWidth, maxMarginLeft);
            slider.style.marginLeft = `${newMarginLeft}px`;
        }
    };


    return (
        <>
            <div className='my-8 hidden flex-col md:block '>

                <h2 className='md:text-4xl font-headingFont text-xl font-bold text-center pt-8'>Explore our learning Programs</h2>

                <div className="flex m-8">
                    <div className="w-0.5/12 flex items-center">
                        <div className="w-full text-right">
                            <button className="mr-5" onClick={prev}>
                                <IoIosArrowBack style={{ fontSize: '50px', color: '#fc466b' }} />
                            </button>
                        </div>
                    </div>
                    <div className="w-11/12 overflow-x-auto scrollbar-hidden" id="sliderContainer" ref={sliderContainerRef}>
                        <ul id="slider" className="flex w-full transition-margin duration-700" ref={sliderRef}>
                            {courses.map((dt) => {
                                return (
                                    <li key={dt.id} className="  p-4  ">
                                        <div className='shadow-md rounded-lg p-5 h-full bg-[#F6F5F5]'>
                                            <img src={dt.img} className='h-200 w-full object-cover rounded-md' />
                                            <h2 className="md:text-2xl text-lg p-4 mt-4 font-semibold font-paraFont">{dt.course}</h2>
                                            <button className='mt-4 text-2xl p-4 py-2 rounded-md underline text-[#1c2a59] font-paraFont font-bold'>Read More</button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-0.5s/12 flex items-center  ">
                        <div className="w-full ">
                            <button className="ml-5 " onClick={next}>
                                <IoIosArrowForward style={{ fontSize: '50px', color: '#fc466b' }} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* <button className='animate-slidein700 opacity-0 text-white w-fit px-6 py-3 my-2 text-2xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer m-auto'>Explore More</button> */}



            </div>
            <div className='flex flex-col gap-4 md:hidden p-8'>
            <h2 className='md:text-4xl font-headingFont text-xl font-bold text-center pt-8'>Explore our learning Programs</h2>
                {
                    courses.map((course) => {
                        return (
                            <div key={course.id} className='w-full  p-4 bg-gray-50 flex flex-col gap-2 rounded-lg'>
                                <img src={course.img} className='rounded-md'/>
                                <h2  className="text-2xl  mt-4 font-semibold font-paraFont text-center">{course.course}</h2>
                                <button className='mt-4 text-xl p-4  rounded-md underline text-[#1c2a59] font-paraFont font-bold'>Read More</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
