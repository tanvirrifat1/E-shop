import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AllProductModal from './AllProductModal';
import AllProducts from './AllProducts';

const Product = () => {
    const navigate = useNavigate()
    const products = useLoaderData()
    const [product, setProduct] = useState(null)
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
                    setProduct={setProduct}
                ></AllProductModal>
            }
            <div>
            </div>
        </div>
    );
};

export default Product;