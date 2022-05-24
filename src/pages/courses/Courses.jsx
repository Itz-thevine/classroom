import React from 'react'
import Navigation from '../../component/navigation/Navigation'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';
import Course from '../../component/course/Course';
import db from '../../db/db'
import {Link} from 'react-router-dom'

function Courses() {
    const data = db
    console.log(data)
    // get the path
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    let path = usePathname();
    path = path.substring(6)
    let d_path = path.charAt(1).toUpperCase() + path.slice(2);

  return (
    <div className='flex w-screen'>
    <Navigation/>
    <div className='flex flex-col ml-20% w-4/5'>
      <PageName page={d_path}/>
      <div className='  px-11 w-11/12 ml-16 mt-8 flex flex-wrap'>
        {data.map((datum) => (
          <div className='mb-10' key={datum.id} style={{display:'flex', width:'50%', justifyContent:'center'}}>
            <Link to={`/admin/courses/${datum.id}`} className='w-4/5'>
              <Course name={datum.name}/> </Link> 
          </div>
        ))}
       
      </div>
      
    </div>
  </div>
  ) 
}

export default Courses