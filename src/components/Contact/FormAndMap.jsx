import React from 'react'

const FormAndMap = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row'>
      <div className='left lg:w-1/2 h-screen border-[1px] '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58634.47075694409!2d72.29802667072886!3d23.292003358253055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c18078321e28f%3A0xdca9292f4989571c!2sKadi%2C%20Gujarat%20384440!5e0!3m2!1sen!2sin!4v1756137973466!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      <div className="left lg:w-1/2 h-screen border-[1px] bg-gray-500">
      <form action="" className='m-20 py-10 rounded-xl bg-white flex flex-col items-start justify-center gap-8'>
        <div className='flex items-center justify-between w-4/5 m-auto  '>
          <input type="text" placeholder='Your Name*' className='border-[1px] border-gray-300 h-10 p-1 w-2/5 outline-none'/>
          <input type="text" placeholder='Your Email*' className='border-[1px] border-gray-300 h-10 p-1 w-2/5 outline-none'/>
        </div>
        <div className='flex items-center justify-between w-4/5 mx-auto'>
          <input type="text" placeholder='Subject*' className='border-[1px] border-gray-300 h-10 p-1 w-full outline-none' />
        </div>
        <div className='flex items-center justify-between w-4/5 mx-auto'>
          <input type="text" placeholder='Message*' className='border-[1px] border-gray-300 h-40 p-1 w-full focus:outline-none' />
        </div>
        <div className='flex items-center justify-between w-4/5 mx-auto'>
          <button className='text-white bg-custom1 p-3 text-sm'>SEND MESSAGE</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default FormAndMap