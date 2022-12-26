import React from 'react';
import shop from '../../../assets/E-shop.webp'

const OrderBanner = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={shop} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;