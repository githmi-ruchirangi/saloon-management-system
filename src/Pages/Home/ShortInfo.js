import React from 'react';
import { Link } from 'react-router-dom';
import './ShortInfo.css';

const ShortInfo = () => {
  const SizeNav = {
    color: "white",
    fontFamily: "'Roboto Condensed', sans-serif"
  };

  return (
    <div>
      <div style={SizeNav} className="c_padding grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
        <div className="text-container">
          <h1 className='text-3xl font-bold'>
            Elevate Your Look <br /> with Our Professional Touch for <span className="text-bright-red">Men</span> Only
          </h1>
          <div className="image-wrapper">
            <img src="./images/urban_elegance2.png" alt="Salon" className="salon-image" />
          </div>
        </div>
        <div>
          <p className='text-slate-200 text-sm'>
            <div className='text-slate-200 text-l'>Welcome to Urban Elegance</div><div className='text-slate-400 text-justify'>Your premier destination for exceptional grooming services. 
              Our skilled team offers expert cuts, stylish trims, and personalized treatments for men. 
              Whether you're seeking a sharp new look or a relaxing experience, we've got you covered. 
              Discover our blend of classic and modern styles in a chic, welcoming environment.</div>
          </p>
          <div className="my-3.5 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className='my-3.5'>
              <h1 className='text-xl font-bold text-slate-200'>SINCE 2015</h1>
              <p className='my-3.5 text-slate-400 text-sm '>Founded in 2020, Urban Elegance offers top-notch grooming services exclusively for men.</p>
              <button className="btn btn-primary text-white"><Link to="/about">Learn More</Link></button>
            </div>
            <div className='my-3.5'>
              <h1 className='text-xl font-bold text-slate-200'>1000+ CLIENTS</h1>
              <p className='my-3.5 text-slate-400 text-sm text-justify'>We've had the pleasure of serving a wide variety of clients, including top industry professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortInfo;
