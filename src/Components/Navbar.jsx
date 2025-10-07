import React from 'react';
import logoimg from '../assets/logo.png'
import { GithubIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar border-gray-100 border-b-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li class="px-5 py-2"><NavLink to='/' className='font-semibold'>Home</NavLink></li>
                        <li class="px-5 py-2"><NavLink to='/app-products' className='font-semibold'>Apps</NavLink></li>
                        <li class="px-5 py-2"><NavLink to='/install-app' className='font-semibold'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex justify-between items-center'>
                        <img className='w-[40px] mr-1' src={logoimg} alt="" />
                        <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>HERO.IO</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className='font-semibold'>Home</NavLink></li>
                    <li><NavLink to='/app-products' className='font-semibold'>Apps</NavLink></li>
                    <li><NavLink to='/install-app' className='font-semibold'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/imuimuimran"
                    target="_blank"
                    className="btn border-none bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white relative">
                    <span className='w-[20px] h-[20px] bg-white rounded-full relative mr-1'>
                        <GithubIcon className='text-[#632EE3] w-[18px] h-[18px] text-justify fill-[#632EE3] absolute bottom-[-1px] ml-[1px]'></GithubIcon>
                    </span>
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;