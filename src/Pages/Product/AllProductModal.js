import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';

const AllProductModal = ({ product }) => {
    const { categories, description, name, photoURL, price, productName, time } = product
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        // const form = event.target
        // const description = form.description.value
        // const name = form.name.value
        // const photoURL = form.name.photoURL
        // const price = form.price.value
        // const productName = form.productName.value
        // const time = form.time.value

        const booking = {
            description,
            name,
            photoURL,
            price,
            productName,
            time
        }

        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order Confirmed')
                    setLoading(false)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="openModal" className="modal-toggle" />
            <div className="modal ">
                <form onSubmit={handleSubmit}>
                    <div className="modal-box relative my-6 ">
                        <div >
                            <figure className='rounded-2xl'><img src={photoURL} alt="Shoes" /></figure>
                        </div>
                        <label htmlFor="openModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold uppercase mt-4">{productName}</h3>
                        <h3 className="text-lg font-bold">User Name: {name}</h3>
                        <p className="font-semibold">Price: ${price}</p>
                        <p className="font-semibold">Details: {description}</p>
                        <p className="font-semibold">categories: {categories}</p>
                        <p className="font-semibold">Booking time: {time}</p>

                        <div className='mt-4'>
                            <LoadingButton
                                type="submit"
                                className='btn btn-accent mt-3 w-full'
                                value='Send'
                            >
                                {loading ? <SmallSpinner /> : 'submit'}
                            </LoadingButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AllProductModal;