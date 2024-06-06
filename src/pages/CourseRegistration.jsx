import React,{useState} from 'react'
import Registration from '../assets/registration.jpg';
import axios from 'axios';




function CourseRegistration() {
    const [inputs, setInputs] = useState({phone:"+91"});
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted",inputs);
    }
    function handleChange(e) {
       const name= e.target.name
       const value=e.target.value
        setInputs((previousState)=>{
            return {...previousState, [name]:value}

        })


    }

    function handleSubmit1(name,email,mobile,courses){
       
        const userData={
        name:name,
        email,
        mobile,
        courses
        }
        axios.post("http://192.168.1.112:5001/register",userData)
        .then((res)=>console.log(res.data))
        .catch(e=>console.log(e));
    }

    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 animate-rotateAndSlideIn'>
                <div className='bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-black font-bold mb-5 '>Course Registration</h2>

                            </div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={Registration} alt="" />

                        </div>
                    </div>
                </div></div>
            {/* *********************************************** ***********************************************/}

            <div className='container mx-auto px-10 py-10 text-center'>
                <h2 className='text-5xl font-medium'>Register Your Interest</h2>
                <p className='text-lg py-4 leading-7 '>Thank you for your interest in pursuing Blockchain Certification Programs from Kairaa Blockchain Academy. Please register your interest by filling out the following form and you will be notified through e-mail / call once we schedule a new batch for the
                    course you have selected.
                </p>
            </div>
            <div className='container md:ml-20 px-20 py-10 gap-5 justify-center align-middle'>
                <p className='text-xl font-medium'>Please register your interest by filling the following form.</p>
                <form className='py-3' onSubmit={handleSubmit}>
                    <lable className='text-lg py-2 font-medium'>Full Name <span className='text-red-600'>*</span></lable><br/>
                    <input className='lain w-full p-2 mb-5 px-3 py-3' type="text" name="name" required onChange={handleChange} /><br/>
                    <lable className='text-lg py-2 font-medium'>Email Address<span className='text-red-600'>*</span></lable><br/>
                    <input className='lain w-full p-2 mb-5 px-3 py-3' type="text" required name="email" onChange={handleChange}/><br/>
                    <lable className='text-lg py-2 font-medium'>Mobile No<span className='text-red-600'>*</span></lable><br/>
                    <input className='lain w-full p-2 mb-5 px-3 py-3' type="text" required name="phone" value={inputs.phone} onChange={handleChange}/><br/>
                    <lable className='text-lg py-2 font-medium'>Referred Course<span className='text-red-600'>*</span>
                    <select className='lain w-full p-2 mb-5 px-3 py-3' name="courses" onChange={handleChange} required>
                        <option>Select</option>
                        <option value="Blockchain1">Blockchain Developer Fundamental</option>
                        <option value="Crypto">Blockchain Developer Professional</option>
                        <option value="Navigate">Blockchain Developer Expert</option>
                        <option value="Bitcoin">A Complete Solidity for Smart Programming</option>
                       <option value="Cryptography">Certified Blockchain Trainer</option>
                       <option value="Other courses">Other Courses</option>
                    </select></lable><br/>
                    <div className='text-center'>
                    <button onClick={()=>handleSubmit1}  className='rounded px-12 hover:bg-blue-600  bg-blue-400 p-3 text-lg' type="submit" value="Submit Form">Submit</button>
                    </div>
                </form>

            </div>
           <div className='m-6 rounded-tl-xl md:flex-row flex-col  bg-[#CADDFE] flex justify-between p-5'>
                <p className='text-lg font-medium'>If you want to talk to our course coordinator or representative, 
                    please call us at :</p><button className='bg-white hover:bg-blue-500 p-2 rounded'>Click Me</button></div>
                    {/*  <div className='flex text-center justify-center'>
                    <span className=' px-3'><FaSquarePhone size={25} /></span> <h2 className='text-lg'>+91-7092774077</h2></div>
                      <div className='flex text-center justify-center'><span className=' px-3'><MdEmail  size={25} /></span>  <h2 className='text-lg'>Support@kairaaacademy.com</h2>
                    </div>
            </div> */}

        </>
    )
}

export default CourseRegistration;