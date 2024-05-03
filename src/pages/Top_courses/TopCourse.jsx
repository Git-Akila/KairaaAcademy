import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import Blockchain from './Blockchain';
import OtherCourse from "./OtherCourses";
// import TopBlock from '../../assets/ONLINE COURSE.png'
import image1 from '../../assets/C courses.png';
import image2 from '../../assets/cryptographyTech.png';
import image3 from '../../assets/cryptocurrencies-and-blockchainTech.jpg'
import image4 from '../../assets/bitcoinTech.webp';
import image5 from '../../assets/cryptocurrencyTech.jpg';
// import TopBlock from '../../assets/topcourseBlockchain.jpg'
import image6 from '../../assets/blocktechnology.webp';
import image7 from '../../assets/cryptographyTech.png';
import image8 from '../../assets/cryptocurrencies-and-blockchainTech.jpg'
import image9 from '../../assets/bitcoinTech.webp';
import image10 from '../../assets/cryptocurrencyTech.jpg'

const TopCourse = () => {
  // const [tab, setTab]=useState()

  const data1 = {
    sub: [
      {
        id: 1,
        image: image1,
        title: "C Programming Online Course",
        para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
        paragraph1: "Blockchain Fundamentals utilizes a hybrid learning approach to help you build and demonstrate an understanding of blockchain concepts, usage and considerations. Learn how to leverage yourin-demand knowledge and ability in blockchain to elevate your IT career.",
        paragraph2: "Beyond matters of trust, blockchain delivers even more business benefits, including the cost savings from increased speed, efficiency and automation. By greatly reducing paperwork and errors, blockchain significantly reduces overhead and transaction costs, and reduces or eliminates the need for third parties or middlemen to verify transactions.",
      },
      {
        id: 2,
        image: image2,
        title: "CPP Online Course",
        para: "Ratting: 4.5 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 3,
        image: image3,
        title: "Advanced Java Programming",
        para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 4,
        image: image4,
        title: "PHP Online Course",
        para: "Ratting: 4.2 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 5,
        image: image5,
        title: "Cryptocurrency Beginner Guide",
        para: "Ratting: 4.4 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },


    ]
  }

  const data2={
    sub: [
      {
        id: 1,
        image: image6,
        title: "Blockchain Fundamentals",
        para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
        paragraph1: "Blockchain Fundamentals utilizes a hybrid learning approach to help you build and demonstrate an understanding of blockchain concepts, usage and considerations. Learn how to leverage yourin-demand knowledge and ability in blockchain to elevate your IT career.",
        paragraph2: "Beyond matters of trust, blockchain delivers even more business benefits, including the cost savings from increased speed, efficiency and automation. By greatly reducing paperwork and errors, blockchain significantly reduces overhead and transaction costs, and reduces or eliminates the need for third parties or middlemen to verify transactions.",
      },
      {
        id: 2,
        image: image7,
        title: "Cryptocurrency Expert",
        para: "Ratting: 4.5 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 3,
        image: image8,
        title: "Navigating Cryptocurrencies And Blockchain for global Impact",
        para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 4,
        image: image9,
        title: "Bitcoin cryptocurrency",
        para: "Ratting: 4.2 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },
      {
        id: 5,
        image: image10,
        title: "Cryptocurrency Beginner Guide",
        para: "Ratting: 4.4 ★ (7,508 reviews)|95%",
        paragraph1: "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.",
        paragraph2: "Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information.",
      },


    ]
  }


  return (
     <nav>
      <NavLink to="/Blockchain">Blockchain Development</NavLink>
      <NavLink to="/OtherCourse">Other Courses</NavLink>
     </nav>


  );
};
export default TopCourse;