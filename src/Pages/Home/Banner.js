import React from 'react';
import bgheder from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div style={
            {
                background: `url(${bgheder})`
            }

            }className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='new' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-blod">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;