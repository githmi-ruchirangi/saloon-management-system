import React from 'react';
import "./AppointmentBanner.css";
import { DayPicker } from 'react-day-picker';
import AppointmentImg from '../../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg';
import 'react-day-picker/dist/style.module.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    const classNames = {
        day_today: 'my-today',
        day_selected: 'my-selected', 
        day_disabled: 'my-disabled',
    };

    const SizeNav = {
        color: "white",
        fontFamily: "'Roboto Condensed', sans-serif"
    };

    return (
        <header style={SizeNav} className='my-6'>
            <div className="hero">
                <div className="hero-content h_padding flex-col lg:flex-row-reverse">
                    <img src={AppointmentImg} alt="Appointment" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='xl:mr-40 lg:mr-10 md:mr-6 sm:w-full'>
                        <DayPicker  
                            mode='single'
                            classNames={classNames}
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
