import React from 'react';
import Collections from '../Collection/Collections';
import InfoCards from '../InfoCard/InfoCards';
import MakeSmartHuman from '../MakeSmart/MakeSmartHuman';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5 '>
            <Slider></Slider>
            <InfoCards></InfoCards>
            <Collections></Collections>
            <MakeSmartHuman></MakeSmartHuman>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;