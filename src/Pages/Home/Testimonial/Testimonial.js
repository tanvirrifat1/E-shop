// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import shoe from '../../../assets/fashion-shoes.webp'
import jacket from '../../../assets/jacket.webp'
import pant from '../../../assets/pant.webp'
import tShirt from '../../../assets/t-shirt.webp'
import cap from '../../../assets/cap.webp'
import balt from '../../../assets/balt.jpg'

const Testimonial = () => {
    return (
        <div className="mt-10">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={shoe} />
                        </div>
                    </div>
                    <p>A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function. Though the human foot can adapt to varied terrains and climate conditions, it is still vulnerable to environmental hazards such as sharp rocks and temperature extremes, which shoes protect against. Some shoes are worn as safety equipment, such as steel-toe boots which are required footwear at industrial worksites.</p>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={jacket} />
                        </div>
                    </div>
                    <p>A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. A jacket is generally lighter, tighter-fitting, and less insulating than a coat, which is outerwear.</p>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={pant} />
                        </div>
                    </div>
                    <p>Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W. Davis in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term "blue jeans" had been long in use for various garments including trousers, overalls, and coats, constructed from blue-colored denim.</p>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={tShirt} />
                        </div>
                    </div>
                    <p>A T - shirt(also spelled tee shirt), or tee, is a style of fabric shirt named after the T shape of its body and sleeves.Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.T - shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.The T - shirt evolved from undergarments used in the 19th century and, in the mid - 20th century, transitioned from undergarment to general - use casual clothing.</p>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={cap} />
                        </div>
                    </div>
                    <p>Caps typically have a visor, or no brim at all. They are popular in casual and informal settings, and are seen in sports and fashion. They are typically designed for warmth, and often incorporate a visor to block sunlight from the eyes. They come in many shapes, sizes, and are of different brands.</p>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={balt} />
                        </div>
                    </div>
                    <p>A belt is a loop of flexible material used to link two or more rotating shafts mechanically, most often parallel. Belts may be used as a source of motion, to transmit power efficiently or to track relative movement.</p>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Testimonial;