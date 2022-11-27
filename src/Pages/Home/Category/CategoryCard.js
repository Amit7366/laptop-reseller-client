import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {categoryName,categoryImage} = category;
    return (
        <Link to={`category/${categoryName}`} className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={categoryImage} alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="font-semibold text-4xl text-white">{categoryName}</h2>
        </div>
      </Link>
    );
};

export default CategoryCard;