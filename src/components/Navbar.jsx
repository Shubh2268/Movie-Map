import React, { useContext } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { setMediaType } = useContext(AppContext);
    const navigate = useNavigate();

    const handleNavigation = (type) => {
        setMediaType(type); 
        navigate(`/${type}`);
    };

    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-40'>
            <div className='container mx-auto px-5 flex items-center h-full'>
                
                <Link to='/' className='text-2xl lg:text-3xl font-extrabold px-2 bg-gradient-to-r from-teal-400 to-green-400 inline-block text-transparent bg-clip-text font-logoFont cursor-pointer active:scale-95 transition-all tracking-wide'>moviemap</Link>

                {/* Navigation links */}
                <nav className='hidden lg:flex items-center gap-1 ml-5 text-white'>
                    <button className='px-2 cursor-pointer active:scale-90 transition-all text-white' onClick={() => handleNavigation('movie')}>Movies</button>
                    <button className='px-2 cursor-pointer active:scale-90 transition-all text-white' onClick={() => handleNavigation('tv')}>TV Shows</button>
                </nav>

                {/* Search */}
                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2'>
                        <input 
                            type='text' 
                            placeholder='Search here...' 
                            className='bg-transparent pr-4 pl-2 py-1 outline-none border-b border-gray-500 hidden lg:block placeholder:text-gray-300 text-white'
                        />
                        <button className='text-xl text-white active:scale-90 transition-all'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    
                    {/* Toggle theme */}
                    <div className='text-xl text-teal-300 cursor-pointer active:scale-90 transition-all'>
                        <MdOutlineLightMode />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
