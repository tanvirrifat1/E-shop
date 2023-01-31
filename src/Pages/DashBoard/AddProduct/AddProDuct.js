import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProDuct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const imgKey = process.env.REACT_APP_IMG_key

    const items = ["mans", "children", "woman",]

    const handleAddProduct = (data) => {
        const productName = data.productName
        const price = data.price
        const categories = data.categories
        const description = data.description;
        const time = new Date().toLocaleString();


        const productInfo = {
            productName,
            name: user.displayName,
            sellerEmail: user.email,
            price,
            categories,
            description,
            time,
        }

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?&key=${imgKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const photoURL = imageData.data.url;
                    productInfo.photoURL = photoURL;
                    addProduct(productInfo)
                }
                console.log(imageData)
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const addProduct = (productInfo) => {
        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Product successfully added');
                }
            })
    }

    return (
        <div>
            <div>
                <h2 className='text-4xl my-3 text-center font-semibold'>Add Product</h2>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)} className='space-y-6 ng-untouched ng-pristine ng-valid p-6' >
                <div className='space-y-4'>
                    <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input type="text" className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("productName", {
                                required: "Product Name is required"
                            })} />

                        </div>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input type="number"
                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("price", {
                                    required: "Product Price is required"
                                })} />
                        </div>
                    </div>
                    <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Categories</span>
                            </label>
                            <select defaultValue={''}
                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("categories", {
                                    required: "Brand is required"
                                })}>
                                <option value={''} disabled selected>Select Categories</option>
                                {
                                    items?.map((brand, i) => <option
                                        key={i}
                                        value={brand}
                                    >{brand}</option>)
                                }
                            </select>

                        </div>
                        <div className="form-control w-full md:w-6/12 lg:w-6/12">
                            <label className="label">
                                <span className="label-text font-bold">Product Image</span>
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("image", {
                                    required: "Image is required"
                                })}
                                required type='file' id='image' name='image' accept='image/*'
                            />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Sort Description</span>
                        </label>
                        <textarea className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("description", {
                            required: "description is required"
                        })}></textarea>
                    </div>
                </div>
                <button className="btn w-full btn-primary">Submit</button>

            </form>
        </div>
    );
};

export default AddProDuct;