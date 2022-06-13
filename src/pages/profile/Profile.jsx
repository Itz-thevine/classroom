import React from 'react'
import Navigation from '../../component/navigation/Navigation'
import { useLocation } from 'react-router-dom'
import PageName from '../../component/pageName/PageName';

function Profile() {

  const items = JSON.parse(localStorage.getItem('users'));

  const name = items.user.displayName || 'Guest';
  const email = items.user.email || 'no set'
  const imagee = items.user.photoURL || 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  const number=  items.user.providerData[0].phoneNumber || +2347036936113 

  // console.log(number)

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
      <div className='flex flex-col lg:items-start items-center lg:ml-20% w-full lg:w-4/5'>
        <PageName page={d_path}/>
        <div className='flex px-14 lg:px-0  w-11/12 ml-0 lg:ml-16 mt-8 flex-col'>
          <p className='text-1xl text-mainColorThree font-semibold mb-10 text-left'>Personal Details</p>
          <div className='flex flex-col justify-center'>
              <div className='h-full w-1/5  rounded-full overflow-x-hidden overflow-y-hidden'>
                <img src={imagee} alt="" width={200} style={{marginTop: '-10px'}} />
              </div>
              <div className='flex w-full mt-10 mb-16'>
                <form className='w-full flex flex-wrap'>
                  <div className='flex w-full justify-between flex-wrap'>
                    <input type="text" placeholder='Name' defaultValue={name} style={{width: '48%'}} className='border-solid border-2 border-mainColorTwo h-14 px-5 pt-2 rounded-lg mb-10'/>
                    <input type="email" placeholder='Email' defaultValue={email} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14 mb-10  px-5 pt-2'/>
                    {/* <input type="address" placeholder='Address' defaultValue={'30 Olatilwa Street, Ebute Metta'} style={{width: '100%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/> */}
                    <input type="number" placeholder='Phone Number' defaultValue={number} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    {/* <input type="text" placeholder='State/Province' defaultValue={'Lagos'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='Zip Code' defaultValue={'2332'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/>
                    <input type="text" placeholder='Country' defaultValue={'Nigeria'} style={{width: '48%'}} className='border-solid rounded-lg border-2 border-mainColorTwo h-14  px-5 pt-2 mb-10'/> */}
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