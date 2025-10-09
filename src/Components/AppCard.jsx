import React from 'react';
import { Link } from 'react-router';
import { formatNumber } from './FormatNumber';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'

const AppCard = ({ appPrdt }) => {

    const { id, title, image, companyName, downloads} = appPrdt;

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

    const avg = calculateAverageRating(appPrdt.ratings);

    return (

        <Link to={`/app-detail/${id}`}>
        <div className="card bg-white shadow-md hover:scale-105 transition ease-in-out ">
            <figure className='p-3'>
                <img
                    className='object-cover rounded-2xl'
                    src={image}
                    alt="" />
            </figure>
            <div className="text-left p-3">
                <h2 className="text-sm font-semibold">
                    {title}: {companyName}
                </h2>
                <div className="flex justify-between items-center mt-3">
                    <div className="bg-[#f1f5e8] p-2 rounded-sm flex justify-between items-center gap-3"><img className='w-[15px] h-[15px]' src={downloadImg} alt="" /><p className='text-[#00d390]'>{formatNumber(downloads)}</p></div>
                    <div className="bg-[#fff0e1] p-2 rounded-sm flex justify-between items-center gap-3"><img className='w-[15px] h-[15px]' src={ratingImg} alt="" /><p className='text-[#ff8811]'>{avg}</p></div>
                </div>
            </div>
        </div>
        </Link>

    );
};

export default AppCard;