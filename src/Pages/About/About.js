import React from 'react';

import img from '../../assets/about/phone.webp'
import img1 from '../../assets/about/Email3.png'

const About = () => {
    return (
        <div>
            <div>
                <div>
                    <section className=" mt-6 bg-base-200">
                        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                            <h2 className="text-2xl font-semibold sm:text-4xl flex justify-center">FAQ</h2>
                            <div className="space-y-4 text-xl rounded-xl">
                                <details className="w-full border " open="">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">Will i get Any job offer if i join as a trainee</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">As soon as you've completed our comprehensive online trainings, you can be invited for interviews with companies which is a great way to find your perfect job.</p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i get in touch with you</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Feel free to contact us by sending an email at Nageena@vlaunchu.com or call us on +91 99720 98197. </p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How does Vlaunchu do?</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Vlaunchu has various services to cater to the needs of different target markets. We have business consultation and HR consultancy, provide trainings and IT& Web Development services , we also have a Digital Marketing wing to boost an individual or company's visibility through Ad campaigns and Social Media Marketing. </p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i be a part of Vlaunchu?</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">We are always on the lookout for talent - be it fresh graduates, freelancers, people who want to start their own business, or companies looking to hire talents. Interested in becoming a part of Vlaunchu? Don't wait - fill up this form now!!! bit.ly/vlaunchu</p>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="py-6 ">
                        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                            <div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className=''>
                                            <h4 className='text-xl'>Phone</h4>
                                            <p className='mt-2'>+91 0215641564</p>
                                            <div className="card-actions justify-end">
                                                <img className='h-32 w-32' src={img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl mt-2">
                                    <div className="card-body">
                                        <div className=''>
                                            <h4 className='text-xl'>Email</h4>
                                            <p className='mt-2'>tom@gmail.com</p>
                                            <div className="card-actions justify-end">
                                                <img className='h-32 w-32' src={img1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div>
                                    <label for="name" className="text-sm">name</label>
                                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded" />
                                </div>
                                <div>
                                    <label for="email" className="text-sm">Email</label>
                                    <input id="email" type="email" className="w-full p-3 rounded" />
                                </div>
                                <div>
                                    <label for="phone" className="text-sm">Phone</label>
                                    <input id="phone" type="number" className="w-full p-3 rounded" />
                                </div>
                                <div>
                                    <label for="message" className="text-sm">Message</label>
                                    <textarea id="message" rows="3" className="w-full p-3 rounded"></textarea>
                                </div>
                                <button className="btn  btn-primary w-full">send your message </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;