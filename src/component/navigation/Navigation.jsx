import React from 'react'
import blueLogo from '../../assets/logoBlue.png'
import {Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate() 

  const logOut = () => {
    Cookie.remove('token')
    navigate('/login')
  }

  return (
    <div className='bg-mainColorTwo h-screen w-1/5 rounded-r-lg py-14 flex items-center flex-col fixed'>
        <div className='flex h-14 justify-center'>
          <img src={blueLogo} alt="" width={200} height={45}/>
        </div>
        <div className='mt-28 w-4/5'>
          <ul>
            <Link to='/admin'><li className='cursor-pointer text-left bg-white rounded-l-lg  text-mainColorTwo w-ex pl-10 font-semibold py-5'>Dashboard</li></Link>
            <Link to='/admin/profile'><li className='cursor-pointer text-left text-mainColorFour pl-10 font-semibold py-5'>Profile</li></Link>
            <Link to='/admin/courses'><li className='cursor-pointer text-left text-mainColorFour pl-10 font-semibold py-5'>Courses</li></Link>
           <li className='cursor-pointer text-left text-mainColorFour pl-10 font-semibold py-5' onClick={logOut}>Log Out</li>
          </ul>
        </div>
    </div>
  )
}

export default Navigation