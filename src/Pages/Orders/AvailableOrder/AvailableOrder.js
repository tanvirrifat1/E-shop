import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import OrderOption from './OrderOption';

const AvailableOrder = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)

    const { data: orderOptions = [] } = useQuery({
        queryKey: ['orderOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/OrderOptions')
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='my-16'>
            <p className='text-center text-primary font-bold text-xl '>Please Selected Your Available Order Date : {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {orderOptions.map(option => <OrderOption
                    key={option.id}
                    option={option}
                    setTreatment={setTreatment}
                ></OrderOption>)}
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableOrder;