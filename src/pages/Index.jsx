import React from 'react'
import {Link} from 'react-router-dom'

function Index() {
  return (
    <div className='flex flex-col'>
        <Link to='/home'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/dashboard'>Dashboard</Link>
     </div>
  )
}

export default Index