import React from 'react';
import { useEffect } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import About from '../../About/About';
import Orders from '../../Orders/Orders';
import Collections from '../Collection/Collections';
import InfoCards from '../InfoCard/InfoCards';
import MakeSmartHuman from '../MakeSmart/MakeSmartHuman';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='mx-5 '>
            <div className='flex '>
                <div onClick={() => navigate(-1)}>
                    <p className='text-black text-3xl  my-2'><BsFillArrowLeftCircleFill /></p>
                </div>
                <div onClick={() => navigate(1)}>
                    <p className='text-black text-3xl ml-2 my-2'><BsFillArrowRightCircleFill /></p>
                </div>
            </div>
            <Slider></Slider>
            <InfoCards></InfoCards>
            {/* <Collections></Collections> */}
            <Orders></Orders>
            <MakeSmartHuman></MakeSmartHuman>
            <About></About>
            {/* <Testimonial></Testimonial> */}
        </div >
    );
};

export default Home;