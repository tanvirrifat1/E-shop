import React from 'react';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Navigate, useLoaderData } from 'react-router-dom';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';

const Product = () => {
    <div className='flex '>
        <div onClick={() => Navigate(-1)}>
            <p className='text-black text-3xl  my-2'><BsFillArrowLeftCircleFill /></p>
        </div>

    </div>

    const products = useLoaderData()
    const [loading, setloading] = useState(false)
    console.log(products)
    return (
        <div className='mx-auto container'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    products && products.map(product => {
                        const { description, name, photoURL, productName, time, price } = product
                        return (
                            <div className='p-6'>
                                <div className="max-w-xs rounded-md shadow-md bg-base-content">
                                    <img src={photoURL} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            {/* <h2 className="text-xl font-semibold text-white">Product Name: <span className='text-green-500'>{productName}</span></h2>
                                            <p className="text-2xl text-white">price: $<span className='text-green-500'>{price}</span></p> */}
                                        </div>
                                        <div className='mt-4'>
                                            <LoadingButton
                                                type="submit"
                                                className='btn btn-accent mt-3 w-full'
                                                value='Send'
                                            >
                                                {loading ? <SmallSpinner /> : 'buy'}
                                            </LoadingButton>
                                        </div>

                                        {/* The button to open modal */}
                                        <label htmlFor="buyNowModal" className="hover:text-gray-100 w-full btn bg-gradient-to-r from-primary to-secondary text-white">Details</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="buyNowModal" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box relative">

                                                <div className="card flex justify-center bg-base-100 ">
                                                    <figure><img src={photoURL} alt="Shoes" /></figure>
                                                </div>

                                                <label htmlFor="buyNowModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="text-lg mt-2 font-bold">Product Name: <span className='text-green-500'>{productName}</span></h3>
                                                <h3 className="text-lg font-bold">Price: <span className='text-green-500'> ${price}</span></h3>
                                                <h3 className="text-lg font-bold">User Name: <span className='text-green-500'>{name}</span></h3>
                                                <p className="py-2 font-semibold">product quality: {description}</p>
                                                <p className=" font-semibold">product launch time: {time}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Product;