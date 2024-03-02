import React from 'react'
import { FaBars, FaBell } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-lime-600 h-20 w-full flex flex-row justify-between items-center px-5 m-5 rounded-xl'>
            <div className="flex flex-1 justify-start items-center">
                <button className='text-xl hover:text-black'>
                    <FaBars />
                </button>
            </div>
            <div className="flex flex-1 flex-row gap-3 justify-end items-end">
                <button className='h-10 w-10 rounded-xl border-[1px] border-[#DDDDDD]'>
                    <FaBell />
                </button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar