import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";;

const Navbar = () => {
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-40'>
            <div className='container mx-auto px-5 flex items-center h-full'>
                <div>
                    <h1 className='text-2xl lg:text-3xl items-center font-extrabold px-2 bg-gradient-to-r from-teal-400 to-green-400 inline-block text-transparent bg-clip-text font-logoFont cursor-pointer active:scale-95 transition-all tracking-wide'>moviemap</h1>
                </div>

                <nav className='hidden lg:flex items-center gap-1 ml-5 text-white'>
                    <a className='px-2' href="">Movies</a>
                    <a className='px-2' href="">TV Shows</a>
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2'>
                        <input type='text'
                            placeholder='Search here...'
                            className='bg-transparent pr-4 pl-2 py-1 outline-none border-b border-gray-500 hidden lg:block placeholder:text-gray-300 text-white'
                        />
                        <button className='text-xl text-white active:scale-90 transition-all'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='text-xl text-teal-300 cursor-pointer active:scale-90 transition-all'>
                        <MdOutlineLightMode />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
