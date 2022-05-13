import React from 'react';
import ctaction from '../../assets/images/treatment.png'

const CallToAction = () => {
    return (
        <div>
            <div className="hero mb-2">
                <div className="hero-content flex-col lg:flex-row">
                        <img src={ctaction} className="max-w-sm rounded-lg shadow-2xl mr-14" alt='Call to action'/>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care,<br/>on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-blod">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;