import React, { useState } from 'react';
import shop from '../../../assets/E-shop.webp'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const OrderBanner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())


    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={shop} alt="" className="max-w-sm h-[300px]  rounded-lg shadow-2xl" />
                    <div className='ml-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p className='text-center'>
                            You Have selected date:{format(selectedDate, "PP")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;