import React from 'react'
import CommonHeader from '../Home/CommonHeader'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className='my-20 w-4/5 mx-auto'>
      <CommonHeader firstpart={"CONTACT"} secondpart={"INFO"} text={"black"} firstpartClassName={"text-xl"} descriptionText={"center hidden"} mainClassName={"flex flex-col items-center justify-center w-4/5 mx-auto"} />
      <div className='w-full lg:flex block items-center text-center justify-between my-20'>
        <div className='flexflex -col items-center justify-center'>
          <button className='px-6 py-5 border-red-500 border-[1px] rounded-lg bg-custom1'>

            <IoCall size={30} className='w-10 h-8' strokeWidth={1} color='white' />
          </button>
          <p className='my-4 text-xl text-custom1'>+1 333 4040 5566</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <button className='px-6 py-5 border-red-500 border-[1px] rounded-lg bg-custom1'>

            <IoMail size={30} className="w-10 h-8" strokeWidth={1} stroke='white' color='white' />
          </button>
          <p className='my-4 text-xl text-custom1'>contact@company.com
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <button className='px-6 py-5 border-red-500 border-[1px] rounded-lg bg-custom1'>

            <FaLocationDot size={30} className='w-10 h-8' strokeWidth={1} color='white' />
          </button>
          <p className='my-4 text-xl text-custom1'>212 Barrington Court New York</p>

        </div>


      </div>
    </div>
  )
}

export default ContactInfo