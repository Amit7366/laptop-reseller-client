import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Advertise></Advertise>
            <Category></Category>
        </div>
    );
};

export default Home;