import React from 'react';
import bgheder from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {
   
    return (
        <div style={
            {
                background: `url(${bgheder})`
            }

            }className="hero min-h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='new' />
                <div>
                  <DayPicker
                   mode="single"
                   selected={date}
                   onSelect={setDate}
                  />
                 {/* <p>You picked {format(date, 'PP')}</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;