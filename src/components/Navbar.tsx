import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-black text-white flex pl-32 pr-20 py-5 items-center z-30'>
            <div className='flex-1'>
                <Logo />
            </div>
            <div>
                <ul className='flex gap-12'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/big-tracker">BIG Tracker</Link></li>
                    <li><Link href="/resources">Resources</Link></li>
                </ul>
            </div>
            <div className='ml-16'>
                <div className='text-3xl'>
                    <span><FaRegUserCircle /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar