import React from 'react';

const AllProducts = ({ product, setProduct }) => {
    const { categories, description, name, photoURL, price, productName, time } = product

    return (
        <div className='flex justify-center' data-aos="zoom-in">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 w-[480px]">
                <img src={photoURL} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold uppercase tracking-wide">{productName}</h2>
                        <p className="dark:text-gray-100">price $:{price}</p>
                    </div>
                    <label
                        onClick={() => setProduct(product)}
                        htmlFor="openModal"
                        className="hover:text-gray-100 rounded-2xl w-full btn bg-gradient-to-r from-primary to-secondary text-white "
                    >buy</label>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;