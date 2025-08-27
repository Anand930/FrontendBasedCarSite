import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";


const TestimonialCart = ({ }) => {
    return (
        <div>
            <div className='flex gap-4'>
                <FaRegCircleUser
                    size={100}
                    className="text-white bg-custom1 p-5 rounded-lg"
                />
                <div className='flex flex-col items-start justify-center text-start w-4/5'>
                    <p className="text-xl font-bold text-start">John Doe</p>
                    <p className='text-gray-500 text-sm italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex earum reiciendis ipsa neque expedita fuga. Illo ratione fugit laudantium, vitae rem reprehenderit."</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCart