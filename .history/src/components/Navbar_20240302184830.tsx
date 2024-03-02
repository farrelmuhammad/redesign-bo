import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-lime-600 h-1/6 w-full flex flex-row'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar