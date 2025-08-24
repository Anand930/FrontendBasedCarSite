import React, { useState } from 'react'

const Box = ({para, onClick, className}) => {
  return (
    <div className={"bg-white shadow-2xl p-4 hover:cursor-pointer" } >
        <p className={`text-black text-xl font-bold ${className}`} onClick={onClick}>{para}</p>
    </div>
  )
}

export default Box