import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, refetch, selectedDate, setTreatment }) => {
    const { name: userName, image, slots, price } = treatment
    const date = format(selectedDate, 'PP')
    console.log(treatment)
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            orderDate: date,
            product: userName,
            userName: name,
            image,
            price,
            slot,
            email,
            phone
        }
        console.log(booking)

        fetch('https://e-shop-server-tanvirrifat1.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success("Order Confirmed")
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="openModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="openModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-xl" >{userName}</h3>

                    <form onSubmit={handleBooking}>
                        <div className="avatar flex justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <p className='text-center font-semibold my-6'>{price}</p>
                        <input type="text" value={date} readOnly className="input input-bordered input-primary mt-4 w-full" />
                        <select name='slot' className="select w-full input-primary mt-3">
                            {
                                slots?.map((slot, i) => <option
                                    key={i}
                                    value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Your Name" className="input input-bordered input-primary mt-3 w-full" />
                        <input name='email' defaultValue={user?.email} readOnly type="text" placeholder="Email Address" className="input input-bordered input-primary mt-3 w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-primary mt-3 w-full" />
                        <button className="btn btn-accent w-full mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;