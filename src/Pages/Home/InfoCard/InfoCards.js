import React from 'react';

import phone from '../../../assets/People/people4.webp'
import watch from '../../../assets/People/children.avif'
import laptop from '../../../assets/People/prople6.jpg'
import headPhone from '../../../assets/People/prople7.jpg'
import camera from '../../../assets/People/prople8.jpg'
import monitor from '../../../assets/People/prople10.jpg'

import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Mens',
            description: 'A mobile phone, cellular phone, cell phone, cellphone.....',
            icon: phone,

        },
        {
            id: 2,
            name: 'Children',
            description: 'A smartwatch is a wearable computer in the form of a watch.....',
            icon: watch,
        },
        {
            id: 3,
            name: 'Womans',
            description: 'A laptop is a personal computer that can be easily moved..... ',
            icon: laptop,

        },
        // {
        //     id: 4,
        // name: 'HeadPhone',
        //     description: 'Headphones are a pair of small loudspeaker drivers worn on ..... ',
        //     icon: headPhone,

        // },
        // {
        //     id: 5,
        // name: 'Camera',
        //     description: 'camera, in photography, device for recording an image..... ',
        //     icon: camera,

        // },
        // {
        //     id: 6,
        // name: 'Monitor',
        //     description: 'It is used to display images, text, video, and graphics information..... ',
        //     icon: monitor,

        // },
    ]

    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <h1 className='text-4xl text-center  '>Here our Customer Reaction</h1>
            </div>
            <div className='grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >

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