import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black mt-8 py-8 border-t border-teal-700'>
            <div className='container mx-auto px-6 lg:px-16 text-center'>
                {/* Logo and Tagline */}
                <div className='mb-6'>
                    <Link to='/' className='text-xl lg:text-2xl font-extrabold px-2 bg-gradient-to-r from-teal-400 to-green-400 inline-block text-transparent bg-clip-text font-logoFont cursor-pointer active:scale-95 transition-all tracking-wide'>moviemap</Link>

                    <p className='text-sm mt-2 text-gray-400'>Discover the best movies and TV shows, all in one place.</p>
                </div>

                {/* Social Media Links */}
                <div className='flex justify-center space-x-6 mb-6'>
                    <a href='#' className='text-blue-500 transition' aria-label='Facebook'>
                        <FaFacebookF size={20} />
                    </a>
                    <a href='#' className='text-pink-600 transition' aria-label='Instagram'>
                        <FaInstagram size={20} />
                    </a>
                    <a href='#' className='text-blue-400 transition' aria-label='Twitter'>
                        <FaTwitter size={20} />
                    </a>
                    <a href='#' className='text-red-500 transition' aria-label='YouTube'>
                        <FaYoutube size={20} />
                    </a>
                </div>

                {/* Footer Text */}
                <div className='text-sm text-gray-500'>
                    <p className='text-gray-400'> &copy; {new Date().getFullYear()} <span className='text-teal-400 font-medium'>MovieMap</span>. All rights reserved </p>
                    <p className='mt-2 text-gray-400'> Designed and Developed with ❤️ by the <span className='uppercase'>Shubham Tiwari.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
