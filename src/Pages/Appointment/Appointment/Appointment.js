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
            <RedLine />  
            <div className='service-head' style={SizeNav}>  
                <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <AvailableAppointment selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
        </>
    );
};

export default Appointment;
