import React, { useState } from "react";
import { Link } from "react-router-dom";

import { data1 } from "../../../Top_courses/Data/selfBlockchainDev/Quiz1Data";
import CourseContent from "../../../Top_courses/Data/selfBlockchainDev/CourseContent";
 import Quiz from './Quiz';


var respdata = data1;
console.log("respdata", respdata);

function Course1() {
 
  const [click, setClick] = useState([]);
  const [mydata, setData] = useState([]);

  const [showQuiz, setShowQuiz]=useState(false);
console.log(showQuiz);
const handleQuiz=()=>{
      setShowQuiz(true);
      console.log(setShowQuiz);
      setData(false);
      
  }

  const course=data1.find((e)=>e.id===1)
   console.log(course) 


  



  const handleClick = (id) => {
    
    const data12 = data1;
    const data11 = data12.find((data1) => data1.id === id[0].id);
   

    
    setData([data11]);

    // setClick(data11);
   
    respdata = [data11];
    console.log("AFter===>", respdata);
    
    setClick(' ');
   setShowQuiz(false);
  

    return (
      <>
       <div className="mx-auto container flex md:flex-row flex-col">
          <div className="md:w-3/4">
         
        {/* {course.id===1? <CourseContent   key={course.id} e={course} />:<>No Data</>} */}
        
          </div>
          <div className="md:w-1/4 w-full">
            <h2 className="">
              Lessons:19
              <span className=" ml-7 text-gray-500">
                Start Your First Step!
              </span>
            </h2>
            <ul className="cursor-pointer border-2 border-gray-400 p-2 leading-10 rounded mt-5">
              {mydata.map((e, i) => {
                <li key={i.id} className=" hover:text-blue-600">
                  {e.mainheading}
                </li>;
              })}
            </ul>
          </div>
        </div>

        
      </>
    );
  };

  return (
    <>  
      <div className="mx-auto container flex md:flex-row flex-col">
     
        <div className="md:w-3/4">
       
          {showQuiz && <Quiz/>} 

          { 
            <>
              {!showQuiz && respdata.map((e, i) => {
                return (
                  <div key={i.id}>
                    <h2 className="text-2xl font-bold underline py-2 ">
                      {e.mainheading}
                    </h2>
                    <ul className="list-disc p-2 leading-7 ">
                      {e.description.map((e1) => {
                        return (
                          <>
                            <li className="leading-16">{e1}</li>
                          </>
                        );
                      })}
                    </ul>
                    <img
                      className="p-2 shadow-2xl mb-2 py-2 "
                      src={e.image}
                      alt=""
                    />
                    <h2 className="py-3 mb-2 text-xl font-bold">{e.heading}</h2>
                    <ul className="list-disc p-2 leading-7">
                      {e.list.map((e2) => {
                        return (
                          <>
                            <li>{e2}</li>
                          </>
                        );
                      })}
                    </ul>
                    <div>
                      <h2 className="text-xl font-bold py-2 mb-2">
                        {e.heading1}
                      </h2>
                      <ul className="list-disc">
                        {e.list1.map((e3) => {
                          return (
                            <>
                              <li>{e3}</li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}{" "}
            </>
          }
        </div>
        <div className="md:w-1/4 w-full">
          <h2 className="">
            Lessons:19
            <span className=" ml-7 text-gray-500">Start Your First Step!</span>
          </h2>
          <ul className="cursor-pointer border-2 border-gray-400 p-2 leading-10 rounded mt-5">
            <li
              onClick={() => handleClick(data1.filter((e) => e.id === 2))}
              className=" hover:text-blue-600"
            >
              𓇻 Introduction
            </li>
            <li
              onClick={() => handleClick(data1.filter((e) => e.id === 3))}
              className=" hover:text-blue-600"
            >
              𓇻 What is Blockchain?
            </li>
            <li className=" hover:text-blue-600" onClick={()=>handleClick(data1.filter((e)=> e.id===4))}
            >𓇻 How blockchain works?</li>
            <li className=" hover:text-blue-600"
            onClick={()=>handleClick(data1.filter((e)=>e.id===5))}
            >𓇻 Blockchain Types</li>
            <li className=" hover:text-blue-600"
            onClick={()=>handleClick(data1.filter((e)=>e.id===6))}
            >𓇻 When to use Blockchain</li>

           
            <li className=" hover:text-blue-600" 
            onClick={handleQuiz}
            
            
            >𓇻 Assessment</li>
            <li className=" hover:text-blue-600"
            onClick={()=>handleClick(data1.filter((e)=>e.id===7))}
            >𓇻 Summary</li>
            <li></li>
          </ul>
        </div>
      </div>
      
    </>
  );
}

export default Course1;
