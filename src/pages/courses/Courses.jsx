import React from 'react'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';
import Course from '../../component/course/Course';
import db from '../../db/db'
import {Link} from 'react-router-dom'

function Courses() {
    const data = db
    // get the path
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    let path = usePathname();
    path = path.substring(6)
    let d_path = path.charAt(1).toUpperCase() + path.slice(2);

  return (
    <div className='flex w-screen justify-center lg:justify-start'>
    <div className='flex flex-col items-center lg:items-start lg:mr-0 lg:ml-20% w-4/5'>
      <PageName page={d_path}/>
      <div className='  lg:px-11 w-11/12 mx-8 lg:ml-16 mt-8 flex flex-wrap'>
        {data.map((datum) => (
          <div className='mb-10 mx-5' key={datum.id} style={{display:'flex', justifyContent:'center'}}>
            <Link to={`/admin/courses/${datum.id}`} className='w-min-4/5 lg:w-fulls'>
              <Course name={datum.name}/> </Link> 
          </div>
        ))}
       
      </div>
      
    </div>
  </div>
  ) 
}

export default Courses