import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import Navigation from '../navigation/Navigation';


const PageName = ({page}) => {
  const [open, setOpen] = useState(false);

  const nowOpen = (val) => {
    setOpen(!val)
  }

  return (
    <div className='flex w-re flex-col justify-start items-start'>
      <div className='flex justify-between items-center w-full'>
        <div className=' lg:pl-14 py-6 text-3xl font-bold'>{page}</div>
        <div className=' lg:hidden text-3xl' onClick={()=>nowOpen(open)}>
          <AiIcons.AiOutlineMenu/>
        </div>
      </div>
        <hr className='border-blue-200 lg:w-re w-full'/>  

        <div className='lg:hidden'>
          {
            open && (
              <div className='absolute'>
                <Navigation/>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default PageName