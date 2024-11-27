import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <div>
                    <h1 className='text-3xl items-center font-bold px-4 bg-gradient-to-b from-[#ff8c00] to-[#ff0080] inline-block text-transparent bg-clip-text font-logoFont cursor-pointer active:scale-95 transition-all'>moviemap</h1>
                </div>

                <nav className='hidden lg:flex items-center gap-1 ml-5 text-white'>
                    <a className='px-2' href="">Movies</a>
                    <a className='px-2' href="">TV Shows</a>
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2'>
                        <input type='text'
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block placeholder:text-gray-300 text-white'
                        />
                        <button className='text-2xl text-white active:scale-90 transition-all'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='text-3xl text-red-400 cursor-pointer active:scale-90 transition-all'>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
