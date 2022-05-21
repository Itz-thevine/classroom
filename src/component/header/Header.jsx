import React from 'react'
import logo from '../../assets/logo.png'
import Button from '../button/Button'

function Header() {
  return (
    <div className='container mx-auto'>
        <div className='px-10 py-9 flex justify-between'>
          <div>
              <img src={logo} alt="" width={200} height={45} />
          </div>
          <div className='flex items-center'>
            {/* <ul className='flex'>
              <li className='px-7 font-semibold'>About</li>
              <li className='px-7 font-semibold'>Courses</li>
              <li className='px-7 font-semibold'>Instructor</li>
              <li className='px-7 font-semibold'>News</li>
              <li className='px-7 font-semibold'>Pricing</li>
            </ul> */}
          </div>
          <div>
            <Button text='Log In'/>
          </div>
        </div>
    </div>
  )
}

export default Header