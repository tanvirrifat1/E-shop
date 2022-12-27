import React from 'react';
import './OrderOption.css'

const OrderOption = ({ option, setTreatment }) => {
    const { name, slots, image } = option
    return (
        <div>
            <div className="card shadow-xl ">
                <div className='flex justify-center p-6'>
                    <h2 className="card-title text-2xl text-primary">{name}</h2>
                </div>
                <figure className='size'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center'>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                    <div className="card-actions justify-center">
                        <label
                            onClick={() => setTreatment(option)}
                            htmlFor="openModal"
                            className="btn btn-secondary"
                        >Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;