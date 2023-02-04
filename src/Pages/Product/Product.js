import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';
import AllProductModal from './AllProductModal';
import AllProducts from './AllProducts';

const Product = () => {
    const navigate = useNavigate()
    const products = useLoaderData()

    const [product, setProduct] = useState(null)

    // fetch(`http://localhost:5000/order`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify()
    // })

    return (
        <div className='mx-auto container'>
            <div onClick={() => navigate(-1)}>
                <p className='text-black text-3xl p-4 my-4'><BsFillArrowLeftCircleFill /></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    products.map(product => <AllProducts
                        key={product._id}
                        setProduct={setProduct}
                        product={product}
                    >
                    </AllProducts>)
                }
            </div>
            {
                product &&
                <AllProductModal
                    product={product}
                ></AllProductModal>
            }
            <div>
            </div>
        </div>
    );
};

export default Product;