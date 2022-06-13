import React from 'react'
import {Link} from 'react-router-dom'

function Courses({name}) {
  return (
    <>
        <div className="cursor-pointer p-6 w-min-full py-7 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
    </>

  )
}

export default Courses