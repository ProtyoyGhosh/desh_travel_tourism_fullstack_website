import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner">
                <div className="row">
                    <div className="col-md-6 banner-heading mb-5">
                        <div className="banner-content mt-5">
                            <h1 style={{ fontSize: '70px', fontWeight: '700' }} className=' ms-5'>Welcome To <span style={{ 'color': 'green' }}>Bangladesh!</span> </h1>
                            <p style={{ fontSize: '28px', fontWeight: '500' }} className='ms-3'>An unspoiled land where you'll hardly meet another tourist </p>
                            <p className='ms-3'>Desh Travel brings you the places to visit in Bangladesh. We will guide you for visiting the tourist’s spots, historical places & ecotourism sites in Bangladesh</p>
                            <Link to='/aboutus'><button className='btn btn-success m-2'>About us</button></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-img mt-5">
                            <img className='w-75' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;