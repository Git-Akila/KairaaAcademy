
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../carouselimages/logo.webp"

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const menuItems = [
        {
            id: 1,
            link: "HOME",
            path: "/"
        },
        {
            id: 2,
            link: "COURSES",
            path: "",
            submenu: [
                {
                    id: 1,
                    link: "Self-Paced Courses",
                    path: "/course/selfpaced-course"
                },
                {
                    id: 2,
                    link: "Our Top Course",
                    child: [
                        {
                            id: 1,
                            link: "Blockchain Development ",
                            path: "/course/blockchain"
                        },
                        {
                            id: 2,
                            link: "Other Course",
                            path: "/course/othercourse"
                        }
                    ]
                },
                {
                    id: 3,
                    link: "Internship Programs",
                    path: "/course/internship-program"
                },
                {
                    id: 5,
                    link: "Certified Architect ",
                    path: "/course/blockchain"
                },

                {
                    id: 4,
                    link: "Bootcamp",
                    path: "/course/bootcamp"
                },

            ]
        },
        {
            id: 3,
            link: "ABOUT US",
            path: "/about-kairaa-blockchain-academy"
        },
        {
            id: 4,
            link: "RESOURCES",
            path: "/resources"
        },
        {
            id: 5,
            link: "GALLERY",
            path: "/gallery"
        },
        {
            id: 6,
            link: "CONTACT US",
            path: "/contact"
        },

    ];
    const [hoverHandle, setHover] = useState(false);
    return (
        <>

            <div className='flex flex-col font-paraFont'>
                <div className='md:flex justify-evenly h-24  items-center border-b-2 text-lg font-medium py-4 hidden '>
                    <div>
                        <img src={Logo} className='h-[130px] p-4' />
                    </div>
                    <div>
                        <p>9:00 AM - 5:30 PM IST</p>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <IoCall />
                            <p>+91 7092774077</p>
                        </div>
                        <div className='flex gap-4'>
                            <MdEmail />
                            <p>support@kairaaacademy.com</p>
                        </div>

                    </div>
                    <div>
                        <button className='  text-white w-fit md:px-6 md:pt-3 p-2 my-2 md:text-xl font-bold text-lg rounded-md  bg-blue-500 cursor-pointer'>Contact Us</button>
                    </div>
                </div>



                <div className='md:block hidden  border border-b-2'>
                <ul className="flex  text-[#1c2a59] p-4 gap-8 ">
                        {menuItems.map((e, i) => {


                            return (

                                <li key={i}
                                    className="px-4 cursor-pointer capitalize font-bold text-lg text-[#1c2a59] relative group  m-auto"
                                ><Link to={e.path}>{e.link}</Link>
                                    {e.submenu &&

                                    // e.submenu==="Our Top Course"

                                        <ul className='hidden absolute top-[100%] left-0 bg-white p-4 border z-50 group-hover:block w-72'>
                                            {e.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className='group'><Link to={subItem.path}>{subItem.link}</Link>



{subItem?.child &&
                                                    <ul onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                                         className='hidden group-hover:block top-[100%] left-0 bg-white p-4 border z-50  w-72'>
                                                            {hoverHandle && subItem?.child.map((item, subIndex) => (
                                                                <li key={subIndex}><Link to={item.path}>{item.link}</Link></li>
                                                            ))}</ul>
                                                           
                                                    }

                                               




                                                </li>
                                            ))}</ul>
                                    }










                                </li>


                            )
                        })}


                    </ul>


                </div>

                <div className='flex justify-between md:hidden'>
                    <div>
                        <img src={Logo} className='h-[100px]' />
                    </div>
                    <div
                        onClick={() => setNav(!nav)}
                        className='cursor-pointer p-8 z-10 text-blue-600 '>
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ' >
                        {menuItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className='px-4 cursor-pointer capitalize py-6 text-4xl'
                                >
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        to={item.path} smooth duration={800}>{item.link}</Link>
                                </li>
                            )
                        })}



                    </ul>

                )}
            </div>
        </>
    )
}

export default NavBar;