import React from 'react';

const AppCard = ({ appPrdt }) => {

    const { title, image, companyName, downloads, ratings } = appPrdt;
    return (


        <div className="card bg-white shadow-md hover:scale-105 transition ease-in-out">
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
                    <div className="bg-[#f1f5e8] p-2 rounded-sm"><p className='text-[#00d390]'>{downloads}</p></div>
                    <div className="bg-[#fff0e1] p-2 rounded-sm"><p className='text-[#ff8811]'>{downloads}</p></div>
                </div>
            </div>


        </div>

    );
};

export default AppCard;