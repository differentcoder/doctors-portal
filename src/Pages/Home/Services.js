import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services =[
        {
            _id:1,
            name:'Fluoride Rreatment',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : fluoride
        },
        {
            _id:2,
            name:'cavity Filling',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : cavity
        },
        {
            _id:3,
            name:'Teeth whitening ',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Service</h3>
                <h2 className='text-4xl'>Service we Provice</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                        ></Service>)
                } 
            </div>
            
        </div>
    );
};

export default Services;