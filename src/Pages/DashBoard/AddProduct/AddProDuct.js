import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SmallSpinner from '../../LoadingButton/SmallSpinner/SmallSpinner';

const AddProDuct = () => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)
    const imgKey = process.env.REACT_APP_IMG_key

    // const items = ["mans", "children", "woman",]

    const handleAddProduct = (data) => {
        setLoading(true)
        const productName = data.productName
        const price = data.price
        const categoryId = data.category
        const description = data.description;
        const time = new Date().toLocaleString();


        const productInfo = {
            productName,
            name: user.displayName,
            user,
            sellerEmail: user.email,
            price,
            categoryId,
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
                    console.log(productInfo)
                    setLoading(false)

                }
                console.log(imageData)
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const addProduct = (productInfo) => {
        fetch(`https://e-shop-server-tanvirrifat1.vercel.app/addProduct`, {
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
                    reset()
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
                                className='w-full px-3 py-3 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("category", {
                                    required: "Brand is required"
                                })}>
                                <option value={''} disabled selected>Select Categories</option>
                                <option value='1'>Mens</option>
                                <option value='2'>Children</option>
                                <option value='3'>Womans</option>
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

                <div className='mt-4'>
                    <LoadingButton
                        type="submit"
                        className='btn btn-accent mt-3 w-full'
                        value='Send'
                    >
                        {loading ? <SmallSpinner /> : 'submit'}
                    </LoadingButton>
                </div>

            </form>
        </div>
    );
};

export default AddProDuct;