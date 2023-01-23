import React from 'react';
import image from '../../assets/login/review.webp'

const FeedBack = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url("https://img.freepik.com/free-vector/review-rating-isometric-landing-page-banner_107791-1024.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.2.1908891225.1665030381&semt=sph")` }}
                className='flex justify-center '>
                <form className='m-6 p-16 max-w-xl '>
                    <div className=' gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className=" mt-2 bg-white text-black input input-ghost w-full  input-bordered input-primary " />
                        <input name="lastName" type="text" placeholder="Last Name" className="input  mt-2 bg-white text-black input-ghost w-full  input-bordered input-primary " />
                        <input name="email" type="text" placeholder="Your email" className=" mt-2 bg-white text-black input input-ghost w-full  input-bordered input-primary " readOnly />
                    </div>
                    <textarea name='message' className="textarea  text-black mt-2 bg-white  textarea-primary h-24 w-full" placeholder="Description" required></textarea>
                    <input className='mt-2 bg-white w-full btn btn-active btn-info' type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default FeedBack;