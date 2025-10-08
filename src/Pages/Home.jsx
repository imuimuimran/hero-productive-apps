import React from 'react';
import { useLoaderData } from 'react-router';
import googlePlayImg from '../assets/google-play.png';
import appStoreImg from '../assets/app-store.png';
import mobileImg from '../assets/hero.png'
import AppCard from '../Components/AppCard';

const Home = () => {
    const appPrdts = useLoaderData();

    const handleGooglePlayStoreClick = () => {
        window.open("https://play.google.com/", "_blank");
    };
    const handleAppStoreClick = () => {
        window.open("https://www.apple.com/app-store/", "_blank");
    };


    return (
        <div className=''>

            {/* Banner Part */}
            <div className='text-center container mx-auto px-4 flex flex-col justify-center items-center'>
                <h1 className='text-[#001931] text-2xl font-extrabold md:text-3xl lg:text-4xl'>We Build <br /> <span className='bg-clip-text text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-sm pt-3 md:w-10/12 lg:w-8/12 xl:w-6/12'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='mt-5'>
                    <button onClick={handleGooglePlayStoreClick} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-2"><img className='w-3 md:w-4 lg:w-5 xl:w-6' src={googlePlayImg} alt="" /> Google Play</button>
                    <button onClick={handleAppStoreClick} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img className='w-3 md:w-4 lg:w-5 xl:w-6' src={appStoreImg} alt="" /> App Store</button>
                </div>
                <div className='md:w-10/12 lg:w-8/12 xl:w-6/12 mt-5'>
                    <img src={mobileImg} alt="" />
                </div>

                {/* Trusted Part */}
                <div className='text-white text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-[100vw] py-10'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Trusted by Millions, Built for You</h2>
                    <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center items-center md:gap-15 lg:gap-20 xl:gap-25 mt-7'>
                        <div>
                            <p className='text-xs font-thin'>Total Downloads</p>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2'>29.6M</h1>
                            <p className='text-xs font-thin'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-xs font-thin'>Total Reviews</p>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2'>906K</h1>
                            <p className='text-xs font-thin'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-xs font-thin'>Active Apps</p>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2'>132+</h1>
                            <p className='text-xs font-thin'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

                {/* Trending App Part */}
                <div className='text-center py-10'>
                    <h2 className='text-[#001931] text-2xl font-bold'>Trending Apps</h2>
                    <p className='text-[#627382] text-sm pt-3'>Explore All Trending Apps on the Market developed by us</p>

                    {/* Product card */}
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                appPrdts.map(appPrdt => (
                                    <AppCard key={appPrdt.id} appPrdt = {appPrdt}></AppCard>    
                                )
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;