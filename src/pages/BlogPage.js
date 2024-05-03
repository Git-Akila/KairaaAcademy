import React from 'react'
import Image from "../carouselimages/blogsectionBanner.jpg"
import blog1 from "../carouselimages/blog1.jpeg";
import blog2 from "../carouselimages/blog2.jpeg";
import blog3 from "../carouselimages/blog3.jpeg"
const BlogPage = () => {

    const blogData = [
        {
            id: 1,
            img: blog1,
            heading: "App & Down: 5 Apps to Help You Meditate",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
        },
        {
            id: 2,
            img: blog2,
            heading: "5 Steps to Detox Your Mind",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
        },
        {
            id: 3,
            img: blog3,
            heading: "Eating Mindfully - Where Body & Soul Connect",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
        }
    ]


    return (
        <>
            <div style={{
                backgroundImage: `url(${Image})`,
                width: '100%',
                height: '250px'
            }}>
                <h1 className=''>Blogs</h1>
            </div>
          <div className='my-12'>
          <div>
                <h2 className='font-bold text-center mt-8 text-4xl font-headingFont'>Recent posts</h2>
            </div>
            <div className=''>
                {blogData.map((dt) => {
                    return (
                        <div className='border-2 flex w-4/6 h-64 m-auto  mt-24' key={dt.id}>
                            <div className=' w-2/5'><img src={dt.img} className='object-cover h-full w-full' /></div>
                            <div className='p-8 w-3/5'>
                                <h2 className='font-bold font-headingFont text-3xl my-2'>{dt.heading}</h2>
                                <p className='text-2xl line-clamp-3'>{dt.para}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

          </div>
        </>
    )
}

export default BlogPage
