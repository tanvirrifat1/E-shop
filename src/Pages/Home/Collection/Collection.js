import React from 'react';
import './Collection.css'

const Collection = ({ cloth }) => {
    const { name, description, img } = cloth
    return (
        <div>
            <div className="card card-compact shadow-xl card-details">
                <figure><img className='size' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;