import React from 'react'
import Navigation from '../../component/navigation/Navigation'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';
import Course from '../../component/course/Course';

function Courses() {

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
      <div className='  px-11 w-11/12 ml-16 mt-8 flex flex-wrap'>
        {/* individual card */}
        <div className='mb-10' style={{display:'flex', width:'50%', justifyContent:'center'}}>
          <Course/>  
        </div>
        {/* individual card */}
        <div className='mb-10' style={{display:'flex', width:'50%', justifyContent:'center'}}>
          <Course/>  
        </div>
        {/* individual card */}
        <div className='mb-10' style={{display:'flex', width:'50%', justifyContent:'center'}}>
          <Course/>  
        </div>
        {/* individual card */}
        <div className='mb-10' style={{display:'flex', width:'50%', justifyContent:'center'}}>
          <Course/>  
        </div>
        {/* individual card */}
        <div className='mb-10' style={{display:'flex', width:'50%', justifyContent:'center'}}>
          <Course/>  
        </div>
       
      </div>
      
    </div>
  </div>
  ) 
}

export default Courses