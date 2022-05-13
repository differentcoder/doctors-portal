import React from 'react';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <div className='px-12'>
                <Info></Info>
                <Services></Services>
                <CallToAction></CallToAction>
            </div>
                <MakeAppointment></MakeAppointment>
             <div  className='px-12'>
                <Testimonials></Testimonials>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;