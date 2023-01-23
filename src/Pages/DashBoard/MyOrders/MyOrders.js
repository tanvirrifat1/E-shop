import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })


    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='ml-1'>
            <h3 className='text-3xl text-center font-semibold my-5 mb-6'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-xl">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings?.map((book, i) =>
                            <tr className='bg-white' key={book._id}>
                                <th>{i + 1}</th>
                                <div className="avatar ">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                                <td>{book.userName}</td>
                                <td>{book.product}</td>
                                <td>{book.orderDate}</td>
                                <td>{book.slot}</td>
                                <td>{book.price}</td>
                                <td> <button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;