import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Shope from '../../../assets/E-shop.webp'
import './MakeSmartHuman.css'

const MakeSmartHuman = () => {
    return (
        <div
            style={{
                backgroundColor: '#16a085',
            }}
        >
            <div className="hero p-10 text-white mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={Shope} className=" rounded-lg lg:w-1/2 shadow-2xl hover:scale-110 transition duration-300 ease-in-out" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">About My-shop</h1>

                        {/* Style will be inherited from the parent element */}
                        <span className='py-6'>
                            <Typewriter
                                words={['An My-shop is an online business that sells a variety of goods and services. My-shops are',
                                    'business-to-consumer oriented. They are just like a retail store but instead of having a physical location, its location is on the internet.',
                                    'location, its location is on the internet.']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </span>
                        {/* <p className="py-6">An My-shop is an online business that sells a variety of goods and services. My-shops are business-to-consumer oriented. They are just like a retail store but instead of having a physical location, its location is on the internet.</p> */}
                        {/* <button className="btn btn-outline btn-warning">Get started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeSmartHuman;