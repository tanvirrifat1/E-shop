import React from 'react';

import phone from '../../../assets/icon/phone.jpg'
import watch from '../../../assets/icon/smartWatch.jpg'
import laptop from '../../../assets/icon/Laptop-With-Windows.jpg'
import headPhone from '../../../assets/icon/headphone-icon.jpg'
import camera from '../../../assets/icon/Camera.jpg'
import monitor from '../../../assets/icon/computer-monitor-.jpg'

import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Phone',
            description: 'A mobile phone, cellular phone, cell phone, cellphone.....',
            icon: phone,

        },
        {
            id: 2,
            name: 'Watch',
            description: 'A smartwatch is a wearable computer in the form of a watch.....',
            icon: watch,
        },
        {
            id: 3,
            name: 'Laptop',
            description: 'A laptop is a personal computer that can be easily moved..... ',
            icon: laptop,

        },
        {
            id: 4,
            name: 'HeadPhone',
            description: 'Headphones are a pair of small loudspeaker drivers worn on ..... ',
            icon: headPhone,

        },
        {
            id: 5,
            name: 'Camera',
            description: 'camera, in photography, device for recording an image..... ',
            icon: camera,

        },
        {
            id: 6,
            name: 'Monitor',
            description: 'It is used to display images, text, video, and graphics information..... ',
            icon: monitor,

        },
    ]

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mt-8 '>Here is all Tech Product Demo</h1>
            <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;