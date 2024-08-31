import React from 'react';
import './Appointment.css';
import RedLine from '../../Home/RedLine';

import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const SizeNav = {
        color: "white",
        fontFamily: "'Roboto Condensed', sans-serif"
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    
    return (
        <>
           <div className='redline'><RedLine></RedLine></div> 
            <div className="text-container2">
            <h1 className='text-3xl font-bold text-white'>
            What We Provide
          </h1>
          
          <div className="image-wrapper">
            <img src="./images/SERVICE.png" alt="Salon" className="service-image" />
          </div>
            </div>
            
            <div className='service-head' style={SizeNav}>  
                <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <AvailableAppointment selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
        </>
    );
};

export default Appointment;
