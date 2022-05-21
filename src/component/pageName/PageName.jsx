import React from 'react'

const PageName = ({page}) => {
  return (
    <div className='flex w-re flex-col justify-start items-start'>
        <div className=' pl-14 py-6 text-3xl font-bold'>{page}</div>
        <hr className='border-blue-200 w-re'/>  
    </div>
  )
}

export default PageName