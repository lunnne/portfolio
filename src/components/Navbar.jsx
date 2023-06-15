import React from 'react'

export default function Navbar() {
  return (
    <header className='h-1/4 flex items-center border-b-2'>
        <div className='border-r-2'><img src="/img/logo.png" alt="" className="logo" /></div>
        <div className='text-2xl ml-10'>Hi, I'm frontend developer Jin Mun!</div>
    </header>
  )
}
