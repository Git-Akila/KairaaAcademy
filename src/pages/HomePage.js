import React from 'react'
import Faq from "../Components/Faq";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import Getstarted from "../Components/Getstarted"

const HomePage = () => {
  return (
    <>
       <Hero/>
      <Carousel/>
      <Getstarted/>
      <Faq/>
    </>
  )
}

export default HomePage
