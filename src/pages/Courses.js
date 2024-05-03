import React from 'react';
import courses from "../../src/data.js";
import { Link } from "react-router-dom"
import CourseSyllabus from './CourseSyllabus.js';
const Courses = () => {
  return (
    <div className='flex flex-wrap'>
      {courses.map((dt) => {
        return (
          <Link to={'/course/' + dt.id}><div className='w-[300px] h-[300px]'>
            <img className='w-[200px] h-[200px]' src={dt.img} />
            <h2>{dt.name}</h2>

          </div></Link>
        )
      })}

    </div>
  )
}

export default Courses
