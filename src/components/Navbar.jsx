import React from 'react'
const Navbar = () => {
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <div>
                    <h1 className='text-4xl items-center font-bold px-4 bg-gradient-to-r from-[#02AABD] to-[#00CDAC] inline-block text-transparent bg-clip-text'>moviemap</h1>
                </div>

                <nav className='hidden lg:flex items-center gap-1 ml-5 text-white'>
                    <a href="">Movies</a>
                    <a href="">TV Shows</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
