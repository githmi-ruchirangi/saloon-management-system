import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
    const [service, setService] = useState(null);

    // Use today's date if selectedDate is not provided
    const today = new Date();
    const currentDate = selectedDate || today;
    const date = format(currentDate, 'PP');

    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`https://gentlemans-cut-server.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        },
        enabled: !!currentDate // Only run query if currentDate is valid
    });

    return (
        <div className='mt-16'>
            <p className='text-center text-2xl font-bold text-primary'>
                Make your appointment on {format(currentDate, 'PP')}
            </p>

            <div className='c_padding grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {appointmentOptions.map(option => (
                    <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setService={setService}
                    />
                ))}
            </div>
            {service && (
                <BookingModal
                    service={service}
                    setService={setService}
                    refetch={refetch}
                    selectedDate={currentDate}
                />
            )}
        </div>
    );
};

export default AvailableAppointment;
