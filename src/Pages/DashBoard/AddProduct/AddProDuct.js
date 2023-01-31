import React from 'react';

const AddProDuct = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl my-3 text-center font-semibold'>Add Product</h2>
            </div>
            <form className='space-y-6 ng-untouched ng-pristine ng-valid p-6' >
                <div className='space-y-4'>
                    <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input type="text" className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' />

                        </div>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input type="number"

                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' />
                        </div>
                    </div>
                    <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Categories</span>
                            </label>
                            <select className="w-full px-8 py-3 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900">
                                <option disabled selected>Select language</option>
                                <option>Mens</option>
                                <option>Children</option>
                                <option>Womans</option>
                            </select>

                        </div>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Product Image</span>
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900'
                                required type='file' id='image' name='image' accept='image/*'
                            />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Sort Description</span>
                        </label>
                        <textarea className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900'></textarea>
                    </div>
                </div>
                <button className="btn w-full btn-outline btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default AddProDuct;