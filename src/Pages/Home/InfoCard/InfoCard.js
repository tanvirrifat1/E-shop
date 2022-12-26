import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCard.css'

const InfoCard = ({ card }) => {
    const { name, description, icon, } = card
    return (
        <div>
            <div id='Style-shadow' className={`card card-side shadow-xl ml-2 bg-base-100`}>
                <figure ><img className='h-[150px]' src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/details'> <button className="btn btn-primary">Watch</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;