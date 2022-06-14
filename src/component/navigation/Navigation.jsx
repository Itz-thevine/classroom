import React, { useState } from 'react'
import blueLogo from '../../assets/logoBlue.png'
import {NavLink, useLocation} from 'react-router-dom'
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'

function Navigation() {
  
  const navigate = useNavigate() 

  const logOut = () => {
    Cookie.remove('token')
    navigate('/login')
  }
  
  const location = useLocation()
  console.log(location.pathname)

  const homebg = () => location.pathname === '/admin' ? '#fff' : ''
  const profilebg = () => location.pathname === '/admin/profile' ? '#fff' : ''
  const courses = () => location.pathname === '/admin/courses' ? '#fff' : ''




  return (
    <div className='bg-mainColorTwo h-3/5 lg:h-screen w-10/12 lg:w-1/5 lg:rounded-r-lg py-14 flex items-center flex-col fixed'>
        <div className='flex h-14 justify-center'>
          <img src={blueLogo} alt="" width={200} height={45}/>
        </div>
        <div className=' mt-10 lg:mt-28 w-4/5'>
          <ul>
            <NavLink to='/admin'><li className='cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5' style={{backgroundColor : homebg() }}>Dashboard</li></NavLink>

            <NavLink to='/admin/profile' ><li className='cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5 ' style={{backgroundColor : profilebg() }}>Profile</li></NavLink>
            <NavLink to='/admin/courses' ><li className='cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5' style={{backgroundColor : courses() }}>Courses</li></NavLink>
           <li className='cursor-pointer text-center lg:text-left e rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5' onClick={logOut}>Log Out</li>
          </ul>
        </div>
    </div>
  )
}

export default Navigation