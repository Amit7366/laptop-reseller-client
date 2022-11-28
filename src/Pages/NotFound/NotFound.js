import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/404_animation.gif';

const NotFound = () => {
    return (
        <div>
            <img src={NotFoundImage} alt="" className='mx-auto'/>
            <div className='flex justify-center my-3'>
            <Link to={'/'} className='btn btn-outline mx-auto'>Back to Home</Link>
            </div>
            
        </div>
    );
};

export default NotFound;