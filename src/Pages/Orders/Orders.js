import React, { useState } from 'react';
import AvailableOrder from './AvailableOrder/AvailableOrder';
import OrderBanner from './OrderBanner/OrderBanner';

const Orders = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div >
            <OrderBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></OrderBanner>
            <AvailableOrder
                selectedDate={selectedDate}
            ></AvailableOrder>
        </div>
    );
};

export default Orders;