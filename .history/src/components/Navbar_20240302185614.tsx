import React from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-lime-600 h-20 w-full flex flex-row justify-between items-center px-5 m-5 rounded-xl'>
            <div className="">
                <button>
                    <FaBars />
                </button>
            </div>
            <div className="">About</div>
        </nav>
    )
}

export default Navbar