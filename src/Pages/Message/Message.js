import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Message = () => {

    const { data: booking = [], refetch, isLoading } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order`)
            const data = await res.json();
            return data
        }
    })

    console.log(booking)

    return (
        <div>
            <div>
                <div className='flex justify-around'>
                    <h1 className='mb-10 text-start text-3xl '>Order Summary</h1>
                    <p className='font-semibold'>Jan 2022- July 2022</p>
                    <p className='font-semibold'>Last 7 Month</p>
                    <p className='font-semibold'>Some Period last Year</p>
                </div>
                <AreaChart width={1700} height={450} data={booking}>
                    <Area type="monotone" dataKey="price" stackId="1" stroke="#7552cc" fill="#7552cc" />
                    <XAxis dataKey='productName' />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </div>
        </div>
    );
};

export default Message;