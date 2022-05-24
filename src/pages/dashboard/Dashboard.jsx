import React, { useState, useEffect } from 'react'
import Navigation from '../../component/navigation/Navigation'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';
import Dash from '../../assets/dashboard.png'


function Dashboard() {


  const items = JSON.parse(localStorage.getItem('users'));

  const name = items.user.displayName || 'Guest';
  
  console.log(items.user.displayName)
  // get the path
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  let path = usePathname();
  path = path.substring(1).charAt(0).toUpperCase() + path.slice(2);


  return (
    <div className='flex w-screen'>
      <Navigation/>
      <div className='flex flex-col ml-20% w-4/5'>
        <PageName page={path}/>
        <div className=' bg-gradient-to-br rounded-lg flex from-mainColorTwo px-11 w-11/12 h-52  overflow-y-hidden to-mainColorOne ml-16 mt-8'>
          <div className='flex flex-col items-start py-12 flex-1'>
            <div className='text-white text-2xl font-semibold'>Welcome,</div>
            <div className='text-white text-4xl font-bold '>{name}</div>
            <div className='text-white'>Start your Learning with us</div>
          </div>
          <div className='flex-1 '>
            <img src={Dash} alt="" width={300} style={{marginLeft: '195px', marginTop: '-80px'}}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard