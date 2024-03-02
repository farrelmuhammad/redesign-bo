import React from 'react'
import Logo from '../assets/images/Logo.png'

const Sidebar = () => {
  return (
    <aside className='flex flex-col h-full w-1/4 justify-start items-center bg-[#022D57] py-5'>
        <div className="flex flex-row h-20 justify-start gap-4 items-center bg-blue-400">
            <img className="h-10 w-10" src={Logo} alt="" />
            <h1 className='font-bold text-3xl'>Admin Panel</h1>
        </div>
    </aside>
  )
}

export default Sidebar