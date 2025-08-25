import React, { useState } from 'react'
import FilterCart from './FilterCart'

const SearchQuery = () => {
    const options = [
        { value: "--All--", label: "--All--" },
        { value: "--m--", label: "-mAll--" },
        { value: "--0--", label: "--o--" },
        { value: "--a--", label: "--a--" },
        { value: "--t--", label: "--t--" },
    ]

    const title = ["Used/New", "Vehicle Type", "Make", "Model", "Price Range", "Milege", "Engine Size", "Power", "Fuel", "Gear Box", "Doors", "Number of Seats"]

    // Suppose you want 5 dropdowns
    const [selectedOptions, setSelectedOptions] = useState(Array(12).fill(""))

    const handleChange = (index, value) => {
        const newSelected = [...selectedOptions]
        newSelected[index] = value
        setSelectedOptions(newSelected)
    }

    return (
        <div className='w-4/5 mx-auto flex flex-col justify-between items-center my-12'>
            <div className='grid lg:grid-cols-4 gap-10'>
                {selectedOptions.map((selectedOption, index) => (
                    <FilterCart
                        key={index}
                        options={options}
                        selectedOption={selectedOption}
                        title={title[index]}
                        setSelectedOption={(val) => handleChange(index, val)}
                    />
                ))}
            </div>
            <button className='my-10 bg-custom1 px-3 py-2 text-white text-center'>SEARCH</button>
        </div>
    )
}

export default SearchQuery
