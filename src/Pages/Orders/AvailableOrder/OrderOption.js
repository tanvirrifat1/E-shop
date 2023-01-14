import React from 'react';
import './OrderOption.css'

const OrderOption = ({ option, setTreatment }) => {
    const { name, slots, image } = option;
    return (
        <div className='p-4 rounded-xl' data-aos="zoom-in" data-aos-duration="3000">
            <div className="card shadow-xl Style-box">
                <figure className='size'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center'>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;