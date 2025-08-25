import React from 'react'
import CommonHeader from './CommonHeader'
import TestimonialCart from './TestimonialCart.jsx'

const Testimonials = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center lg:w-3/5 w-4/5 mx-auto text mt-32 mb-16'>
            <CommonHeader firstpart={"READ OUR"} secondpart={"TESTIMONIALS"} text='black' descriptionText={"gray-500"} mainClassName={'text-center flex flex-col items-center justify-center'} firstpartClassName={"text-2xl"} />
        </div>
        <div className='w-4/5 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <TestimonialCart/>
            <TestimonialCart/>
            <TestimonialCart/>
            <TestimonialCart/>
        </div>

        <button className='bg-custom1 text-white cursor-pointer px-2 py-2 mt-20 mx-auto block text-sm'>
            READ MORE
        </button>
        </div>
    </div>
  )
}

export default Testimonials