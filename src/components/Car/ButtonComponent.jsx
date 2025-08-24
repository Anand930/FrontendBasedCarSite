import React from 'react'

const ButtonComponent = ({ value, buttonClassName }) => {
    return (
        <div>
            <button className={`border-[1px] border-gray-300 bg-white text-custom1 ${buttonClassName}`}>{value}</button>
        </div>
    )
}

export default ButtonComponent