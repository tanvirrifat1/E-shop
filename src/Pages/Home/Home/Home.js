import React from 'react';
import Collections from '../Collection/Collections';
import InfoCards from '../InfoCard/InfoCards';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-5'>
            <Slider></Slider>
            <InfoCards></InfoCards>
            <Collections></Collections>
        </div>
    );
};

export default Home;