import React from 'react';
import { useParams } from 'react-router';
import useAppProducts from '../Hooks/useAppProducts';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import { formatNumber } from '../Components/FormatNumber';
import RatingsBarChart from '../Components/RatingsBarChart';

const AppDetails = () => {
    const { id } = useParams()
    const { apProducts, dataLoading, error } = useAppProducts();
    const apProduct = apProducts.find(pro => String(pro.id) === id)

    if (dataLoading) return <p>Loading...</p>
    const { title, image, companyName, downloads, reviews, description, ratings } = apProduct

    const calculateAverageRating = (ratings) => {
        let totalStars = 0;
        let totalCounts = 0;

        ratings.forEach((rating, index) => {
            const starValue = index + 1;
            totalStars += starValue * rating.count;
            totalCounts += rating.count;
        });

        return (totalStars / totalCounts).toFixed(1);
    };

    const avg = calculateAverageRating(apProduct.ratings);


    return (
        <div className='container mx-auto px-4'>
            
            {/* Upper part */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 border-b border-b-[#c4c9ce] pb-10'>
                {/* Image Part */}
                <div className='flex justify-center lg:justify-start'>
                    <img className='w-[250px] h-[250px]' src={image} alt="" />
                </div>

                {/* Information Part */}
                <div className='flex flex-col justify-between p-5 w-full'>
                    {/* Title & Company */}
                    <div className='border-b border-b-[#c4c9ce] pb-3'>
                        <h3 className='text-lg font-bold'>
                            {title}: {companyName}
                        </h3>
                        <p className='text-[#627382] text-sm'>
                            Developed by <span className='text-[#632EE3] font-medium'>Productive.Io</span>
                        </p>
                    </div>

                    {/* Stats Part */}
                    <div className='flex justify-between lg:justify-start items-start lg:items-stretch gap-6 lg:gap-8 mt-5'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <img className='w-6 h-6 mb-1' src={downloadImg} alt="Downloads" />
                            <p className='text-[#627382] text-xs'>Downloads</p>
                            <h2 className='text-2xl font-bold'>{formatNumber(downloads)}</h2>
                        </div>

                        <div className='flex flex-col items-center lg:items-start'>
                            <img className='w-6 h-6 mb-1' src={ratingImg} alt="Ratings" />
                            <p className='text-[#627382] text-xs'>Average Rating</p>
                            <h2 className='text-2xl font-bold'>{avg}</h2>
                        </div>

                        <div className='flex flex-col items-center lg:items-start'>
                            <img className='w-6 h-6 mb-1' src={reviewImg} alt="Reviews" />
                            <p className='text-[#627382] text-xs'>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>{formatNumber(reviews)}</h2>
                        </div>
                    </div>

                    {/* Button Part */}
                    <div className='mt-6 lg:mt-auto'>
                        <button className='btn bg-[#00d390] text-white px-6 py-2 rounded-lg hover:bg-[#00b97f] transition'>
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>
            </div>

            {/* Middle Part */}
            <div className="border-b border-b-[#c4c9ce] pb-10">
                <RatingsBarChart ratings={ratings} />
            </div>

            {/* Lower Part */}
            <div className='pt-5'>
                <p className='text-sm font-bold'>Description</p>
                <p className='text-[#627382] text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;