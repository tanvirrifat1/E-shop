import React from 'react';
import { Link } from 'react-router-dom';
import './OrderOption.css'

const OrderOption = ({ option, setTreatment }) => {
    const { name, slots, image, price } = option;
    return (
        <div className='p-4 rounded-xl' data-aos="zoom-in" data-aos-duration="3000">
            <div className="card shadow-xl Style-box">
                <figure className='h-[300px]'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center font-semibold'>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p className='text-center font-semibold'>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                    <p className='text-center font-semibold'>{price}</p>
                    <div className="card-actions justify-center">
                        <div className='flex justify-center p-6'>
                            <h2 className="card-title text-2xl">{name}</h2>
                        </div>
                        <label
                            onClick={() => setTreatment(option)}
                            disabled={slots.length === 0}
                            htmlFor="openModal"
                            className=" btn btn-primary w-full text-white"
                        >Buy Now</label>
                        <div className='text-start'>
                            <Link to='feedback'>
                                <a className="link link-success">FeedBack Here</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;