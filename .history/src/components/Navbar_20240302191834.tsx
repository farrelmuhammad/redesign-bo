import React from 'react'
import { FaBars, FaMoon, FaRegBell, FaRegEnvelopeOpen, FaRegUserCircle, FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-lime-600 h-20 w-full flex flex-row justify-between items-center px-5 m-5 rounded-xl'>
            <div className="flex flex-1 justify-start items-center">
                <button className='text-xl hover:text-black'>
                    <FaBars />
                </button>
            </div>
            <div className="flex flex-1 flex-row gap-3 justify-end items-end">
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[1px] border-[#DDDDDD] hover:border-gray-300 hover:text-gray-300'>
                    <FaRegBell />
                </button>
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[1px] border-[#DDDDDD] hover:border-gray-300 hover:text-gray-300'>
                    <FaRegEnvelopeOpen />
                </button>
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[1px] border-[#DDDDDD] text-yellow-400 hover:border-gray-300 hover:text-yellow-500'>
                    <FaSun />
                    {/* <FaMoon /> */}
                </button>
                <button className='flex flex-row justify-center items-center py-2 px-3 gap-3'>
                    John Johnson <FaRegUserCircle className='text-xl' />
                </button>
            </div>
        </nav>
    )
}

export default Navbar