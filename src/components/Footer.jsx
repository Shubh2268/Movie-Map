import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 border-t border-teal-600 my-8 py-10'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-2xl font-semibold text-teal-400'>MovieMap</h2>
                <p className='py-1'>Your ultimate destination to explore movies and TV shows.</p>

                <div className='flex justify-center space-x-6 my-4'>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-blue-400 transition'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-red-400 transition'>
                        <FaInstagram size={24} />
                    </a>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-blue-400 transition'>
                        <FaTwitter size={24} />
                    </a>
                    <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-red-400 transition'>
                        <FaYoutube size={24} />
                    </a>
                </div>

                <p className='text-sm'>&copy; {new Date().getFullYear()} MovieMap. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
