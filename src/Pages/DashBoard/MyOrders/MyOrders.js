import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl  mb-6'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings?.map((book, i) =>
                            <tr >
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=sph" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <th>{i + 1}</th>
                                <td>{book.userName}</td>
                                <td>{book.product}</td>
                                <td>{book.orderDate}</td>
                                <td>{book.slot}</td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;