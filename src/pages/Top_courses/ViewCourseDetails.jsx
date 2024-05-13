import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { courses1 } from '../Top_courses/Data/OthercoursesData';



function ViewCourseDetails() {

  const { id } = useParams();

  const course = courses1.find(course => course.id === parseInt(id));
  console.log(course)

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




  function ViewOrNot(i) {

    if (index1 === i) {
      setIndex(null);
      setActiveTab(activeTab)
    } else {
      setIndex(i);
      setActiveTab(activeTab)
    }
  }




  return (<>
      <div className='mx-auto py-5 px-10 mt-4 justify-center bg-blue-300'>
        <div className='w-3/4'>
          <h2 className='fontstyle2 py-3'>{course.name}</h2>
          <p className='text-lg py-3 font-bold '>{course.description} </p>

          <Link to="/CourseRegistration"><button className="bg-white text-center text-lg p-2  active:bg-blue-500 py-3 rounded-md">Register Now</button></Link>
        </div>
      </div>

      {/* ************************************************************************************************************* */}
      <div className='mx-auto container '>
        <Tabs>
          <div label="About" className='mx-auto section flex md:flex-row flex-col gap-10'>
            <div className='flex md:flex-row flex-col justify-between'>
              <div className='md:w-1/2'>
                <h2 className='text-2xl font-bold py-3'>{course.heading}</h2>
                <p className='text-lg'>{course.deshead}</p>


                <h2 className='text-2xl font-bold py-3'>{course.heading1}</h2>

                {course.desheading1.map((e) => { return (<p className='text-lg'>{e}</p>) })}</div>

              <div className='md:w-1/4 p-5 m-10 bg-gray-200 rounded'>
                {course.heroSec.map((e, i) => {
                  return <p className='py-3 border-b-2 border-b-gray-400' key={i}>{e.symbol}{e.content}</p>

                })}
              </div>
            </div>
          </div>
          {/* </div> */}


          {/* ************************************************************************************************** */}
          <div label="Syllabus" className='container mx-auto  border-2 border-gray-200 '>
            <div className=' px-3 py-3 border-2 border-gray-200'>
              <h1 className='text-3xl font-bold py-3'>{course.syllabusheading}</h1>
              <p className='text-lg font-medium'>{course.syllabus}</p></div>


            <div className='container mx-auto border-2 border-gray-300'>
              {course.topics.map((ctop, i) => {
                return (
                  <>
                    <div className='flex justify-between'><h1 className='text-xl m-2 font-bold py-3 ' key={ctop.id}>{ctop.name}</h1>
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
        </Tabs></div>


    </>

  )
}

export default ViewCourseDetails