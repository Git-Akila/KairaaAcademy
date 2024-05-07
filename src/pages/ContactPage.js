import React from 'react'
import { IoCallSharp, IoMail, IoLocationSharp } from "react-icons/io5";
import Image from "../../src/carouselimages/aipt-bg1.jpg"

const ContactPage = () => {

    const contactDetails = [
        {
            id: 1,
            icon: <IoCallSharp />,
            heading: "Give us a call",
            info: "+91 7092774077",
        },
        {
            id: 2,
            icon: <IoMail />,
            heading: "Write to us",
            info: "support@kairaaacademy.com",
        },
        {
            id: 1,
            icon: <IoLocationSharp />,
            heading: "Visit us in Coimbatore @",
            info: "131, 2nd floor, DB Road, RS Puram, Tamilnadu, Coimbatore 641002",
        }
    ]
    const branchDetails = [
        {
            id: 1,
            city: "Chennai",
            address: "20/14, Kalaivanar Street, Jafferkhanpet, Chennai - 600083"
        },
        {
            id: 2,
            city: "Salem",
            address: "Sairam complex, Veeranganur main road, Thalaivasal. Pincode - 636112"
        },
        {
            id: 3,
            city: "Tirunelveli",
            address: "No 12, Shanthi complex, Vasanth nagar, Pincode - 627005"
        },
        {
            id: 4,
            city: "Trichy",

            address: "No 76-O, Jothi complex, Thillai nagar, Pincode - 620018."
        }
    ];
    return (
        <>
            <div className="flex justify-around md:mx-8 m-4 flex-col md:flex-row">

                {/* contact us ++++++ chennai office details */}
                <div className="flex flex-col gap-8 items-center md:w-3/6 w-full p-4 m-4 h-full">
                    <h1 className="text-3xl font-bold text-[#0874DD] text-center">Contact Us</h1>
                    <p className="line-clamp-3 md:text-xl text-lg text-[#15265D] font-medium">Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.</p>


                    <div className="">
                        {contactDetails && contactDetails.map((dt, i) => {
                            return (
                                <>
                                    <div key={i} className="flex gap-4 p-4 ">
                                        <div >

                                            {dt.icon}
                                        </div>
                                        <div className='md:text-xl text-lg'>
                                            <p className="text-slate-400  font-semibold">{dt.heading}</p>
                                            <p className="font-bold  text-[#15265D]">{dt.info}</p>
                                        </div>

                                    </div>
                                    <hr />
                                </>
                            )
                        })

                        }
                    </div>

                </div>
                {/* form */}
                <div className=" md:mx-8 p-4  md:w-3/6 w-full ">
                    <div className="md:w-5/6 w-full p-8 shadow-lg rounded-lg items-center g-4 justify-center">
                        <h2 className="text-3xl font-bold ">Say <span className="text-[#0874DD]">Hello !</span></h2>
                        <p className="py-4 text-xl font-semibold">Feel free to stop by and say hi !</p>
                        <form className="flex flex-col text-lg ">

                            <label className=''>
                                Name
                            </label>
                            <input type="text" className='w-full border border-blue-200  px-6 rounded-md'  />

                            <label>
                                E-mail Id
                            </label>
                            <input type="email" className='w-full border border-blue-200  px-6 rounded-md' />

                            <label className=''>
                                Contact Number
                            </label>
                            <input type="tel" className='w-full border border-blue-200  px-6 rounded-md' />

                            <label>
                                Message
                            </label>
                            <textarea rows="4" cols="40" className="border border-blue-200 w-full"></textarea>
                         
                          <button className="text-white w-fit md:px-6 md:py-3 p-2 my-4 md:text-xl text-lg font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-10 hover:scale-110 duration-300">Submit</button>
                         
                        </form>

                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${Image})`, backgroundSize: 'cover',
                width: '100%',
                height: 'full'
            }} className=''>
                <div className="text-[#15265D] p-12">
                    <h2 className="text-2xl font-bold text-center ">OUR OFFICES AROUND<span className=" text-blue-500"> TAMIL NADU</span></h2>
                    <p className="md:text-xl text-lg font-medium line-clamp-3 p-4 text-center">Embark on an exciting journey with Kairaa Blockchain Academy, nestled in dynamic cities across Tamil Nadu!</p>

                    <div className="flex flex-col md:flex-row items-center justify-center  " >
                        {branchDetails.map((details, i) => {
                            return (

                                <div key={details.id} className="w-64 h-48 justify-center   p-4 m-4 flex flex-col rounded-lg text-center ">
                                    <h3 className="font-bold ">{details.city}</h3>
                                    <p className="font-medium">{details.address}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactPage
