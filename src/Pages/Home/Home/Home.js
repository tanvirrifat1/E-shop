import React from 'react';
import InfoCards from '../InfoCard/InfoCards';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-5'>
            <Slider></Slider>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Home;