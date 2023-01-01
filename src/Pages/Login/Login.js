import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css'

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 5, message: 'Password must be 5 characters or longer' }
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label">  <span className="label-text  text-black">Forget Password</span> </label>
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p className='mt-2'>New to Create Account <Link className='text-primary ml-2 font-bold' to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-primary w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>

            </div>

        </div>
    );
};

export default Login;