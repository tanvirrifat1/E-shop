import React from 'react';
import './InfoCard.css'

const InfoCard = ({ card }) => {
    const { name, description, icon, } = card
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div>
                <div >
                    <div style={{ backgroundImage: `url(${icon})` }} id='Style-shadow'
                        className={`card card-side h-56 bg-cover shadow-xl ml-2 bg-base-100 hover:scale-110 transition duration-300 ease-in-out`}>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{name}</h2>
                        </div>

                    </div>
                    <div className='flex justify-center my-4'>
                        <button className="btn btn-outline w-[350px] btn-error">{name}</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;