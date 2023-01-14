import React from 'react';
import About from '../../About/About';
import Orders from '../../Orders/Orders';
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
            {/* <Collections></Collections> */}
            <Orders></Orders>
            <MakeSmartHuman></MakeSmartHuman>
            <About></About>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;