import React from 'react'
import Image from '../../assets/signIn.png';
import Logo from '../../assets/logo.png';
import Button from '../../component/button/Button';

function Login() {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-1 bg-gradient-to-br lg:h-screen from-mainColorTwo to-mainColorOne py-16 justify-center'>
        <p className='text-white font-medium text-4xl mb-2'>Student Log in</p>
        <p className='text-white font-medium text-1xl'>Make sure that your account is secured</p>
        <div className='flex justify-center'>
          <img src={Image} width={450} alt="" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center flex-col'>
        <div className='flex h-10 mb-16'>
          <img src={Logo} alt="" width={200} height={45} />
        </div>
        <div className='w-3/5 flex'>
          <form action="w-inherit ">
            <input type="email" placeholder='Email' className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
            <input type="password" placeholder='Password' className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
            <div className='flex justify-between mt-2'>
              <p className='text-mainColorOne'>Forgot Password?</p>
              <p className='text-mainColorOne'>Register</p>
            </div>
            <div className='flex justify-end items-center mt-5'>
              <Button text='Log In'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login