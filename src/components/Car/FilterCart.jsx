import React, { useState } from 'react'

const FilterCart = ({ options, selectedOption, setSelectedOption, title }) => {
    return (
        <div className='w-56'>
            <p className='mb-2'>{title}</p>
            <select
                className='w-full border-[0.5px] border-gray-300 h-10'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >

                {options.map((option, index) => (
                    <option key={index} value={option.value} >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FilterCart
