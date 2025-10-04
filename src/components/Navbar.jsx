import React from 'react'

function Navbar() {
   

  return (
    <>
      <nav className='fixed w-full flex items-center justify-around p-4 bg-yellow-700 pt-5'>
        <div className="logo">
            <h1 className='text-white font-bold text-2xl'>✨PAITHRIKA✨</h1>   
        </div>
        <ul className="nav-links flex space-x-10">
            <li><a className='text-white' href="#home">Home</a></li>
            <li><a className='text-white' href="#about">About</a></li>
            <li><a className='text-white' href="#services">Services</a></li>
            <li><a className='text-white p-4 border-1 rounded-xl' href="#contact">Contact</a></li>
            <li><a className='text-white'>Search</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
