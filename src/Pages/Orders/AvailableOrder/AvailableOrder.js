import { format } from 'date-fns';
import React from 'react';

const AvailableOrder = ({ selectedDate }) => {
    return (
        <div className='mt-16'>
            <p className='text-center text-primary font-bold text-xl '>Please Selected Your Available Order Date : {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableOrder;