import React from 'react'
import { FaComments, FaUser } from 'react-icons/fa6'
import { MdCalendarMonth } from 'react-icons/md'

const RecentPost = () => {
    return (
        <div>
            <div className='flex flex-col items-start justify-center gap-2'>
                <p className='text-custom1 mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quae debitis iste?</p>
                <div className={`flex gap-3`} >
                    <div className="flex items-center justify-center gap-1">
                        {" "}
                        <FaUser color="gray" size={13} />
                        <p className="text-gray-500 text-xs">John Doe</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <MdCalendarMonth color="gray" size={13} />
                        <p className="text-gray-500 text-xs">27.07.2020 10:10</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <FaComments color="gray" size={13} />
                        <p className="text-gray-500 text-xs">15 comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentPost