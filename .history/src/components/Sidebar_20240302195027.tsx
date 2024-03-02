import React from 'react'
import Logo from '../assets/images/Logo.png'
import { FaHome } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <aside className='flex flex-col h-full w-1/4 justify-start items-center bg-[#022D57] py-5'>
            <div className="flex flex-row h-20 justify-start gap-4 items-center">
                <img className="h-10 w-10" src={Logo} alt="" />
                <h1 className='font-bold text-3xl text-[#F9C017]'>Admin Panel</h1>
            </div>
            <div className="flex flex-col h-full w-full justify-start gap-4 items-start py-5 px-20">
                <ul className='flex flex-col gap-2 font-medium text-lg'>
                    <li className=''>
                        <button className='flex flex-row justify-start items-center gap-4 py-5 hover:rounded-xl hover:bg-[#3996DC] hover:bg-opacity-[20%]'>
                        <FaHome /> Dashboard
                        </button>
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                </ul>
                <ul className='flex flex-col gap-2 font-medium text-lg'>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                    <li className='flex flex-row justify-start items-center gap-4'>
                        <FaHome /> Dashboard
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar