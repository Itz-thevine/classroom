import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from '../../component/navigation/Navigation';
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'


const Admin = () => {
  const token = Cookie.get('token') || 'empty'
  const navigate = useNavigate() 

  useEffect(()=>{
      if(token === 'empty'){
      navigate('/login')
      }
    },[])
  

  return (
  <>
    {
      token === 'empty' ?(
         <div></div> 
      ):(
        <div className='flex w-screen'>
            <Navigation/>
            
            <Outlet/>
        </div>
      ) 
    }

 
  </>
  )
}

export default Admin