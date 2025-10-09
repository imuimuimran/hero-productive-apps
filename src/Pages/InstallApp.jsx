import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import { formatNumber } from '../Components/FormatNumber';
import { toast, ToastContainer } from 'react-toastify';

const InstallApp = () => {
    const [desiredApps, setDesiredApps] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const saveInstalledAppList = JSON.parse(localStorage.getItem('desiredApps'))
        if (saveInstalledAppList) setDesiredApps(saveInstalledAppList)
    }, [])

    const sortedItem = (
        () => {
        if(sortOrder === 'down-asc') {
            return [...desiredApps].sort((a, b) => a.downloads - b.downloads)
        }
        else if(sortOrder === 'down-dsc') {
            return [...desiredApps].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return desiredApps
        }
    }
    ) ()

    const handleUninstallApp = (id) => {
        const installedApps = JSON.parse(localStorage.getItem('desiredApps'));
        let updatedInstalledApps = installedApps.filter(prod => prod.id !== id)
        // setDesiredApps(prev => prev.filter(prod => prod.id !== id))
        setDesiredApps(updatedInstalledApps)
        localStorage.setItem('desiredApps', JSON.stringify(updatedInstalledApps))

        toast.success("App uninstalled successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });

    }

    const calculateAverageRating = (ratings = []) => {
        if (!Array.isArray(ratings) || ratings.length === 0) return "0.0";

        let totalStars = 0;
        let totalCounts = 0;

        ratings.forEach((rating, index) => {
            const starValue = index + 1; // 1 → 5
            totalStars += starValue * rating.count;
            totalCounts += rating.count;
        });

        return totalCounts ? (totalStars / totalCounts).toFixed(1) : "0.0";
    };

    return (
        <div className='container mx-auto px-4'>
            <ToastContainer />

            <div className=''>
                <h2 className='text-[#001931] text-2xl font-bold text-center'>Your Installed Apps</h2>
                <p className='text-[#627382] text-sm pt-3 text-center'>Explore All Trending Apps on the Market developed by us</p>

                <div className='flex justify-between items-center mt-10'>

                    <div>
                        <h2 className='text-base font-semibold'><span>({sortedItem.length})</span>Apps Found</h2>
                    </div>

                    <div>
                        <label className='form-control w-full max-w-xs'>
                            <select className='select select-bordered' value={sortOrder} onChange={event => setSortOrder(event.target.value)}>
                                <option value="none">Sort by downloads</option>
                                <option value="down-asc">Low to High</option>
                                <option value="down-dsc">High to Low</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className='mt-3'>
                    {
                        sortedItem.map(prod =>

                            <div key={prod.id}
                                className="card bg-base-100 shadow-sm mb-3">
                                <div className='flex flex-col space-y-3 md:flex-row md:justify-between items-center p-3'>

                                    <div className='flex flex-col space-y3 md:flex-row items-center'>
                                        <div>
                                            <img className='w-[100px]'
                                                src={prod.image}
                                                alt={prod.title} />
                                        </div>

                                        <div className="ml-2">
                                            <div className='flex'>
                                                <h3 className="font-semibold">{prod.title}:</h3>
                                                <p className='font-semibold ml-1'> {prod.companyName}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="p-2 flex justify-between items-center gap-1"><img className='w-[15px] h-[15px]' src={downloadImg} alt="" /><p className='text-[#00d390]'>{formatNumber(prod.downloads)}</p></div>


                                                <div className="p-2 flex justify-between items-center gap-1">
                                                    <img
                                                        className="w-[15px] h-[15px]"
                                                        src={ratingImg}
                                                        alt="rating icon"
                                                    />
                                                    <p className="text-[#ff8811]">
                                                        {calculateAverageRating(prod.ratings)}
                                                    </p>
                                                </div>

                                                <p className='text-[#627382] text-sm'>{prod.size} MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <button 
                                        onClick={() => handleUninstallApp(prod.id)}
                                        className="btn bg-[#00d390] text-white">Uninstall</button>
                                    </div>

                                </div>

                            </div>

                        )
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default InstallApp;