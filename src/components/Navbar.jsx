import React from 'react'
const Navbar = () => {
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <div>
                    <h1 className='text-3xl rounded-full items-center font-bold px-4 bg-gradient-to-b from-[#D4145A] to-[#FBB03B] inline-block text-transparent bg-clip-text uppercase underline'>moviemap</h1>
                </div>

                <nav className='hidden lg:flex items-center gap-1 ml-5 text-white'>
                    <a className='px-2' href="">Movies</a>
                    <a className='px-2' href="">TV Shows</a>
                </nav>

                <div>

                </div>
            </div>
        </header>
    )
}

export default Navbar
