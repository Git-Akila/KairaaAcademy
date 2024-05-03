import React from 'react';
import courses from "../../src/data.js";
import { useParams } from "react-router-dom";

const CourseSyllabus = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  console.log(course); 

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.name}</h1>
   
      <h2>Syllabus</h2>
      {/* <ul>
        {course.topics.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default CourseSyllabus;
