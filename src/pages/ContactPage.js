import React from 'react'

const ContactPage = () => {

    const contactDetails = [
        {
            id: 1,
            img: phone,
            heading: "Give us a call",
            info: "+91 7092774077",
        },
        {
            id: 2,
            img: email,
            heading: "Write to us",
            info: "support@kairaaacademy.com",
        },
        {
            id: 1,
            img: location,
            heading: "Visit us in Coimbatore @",
            info: "131, 2nd floor, DB Road, RS Puram, Tamilnadu, Coimbatore 641002",
        }
    ]

  return (
    <div className="flex justify-around md:mx-8 m-4 flex-col md:flex-row">

                {/* contact us ++++++ chennai office details */}
                <div className="flex flex-col justify-around items-center md:w-3/6 w-full p-4 m-4">
                    <h1 className="text-2xl font-bold text-[#0874DD] text-center">Contact Us</h1>
                    <p className="line-clamp-3 p-4 text-[#15265D] font-medium">Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.</p>
                  

                    <div className=" ">
                        {contactDetails && contactDetails.map((dt, i) => {
                            return (
                                <>
                                <div key={i} className="flex gap-4 p-4 ">
                                    <div>

                                        {/* <Image src={dt.img} className="w-10 h-10 md:h-13 md:w-13" /> */}
                                    </div>
                                    <div >
                                        <p className="text-slate-400 font-semibold">{dt.heading}</p>
                                        <p className="font-bold text-[#15265D]">{dt.info}</p>
                                    </div>

                                </div>
                                <hr/>
                                </>
                            )
                        })

                        }
                    </div>

                </div>
{/* form */}
                <div className=" md:mx-8 p-4  md:w-3/6 w-full ">
                    <div className="md:w-5/6 w-full p-8 shadow-lg rounded-lg items-center g-4 justify-center">
                        <h2 className="text-2xl font-bold ">Say <span className="text-[#0874DD]">Hello !</span></h2>
                        <p className="py-4">Feel free to stop by and say hi !</p>
                        <form className="flex flex-col">

                            <label>
                                Name
                            </label>
                            <input type="text" />

                            <label>
                                E-mail Id
                            </label>
                            <input type="email" />

                            <label>
                                Contact Number
                            </label>
                            <input type="tel" />

                            <label>
                                Message
                            </label>
                            <textarea rows="4" cols="40" className="border border-blue-200 w-[300px]"></textarea>
                            <button className="rounded-xl bg-[#FF8C19] text-white font-bold w-fit m-auto my-4 px-3 py-2">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
  )
}

export default ContactPage
