import React from 'react'
import Logo from '../assets/images/logo.png'

const Sidebar = () => {
  return (
    <aside className='flex flex-col h-screen w-1/4 justify-start items-center bg-[#022D57] py-5'>
        <div className="flex flex-row flex-1 h-10">
            <img src={Logo} alt="" />
        </div>
    </aside>
  )
}

export default Sidebar