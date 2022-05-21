import React from 'react'
import Navigation from '../../component/navigation/Navigation'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';

function Profile() {

    // get the path
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    let path = usePathname();
    path = path.substring(1).charAt(0).toUpperCase() + path.slice(2);


  return (
    <div className='flex'>
        <Navigation/>
     <div className='flex flex-col ml-20%'>
        <PageName page={path}/>
        <div>sdhdjsh</div>
      </div>
    </div>
  )
}

export default Profile