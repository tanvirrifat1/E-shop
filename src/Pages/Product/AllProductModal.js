import React from 'react';

const AllProductModal = ({ product }) => {
    console.log(product)
    const { categories, description, name, photoURL, price, productName, time } = product
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="openModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative my-6">
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
                </div>
            </div>
        </div>
    );
};

export default AllProductModal;