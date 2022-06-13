import React, { useState } from 'react'
import blueLogo from '../../assets/logoBlue.png'
import {Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'

function Navigation() {
  const navigate = useNavigate() 

  const logOut = () => {
    Cookie.remove('token')
    navigate('/login')
  }
  
const [active, setActive] = useState('');
const sClicked = (name) => {
    name === 'dashboard' ? setActive('dashboard'): name ==='profile' ? setActive('profile'): name === 'courses' ? setActive('courses'): setActive('logout');
}

  return (
    <div className='bg-mainColorTwo h-3/5 lg:h-screen w-10/12 lg:w-1/5 lg:rounded-r-lg py-14 flex items-center flex-col fixed'>
        <div className='flex h-14 justify-center'>
          <img src={blueLogo} alt="" width={200} height={45}/>
        </div>
        <div className=' mt-10 lg:mt-28 w-4/5'>
          <ul>
            <Link to='/admin'><li className={ active === 'dashboard' ? 'cursor-pointer text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-5 bg-white' : 'cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5 '} onClick={() => sClicked('dashboard')}>Dashboard</li></Link>

            <Link to='/admin/profile'><li className={ active === 'profile' ? 'cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5 bg-white' : 'cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5 '}onClick={() => sClicked('profile')}>Profile</li></Link>
            <Link to='/admin/courses'><li className='cursor-pointer text-center lg:text-left  rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5' onClick={() => sClicked('courses')}>Courses</li></Link>
           <li className='cursor-pointer text-center lg:text-left e rounded-l-lg text-mainColorFour lg:w-ex pl-10 font-semibold py-3 lg:py-5' onClick={logOut}>Log Out</li>
          </ul>
        </div>
    </div>
  )
}

export default Navigation