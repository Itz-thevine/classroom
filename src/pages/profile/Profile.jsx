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
    <div className='flex w-screen'>
      <Navigation/>
      <div className='flex flex-col ml-20% w-4/5'>
        <PageName page={path}/>
        <div className='flex  w-11/12 ml-16 mt-8 flex-col'>
          <p className='text-1xl text-mainColorThree font-semibold mb-10 text-left'>Personal Details</p>
          <div className='flex flex-col justify-center'>
              <div className='h-full w-1/5  rounded-full overflow-x-hidden overflow-y-hidden'>
                <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" width={200} style={{marginTop: '-10px'}} />
              </div>
              <div className='flex w-full mt-10 mb-16'>
                <form className='w-full flex flex-wrap'>
                  <div className='flex w-full justify-between flex-wrap'>
                    <input type="text" placeholder='Name' defaultValue={'Ikechukwu Divine'} style={{width: '48%'}} className='border-solid border-2 border-mainColorTwo h-14 px-5 pt-2 rounded-lg mb-10'/>
                    <input type="email" placeholder='Email' defaultValue={'divine2christ@yahoo.com'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14 mb-10  px-5 pt-2'/>
                    <input type="address" placeholder='Address' defaultValue={'30 Olatilwa Street, Ebute Metta'} style={{width: '100%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='City' defaultValue={'Ebute Metta'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='State/Province' defaultValue={'Lagos'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='Zip Code' defaultValue={'2332'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='Country' defaultValue={'Nigeria'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile