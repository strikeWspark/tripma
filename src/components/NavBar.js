import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/tripma_logo.svg';
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import InputField from "./InputField";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('flights');
    const [nav, setNav] = useState(true);
    const [scrolled, setScrolled] = useState("");
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled("scrolled");
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
        <nav className={`flex justify-between items-center h-24 mx-auto px-24 text-black fixed-navbar ${scrolled}`}>
            <img src={logo} alt="Logo" />
            <ul className='hidden md:flex'>
                <li className='p-4 my-5'><a href="#flights" className={activeLink === 'flights' ? 'active text-[#605dec] font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('flights')}>Flights</a></li>
                <li className='p-4 my-5'><a href="#hotels" className={activeLink === 'hotels' ? 'active text-[#605dec] font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('hotels')}>Hotels</a></li>
                <li className='p-4 my-5'><a href="#packages" className={activeLink === 'packages' ? 'active text-[#605dec] font-light ' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('packages')}>Packages</a></li>
                <li className='p-4 my-5'><a href="#sign" className={activeLink === 'signin' ? 'active text-[#605dec]  font-light' : 'font-light text-gray-600'} onClick={() => onUpdateActiveLink('signin')}>Sign In</a></li>
                <button className='bg-[#605dec] w-[120px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white ' onClick={handleOpen}>Sign Up
                </button>
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
                    <button className='bg-[#605dec] w-[120px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white ' onClick={handleOpen}>Sign Up</button>
                </ul>
            </div>

            <Dialog
                
                open={open}
                handler={handleOpen}
                className=" fixed inset-0 flex items-center justify-center bg-opacity-70"
            >
                <Card className="w-full max-w-[48rem] mx-auto bg-white rounded-lg m-2 p-2 shadow-xl">
                    <CardBody className="flex flex-col gap-4">
                        <div className='text-xl p-4 flex justify-between'>
                            <h1>Sign up for Tripma</h1>
                            <button onClick={handleOpen}>Close</button>
                        </div>
                        <p className='p-4'>
                            Tripma is totally free to use. Sign up using your email address or phone number below to get started.
                        </p>
                        <Typography>
                            <div className="py-4 gap-4">
                                <InputField placeholder="Email" />
                            </div>
                            <div className="py-4 gap-4">
                                <InputField placeholder="Password" />
                            </div>
                            <div className="py-2 flex">
                                <InputField type="checkbox" />
                                <div className="px-4 text-md">I agree to the <span className='text-[#605dec]'>terms and conditions</span></div>
                            </div>
                            <div className="py-2 flex">
                                <InputField type="checkbox" />
                                <div className="px-4 text-md">Send me the latest deal alerts</div>
                            </div>
                            <div className="px-4 text-center">
                                <button className='bg-[#605dec] w-[250px] rounded-md shadow-xl font-light my-6 ml-1 mx-auto px-6 py-3 text-white'>Create Account</button>
                            </div>
                            <div className="flex items-center m-4 p-4">
                                <div className="flex-1 h-px bg-[#d2d2e9]"></div>
                                <div className="mx-4 text-lg">Or</div>
                                <div className="flex-1 h-px bg-[#d2d2e9]"></div>
                            </div>
                            <div className="px-4 text-center">
                                <button className='w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light px-6 py-3 text-[#605dec]'>Continue with Google</button>
                            </div>
                            <div className="py-2 px-4 text-center">
                                <button className='w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light px-6 py-3 text-[#605dec]'>Continue with Apple</button>
                            </div>
                            <div className="px-4 text-center">
                                <button className='w-[250px] outline outline-1 outline-[#605dec] rounded-md font-light px-6 py-3 text-[#605dec]'>Continue with Facebook</button>
                            </div>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOpen();
                                }}
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </nav>
    )
}

export default NavBar;
