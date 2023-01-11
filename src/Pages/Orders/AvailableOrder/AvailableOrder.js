import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import OrderOption from './OrderOption';

const AvailableOrder = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)

    const date = format(selectedDate, 'PP')

    const { data: orderOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['orderOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/OrderOptions?date=${date}`)
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16' data-aos="zoom-in" data-aos-duration="3000">
            <p className='text-center text-primary font-bold text-xl '>Please Selected Your Available Order Date : {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {orderOptions.map(option => <OrderOption
                    key={option._id}
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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableOrder;