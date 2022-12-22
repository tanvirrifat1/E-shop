import React from 'react';

import phone from '../../../assets/icon/phone.jpg'
import watch from '../../../assets/icon/smartWatch.jpg'
import laptop from '../../../assets/icon/Laptop-With-Windows.jpg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Phone',
            description: 'A mobile phone, cellular phone, cell phone, cellphone',
            icon: phone,

        },
        {
            id: 2,
            name: 'Watch',
            description: 'A smartwatch is a wearable computer in the form of a watch',
            icon: watch,
        },
        {
            id: 3,
            name: 'Laptop',
            description: 'A laptop is a personal computer that can be easily moved ',
            icon: laptop,

        },
    ]

    return (
        <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;