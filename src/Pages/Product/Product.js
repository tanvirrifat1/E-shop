import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';

const Product = () => {
    const products = useLoaderData()
    const [loading, setloading] = useState(false)
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
                                            <h2 className="text-xl font-semibold text-white">Product Name: <span className='text-green-500'>{productName}</span></h2>
                                            <p className="text-2xl text-white">price: $<span className='text-green-500'>{price}</span></p>
                                        </div>
                                        <div className='mt-4'>
                                            <LoadingButton
                                                type="submit"
                                                className='btn btn-accent mt-3 w-full'
                                                value='Send'
                                            >
                                                {loading ? <SmallSpinner /> : 'submit'}
                                            </LoadingButton>
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