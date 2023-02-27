import React from 'react';

import phone from '../../../assets/People/people4.webp'
import watch from '../../../assets/People/children.webp'
import laptop from '../../../assets/People/prople6.jpg'
import headPhone from '../../../assets/People/prople7.jpg'
import camera from '../../../assets/People/prople8.jpg'
import monitor from '../../../assets/People/prople10.jpg'

import InfoCard from './InfoCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const InfoCards = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://e-shop-server-tanvirrifat1.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])



    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <h1 className='text-4xl text-center '>Here our Category Collections</h1>
            </div>
            <div className='grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
                {
                    categories.map(category =>
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='group relative w-full'>
                            <div style={{ backgroundImage: `url(${category.image})` }} id='Style-shadow'
                                className={`card card-side h-56 bg-cover shadow-xl ml-2 bg-base-100 hover:scale-110 transition duration-300 ease-in-out`}>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold">{category.categoryName}</h2>
                                </div>

                            </div>
                            <Link to={`/products/category/${category.categoryId}`}>
                                <div className='flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-500'>
                                    <button className=" max-w-xs hover:scale-110 rounded-2xl transition duration-500 btn ease-in-out w-full btn-secondary">{category.categoryName}</button>
                                </div>
                            </Link>
                        </div >)
                }
            </div>
        </div>
    );
};

export default InfoCards;