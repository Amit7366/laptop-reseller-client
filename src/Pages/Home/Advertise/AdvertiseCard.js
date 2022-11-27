import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ad}) => {
    const {productName,productPrice,resalePrice,originalPrice,productImage,name,email,usedPeriod,condition} = ad;
    return (
        <Link className="card w-96 bg-base-100 shadow-xl">
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </Link>
    );
};

export default AdvertiseCard;