import React, { useState } from 'react'

const Box = ({para, onClick, className, icon, mainClassName}) => {
  return (
    <div className={`bg-white shadow-2xl p-4 hover:cursor-pointer ${mainClassName}`} >
      {icon}
        <p className={`text-black text-xl font-bold ${className}`} onClick={onClick}>{para}</p>
    </div>
  )
}

export default Box