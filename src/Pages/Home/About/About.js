import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../../../assets/about.jpg';

const About = () => {
    return (
        <div className="hero min-h-16 my-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={Info} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Lap Hunter</h1>
      <p className="py-6">Welcome, we know why you are here. You are in the right place. Get the best quality used laptop from the town. We give you special service and 24/7 support. We are the best choice for you.</p>
      <Link to={'/login'} className="btn btn-primary text-white">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default About;