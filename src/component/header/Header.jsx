import React from 'react'
import logo from '../../assets/logo.png'
import Button from '../button/Button'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='container mx-auto'>
        <div className='px-10 py-9 flex justify-between'>
          <div>
              <img src={logo} alt="" width={200} height={45} />
          </div>
          <div className='flex items-center'>
          </div>
          <div>
            <Link to='/login'>
              <Button text='Log In'/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header