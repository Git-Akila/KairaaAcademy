import React from 'react';




const CourseContent = ({e,e1}) => {


    

  return (

   
    <div >
  

    <h2 className='text-2xl font-bold underline py-2 '>{e.mainheading}</h2>
    <ul className='list-disc p-2 leading-7 '>
      {e.description.map((e1)=>{

      return<>
           <li className='leading-16'>{e1}</li></>
      })}
     
    </ul>
    <img className='p-2 shadow-2xl mb-2 py-2 ' src={e.image} alt=""/>
    <h2 className='py-3 mb-2 text-xl font-bold'>{e.heading}</h2>
    <ul className='list-disc p-2 leading-7'>
      {e.list.map((e2)=>{
        return(
          <>
          <li>{e2}</li>
          </>
        )
      })}
    </ul>
    <div>
      <h2 className='text-xl font-bold py-2 mb-2'>{e.heading1}</h2>
      <ul className='list-disc'>
        {e.list1.map((e3)=>{
          return<>
          <li>{e3}</li></>
        })}
      </ul>
    </div>
    </div>
  )
}

export default CourseContent;