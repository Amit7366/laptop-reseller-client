import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle,FaMapMarker } from "react-icons/fa";
const AdvertiseCard = ({ad}) => {
    const {productName,resalePrice,originalPrice,productImage,name,usedPeriod,condition,productLocation,postingTime,category} = ad;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className='h-64'>
            <img src={productImage} alt={productName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {productName}

              {
                 condition == 'good' ? <div className={`badge badge-error text-white`}>{condition}</div> 
                : condition == 'medium' ? <div className={`badge badge-primary text-white`}>{condition}</div>
                : condition == 'best' ? <div className={`badge badge-secondary text-white`}>{condition}</div>
                : ''
              }
              
            </h2>
            <div>
                <h4 className='font-medium text-sm text-green-600'>Resale Price: {resalePrice}</h4>
                <h4 className='font-medium text-sm text-teal-800'>Original Price: {originalPrice}</h4>
                <p className='font-bold text-xs'><span className='text-cyan-600'>Posting Time:</span> {postingTime}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{name} {} <FaCheckCircle className='text-purple-600'></FaCheckCircle> </div>
              <div className="badge badge-outline">used {usedPeriod} year</div>
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline"><FaMapMarker></FaMapMarker> {productLocation}</div>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Book Now</button>
          </div>
        </div>
    );
};

export default AdvertiseCard;