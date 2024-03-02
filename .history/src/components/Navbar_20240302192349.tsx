import React from 'react'
import { FaBars, FaMoon, FaRegBell, FaRegEnvelopeOpen, FaRegUserCircle, FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-white h-20 w-full flex flex-row justify-between items-center px-5 m-5 rounded-xl shadow-lg'>
            <div className="flex flex-1 justify-start items-center">
                <button className='text-xl text-[#BABA] hover:text-black'>
                    <FaBars />
                </button>
            </div>
            <div className="flex flex-1 flex-row gap-3 justify-end items-end">
                <button className='flex justify-center items-center h-10 w-10 text-[#868686] bg-[#F8F8F8] rounded-xl border-[2px] border-[#DDDDDD] hover:border-gray-500 hover:text-gray-500'>
                    <FaRegBell />
                </button>
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[2px] border-[#DDDDDD] hover:border-gray-500 hover:text-gray-500'>
                    <FaRegEnvelopeOpen />
                </button>
                <button className='flex justify-center items-center h-10 w-10 rounded-xl border-[2px] border-[#DDDDDD] text-yellow-400 hover:border-gray-500 hover:text-yellow-500'>
                    <FaSun />
                    {/* <FaMoon /> */}
                </button>
                <button className='flex flex-row justify-center items-center py-2 px-3 gap-3 hover:border-gray-200 hover:text-gray-200'>
                    John Johnson <FaRegUserCircle className='text-xl' />
                </button>
            </div>
        </nav>
    )
}

export default Navbar