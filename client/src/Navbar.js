import React from 'react'
import heart from './assetss/health.jpg'


export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='left-nav'>
          <h1>HealthRCD</h1>
          <img src={heart} alt='healthimg' />
        </div>
        <div className='right-nav'>
          <p>name</p>
          <p>logout</p>
        </div>
      </div>

    </>
  )
}
