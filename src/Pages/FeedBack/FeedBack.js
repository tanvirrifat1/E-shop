import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import image from '../../assets/login/review.webp'
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';


const FeedBack = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const imgKey = process.env.REACT_APP_IMG_key

    const handleReview = data => {
        data.preventDefault()
        setLoading(true)
        const image = data.target.image.files[0]
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?&key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const form = data.target;
                const name = form.name.value;
                const email = form.email.value;
                const image = imgData.data.url;
                const description = form.description.value;

                const review = {
                    name,
                    email,
                    image,
                    description
                }

                fetch(`http://localhost:5000/feedback`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('FeedBack Confirmed')
                            form.reset()
                            refetch()
                            setLoading(false)
                        }
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    const { data: feedbacks = [], refetch } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json();
            return data;
        }
    })

    return (

        <div
            style={{ backgroundImage: `url("https://img.freepik.com/free-vector/review-rating-isometric-landing-page-banner_107791-1024.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.2.1908891225.1665030381&semt=sph")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='flex flex-col justify-center '>
            <div>
                <div onClick={() => navigate(-1)}>
                    <p className='text-white text-3xl p-4 my-4'><BsFillArrowLeftCircleFill /></p>
                </div>
                <form onSubmit={handleReview} className='m-6 p-16 max-w-xl mx-auto'>
                    <div className=' gap-4'>
                        <div className=''>
                            <p className='my-1 text-white'>Name</p>
                            <input name="name" type="text" placeholder="Last Name" className="input   bg-white text-black input-ghost w-full  input-bordered input-primary " />
                        </div>
                        <div className=''>
                            <p className='my-1 text-white'>Email</p>
                            <input name="email" type="text" placeholder="Your email" className="  bg-white text-black input input-ghost w-full  input-bordered input-primary " />
                        </div>
                        <div className=''>
                            <p className='my-1 text-white'>Image</p>
                            <input name="image" type="file" placeholder="Your Photo" className="  bg-white text-black input input-ghost w-full  input-bordered input-primary " />
                        </div>
                    </div>
                    <div>
                        <p className='my-1 text-white'>Description</p>
                        <textarea name='description' className="textarea  text-black  bg-white  textarea-primary h-24 w-full" placeholder="Description" required></textarea>
                    </div>
                    {/* <input className=' bg-white w-full btn mt-4 btn-active btn-info' type="submit" value="submit" /> */}

                    <div className='mt-4'>
                        <LoadingButton
                            type="submit"
                            className='btn btn-accent mt-3 w-full'
                            value='submit'
                        >
                            {loading ? <SmallSpinner /> : 'submit'}
                        </LoadingButton>
                    </div>

                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6'>
                {feedbacks && feedbacks.map(feedback => {
                    const { description, name, email, image, _id } = feedback
                    return (
                        <div key={_id} className="max-w-md p-8 sm:flex shadow-2xl sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{name}</h2>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <p className='text-xl'><AiOutlineMail /></p>
                                        <span className="dark:text-gray-400">{email}</span>
                                    </span>
                                    <span className="flex items-center mt-2 space-x-2">
                                        <p className='text-xl'><MdOutlineDescription /></p>
                                        <span className="dark:text-gray-400">{description}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default FeedBack;