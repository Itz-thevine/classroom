import React from 'react'

function Button({text}) {
  return (
    <div className='bg-mainColorOne flex justify-center items-center h-12 w-32 py-2 width cursor-pointer text-white rounded-md font-semibold'>{text}</div>
  )
}

export default Button