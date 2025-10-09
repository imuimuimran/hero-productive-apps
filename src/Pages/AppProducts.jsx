import React, { useEffect, useState } from 'react';
import useAppProducts from '../Hooks/useAppProducts';
import AppCard from '../Components/AppCard';
import appErrorImg from '../assets/app-error.png'

const AppProducts = () => {
    const { apProducts } = useAppProducts()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const [searchAppProducts, setSearchAppProducts] = useState(apProducts);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            const searchTriming = search.trim().toLowerCase();

            if (searchTriming) {
                setSearchAppProducts(
                    apProducts.filter(app =>
                        app.title.toLowerCase().includes(searchTriming)
                    )
                );
            } else {
                setSearchAppProducts(apProducts);
            }

            setLoading(false); 
        }, 500); 

        return () => clearTimeout(timer);
    }, [search, apProducts]);

    return (
        <div className='container mx-auto px-4'>

            <div className=''>
                <h2 className='text-[#001931] text-2xl font-bold text-center'>Our All Applications</h2>
                <p className='text-[#627382] text-sm pt-3 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex justify-between items-center mt-10'>

                    <div>
                        <h2 className='text-base font-semibold'><span>({searchAppProducts.length})</span>Apps Found</h2>
                    </div>

                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)}
                                type="search"
                                placeholder="Search Apps" />
                        </label>
                    </div>
                </div>

                {loading ? (
                    <div className='flex justify-center items-center mt-10'>
                        <span className="loading loading-bars text-[#632EE3] loading-xl"></span>
                        <p className='ml-3 text-[#627382]'>Searching...</p>
                    </div>
                ) : searchAppProducts.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                        {searchAppProducts.map(appPrdt => (
                            <AppCard key={appPrdt.id} appPrdt={appPrdt} />
                        ))}
                    </div>
                ) : (
                    <div className='mt-10 flex justify-center items-center'>
                        <img src={appErrorImg} alt="" />
                    </div>
                )}

            </div>
        </div>

    );
};

export default AppProducts;