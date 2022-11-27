import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseCard from '../Home/Advertise/AdvertiseCard';

const CategoryProduct = () => {
    const categoryData = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                categoryData.map(category => <AdvertiseCard key={category._id} ad={category}></AdvertiseCard>)
            }
        </div>
    );
};

export default CategoryProduct;