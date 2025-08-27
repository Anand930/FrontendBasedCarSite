import React from 'react'
import Navbar from '../components/Home/Navbar'
import CarHeroForTerms from '../components/Terms/CarHeroForTerms'
import Footer from '../components/Home/Footer'
import FaqCart from '../components/Faq/FaqCart'

const Terms = () => {
  return (
    <div>
      <Navbar />
      <CarHeroForTerms/>
      <div className='w-4/5 mx-auto my-20 gap-8'>
        <FaqCart classNameForQuestionIcon={"hidden"} Sr={"1."} question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} /> 
        <FaqCart classNameForQuestionIcon={"hidden"} Sr={"2."} question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} />
        <FaqCart classNameForQuestionIcon={"hidden"} Sr={"3."} question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} />
        <FaqCart classNameForQuestionIcon={"hidden"} Sr={"4."} question={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae quidem, inventore illo reprehenderit at, mollitia accusantium, iure excepturi odio laudantium maxime facere!"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Terms