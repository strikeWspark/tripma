import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/tripma_logo.svg';
import SignUpDialogBox from './SignUpDialogBox';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('flights');
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    const [scrolled, setScrolled] = useState("");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled({ scrolled });
            } else {
                setScrolled("");
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }



    return (
        <nav className={scrolled ? 'flex justify-between items-center h-24 mx-auto px-24 text-black  fixed-navbar scrolled' : 'flex justify-between items-center h-24 mx-auto px-24 text-black fixed-navbar '}>
            <img src={logo} alt="Logo" />
            <ul className='hidden md:flex'>
                <li className='p-4 my-5'><a href="#flights" className={activeLink === 'flights' ? 'active text-[#605dec] font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('flights')}>Flights</a></li>
                <li className='p-4 my-5'><a href="#hotels" className={activeLink === 'hotels' ? 'active text-[#605dec] font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('hotels')}>Hotels</a></li>
                <li className='p-4 my-5'><a href="#packages" className={activeLink === 'packages' ? 'active text-[#605dec] font-light ' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('packages')}>Packages</a></li>
                <li className='p-4 my-5'><a href="#sign" className={activeLink === 'signin' ? 'active text-[#605dec]  font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('signin')}>Sign In</a></li>
                <button className='bg-[#605dec] w-[120px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white '>Sign Up</button>

            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-0 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%]'} onClick={handleNav}>
                <img className="m-4 p-4" src={logo} alt="Logo" />
                <ul className='p-4'>
                    <li className='p-4 font-light text-gray-600 border-b border-gray-400'><a href="#flights" className={activeLink === 'flights' ? 'active text-[#605dec] font-medium' : ''} onClick={() => onUpdateActiveLink('flights')}>Flights</a></li>
                    <li className='p-4 font-light text-gray-600 border-b border-gray-400'><a href="#hotels" className={activeLink === 'hotels' ? 'active text-[#605dec] font-medium' : ''} onClick={() => onUpdateActiveLink('hotels')}>Hotels</a></li>
                    <li className='p-4 font-light text-gray-600 border-b border-gray-400'><a href="#packages" className={activeLink === 'packages' ? 'active text-[#605dec] font-medium' : ''} onClick={() => onUpdateActiveLink('packages')}>Packages</a></li>
                    <li className='p-4 font-light text-gray-600 border-b border-gray-400'><a href="#signin" className={activeLink === 'signin' ? 'active text-[#605dec] font-medium' : ''} onClick={() => onUpdateActiveLink('signin')}>Sign In</a></li>
                    <button className='bg-[#605dec] w-[120px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white '>Sign Up</button>
                </ul>
            </div>

     
        </nav>
    )
}

export default NavBar;