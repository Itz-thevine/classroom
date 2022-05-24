import React, { useState } from 'react'
import Image from '../../assets/signIn.png';
import Logo from '../../assets/logo.png';
import Button from '../../component/button/Button';
import {Link} from 'react-router-dom'
import {signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, provider, emailAndPassword} from '../../firebase'
import {useNavigate} from 'react-router-dom'
import Cookie from 'js-cookie'

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [register, setRegister] = useState(false)
  // const [user, setUser] = useState([]);

  const changeMail = (email) => {
    setEmail(email)
  }

  const handleRegister = () => {
    setRegister(true)
  }
  const removeReg= () => {
    setRegister (false)
  }

  const changePassword = (password) => {
    setPassword(password)
  }

  const navigate = useNavigate() 
  const signInWithGoogleFun= (e) =>{
    e.preventDefault();
    signInWithPopup(auth, provider).then((res)=> {
      // console.log(res)
      Cookie.set('token', res.user.accessToken, {
        expires: 1,
        secure:true,
        sameSite: 'strict',
        path:'/'
      })
      localStorage.setItem('users', JSON.stringify(res))
      navigate('/admin')
    }).catch((err)=> {
      console.log(err)
    })
  }

  const signWithEmailAndPass= (e) => {
    e.preventDefault();
    if (email != null && password != null) {
      
      signInWithEmailAndPassword(auth, email, password).then((res)=> {
        // console.log(res)
        Cookie.set('token', res.user.accessToken, {
          expires: 1,
          secure:true,
          sameSite: 'strict',
          path:'/'
        })
        localStorage.setItem('users', JSON.stringify(res))
        navigate('/admin')

        }).catch((err)=> {
          console.log(err)
        })
      
    }
  }

  const signUpWithEmailAndPass= (e) => {
    e.preventDefault();
    if (email != null && password != null) {
      
      createUserWithEmailAndPassword(auth, email, password).then((res)=> {
        console.log(res)
        setRegister(false)
        console.log(res)
        }).catch((err)=> {
          console.log(err)
        })
      
    }
  }

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
            <input type="email" placeholder='Email' onChange={(e)=> changeMail(e.target.value)} className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
            <input type="password" placeholder='Password' onChange={(e) => changePassword(e.target.value)} className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
            <div className='flex justify-between mt-2'>
              <p className='text-mainColorOne'>Forgot Password?</p>
              <p className='text-mainColorOne' onClick={handleRegister}>Register</p>
            </div>
            <div className='flex justify-end items-center mt-5'>
              <div onClick={(e)=> signWithEmailAndPass(e)}>
                <Button  text='Log In'/>
              </div>
            </div>

           <div className='flex justify-end my-5'  onClick={(e)=> signInWithGoogleFun(e)}>
            <div className=" w-auto flex bg-mainColorTwo shadow-md rounded-lg">
              <div className="p-4 bg-white" >
                <div className="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style={{width: '18px', height: '18px'}}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" className="abcRioButtonSvg">
                    <g>
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" />
                    </g>
                  </svg>
                </div>
              </div>
              <span className='text-white flex justify-center items-center px-5'>Sign in with Google</span>
            </div>
           </div>


          </form>
        </div>
      </div>
      {
        register && (
          <div className='absolute w-full h-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-20 flex justify-center items-center z-10' onClick={removeReg}>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='flex bg-white px-5 py-24 w-3/5 justify-center items-center relative z-20' onClick={handleRegister}>
                
                <form action="w-inherit ">
                  <input type="email" placeholder='Email' onChange={(e)=> changeMail(e.target.value)} className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
                  <input type="password" placeholder='Password' onChange={(e) => changePassword(e.target.value)} className='border-b-solid border-b-2 border-mainColorTwo h-14 w-full px-5 pt-2'/>
                
                  <div className='flex justify-end items-center mt-5'>
                    <div onClick={(e)=> signUpWithEmailAndPass(e)}>
                      <Button  text='Register'/>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Login