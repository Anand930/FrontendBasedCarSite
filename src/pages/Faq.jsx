import React from 'react'
import Navbar from '../components/Home/Navbar'
import CarHeroForFaq from '../components/Faq/CarHeroForFaq'
import Footer from '../components/Home/Footer'
import FaqCart from '../components/Faq/FaqCart'

const Faq = () => {
  return (
    <div>
      <Navbar />
      <CarHeroForFaq />
      <div className='w-4/5 mx-auto my-20 gap-8'>
        <FaqCart  question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} classNameForSr={"hidden"}/> 
        <FaqCart question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} classNameForSr={"hidden"}/>
        <FaqCart question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} classNameForSr={"hidden"}/>
        <FaqCart question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} classNameForSr={"hidden"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Faq