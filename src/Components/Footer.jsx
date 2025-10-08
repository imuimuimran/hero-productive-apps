import React from 'react';
import logoimg from '../assets/logo.png'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white py-10 ">

            <div className='container mx-auto px-4'>


                <div className='flex justify-between items-center '>
                    <div className='flex justify-start items-center'>
                        <img className='w-[40px] mr-1' src={logoimg} alt="" />
                        <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>HERO.IO</h2>
                    </div>
                   
                    <div>
                        {/* <h2>Social Links</h2> */}
                        <div className='flex justify-center space-x-4'>
                            
                            <FacebookIcon></FacebookIcon>
                            <YoutubeIcon></YoutubeIcon>
                            <LinkedinIcon></LinkedinIcon>
                            <TwitterIcon></TwitterIcon>
                            <InstagramIcon></InstagramIcon>
                        </div>
                    </div>
                </div>

                <div className="border-line mt-5"></div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Download</h6>
                        <a className="link link-hover">iOS & Android</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Calendar</a>
                        <a className="link link-hover">Web Clipper</a>
                    </nav>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Help center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Integrations</a>
                        <a className="link link-hover">Templates</a>
                    </nav>
                </div>

                <div className='mt-10'>
                    <p className='text-center text-sm'>Copyright @ 2025 - All Right Reserved</p>
                </div>

            </div>


        </footer>
    );
};

export default Footer;