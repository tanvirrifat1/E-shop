import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const products = useLoaderData()
    return (
        <div className='mx-auto container'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    products && products.map(product => {
                        const { description, name, photoURL, productName, time, } = product
                        return (
                            <div >
                                <div className="card card-compact  bg-base-100 shadow-xl">
                                    <figure><img src={photoURL} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{productName}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
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