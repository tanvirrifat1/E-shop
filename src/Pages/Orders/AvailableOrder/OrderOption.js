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
                            disabled={slots.length === 0}
                            htmlFor="openModal"
                            className=" p-4 w-full flex justify-center rounded-xl font-semibold text-white hover:text-white bg-blue-600 hover:bg-green-500"
                        >Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;