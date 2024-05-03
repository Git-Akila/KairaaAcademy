import React from 'react'
import image1 from "../carouselimages/francis-xavier.jpeg";
import image2 from "../carouselimages/connect-madurai.jpeg";
import image3 from "../carouselimages/vels.jpeg";
import image4 from "../carouselimages/vels-university.jpeg";

const GalleryPage = () => {
    const gallery = [
        {
            id: 1,
            img: image1,
        },
        {
            id: 2,
            img: image2,
        },
        {
            id: 3,
            img: image3,
        },
        {
            id: 4,
            img: image4
        },
        {
            id: 5,
            img: image1,
        },
        {
            id: 6,
            img: image2,
        },
        {
            id: 7,
            img: image3,
        },
        {
            id: 8,
            img: image4
        },
        {
            id: 9,
            img: image1,
        },
        {
            id: 10,
            img: image2,
        },
        {
            id: 11,
            img: image3,
        },
        {
            id: 12,
            img: image4
        }
    ]
    return (
        <div className='gallery'>
            {gallery.map((item) => {
                return (
                    <div key={item.id} className=''>
<img src={item.img} style={{width:'100%'}}/>
<p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                )
            })}
        </div>
    )
}

export default GalleryPage
