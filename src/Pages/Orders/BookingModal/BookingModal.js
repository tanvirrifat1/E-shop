import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, image, slots } = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            orderDate: date,
            treatment: name,
            userName: name,
            slot,
            email,
            phone
        }
        console.log(booking)
        toast.success("Order Done")
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="openModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="openModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-xl">{name}</h3>

                    <form onSubmit={handleBooking}>
                        <div className="avatar flex justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <input type="text" value={date} readOnly className="input input-bordered input-primary mt-4 w-full" />
                        <select name='slot' className="select w-full input-primary mt-3">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary mt-3 w-full" />
                        <input name='email' type="text" placeholder="Email Address" className="input input-bordered input-primary mt-3 w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-primary mt-3 w-full" />
                        <button className="btn btn-accent w-full mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;