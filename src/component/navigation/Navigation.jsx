import React from 'react'
import blueLogo from '../../assets/logoBlue.png'
import {Link} from 'react-router-dom'


function Navigation() {
  return (
    <div className='bg-mainColorTwo h-screen w-1/5 rounded-r-lg py-14 flex items-center flex-col fixed'>
        <div className='flex h-14 justify-center'>
          <img src={blueLogo} alt="" width={200} height={45}/>
        </div>
        <div className='mt-28 w-4/5'>
          <ul>
          <Link to='/dashboard'><li className='text-left bg-white rounded-l-lg  text-mainColorTwo w-ex pl-10 font-semibold py-5'>Dashboard</li></Link>
            <Link to='/profile'><li className='text-left text-mainColorFour pl-10 font-semibold py-5'>Profile</li></Link>
            <Link to='/courses'><li className='text-left text-mainColorFour pl-10 font-semibold py-5'>Courses</li></Link>
           <li className='text-left text-mainColorFour pl-10 font-semibold py-5'>Log Out</li>
          </ul>
        </div>
    </div>
  )
}

export default Navigation