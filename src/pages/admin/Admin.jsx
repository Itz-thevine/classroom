import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from '../../component/navigation/Navigation';

const Admin = () => {
  return (
    <div className='flex w-screen'>
        <Navigation/>
        
        <Outlet/>
    </div>
  )
}

export default Admin