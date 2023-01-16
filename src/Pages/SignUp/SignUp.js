import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import img from '../../assets/login/signIn.webp'
import useToken from '../../Hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signUpError, setSignUpError] = useState('')
    const { createUser, emailVerify, updateUser, GoogleLogin, loading } = useContext(AuthContext)

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const handleSignUp = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                emailVerify()
                toast.success('Successfully User create')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message)
            })
    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user?.email);
                // navigate('/')
                setCreatedUserEmail(user.email)
            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }



    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7'>
                            <h2 className="text-xl text-center font-semibold">Sign Up</h2>
                            <form onSubmit={handleSubmit(handleSignUp)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Name</span> </label>
                                    <input type="text"
                                        {...register("name")}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Email</span> </label>
                                    <input type="email"
                                        {...register("email", {
                                            required: 'Email is required'
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.email && <p className='text-error'>{errors?.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Password</span> </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 5, message: 'Password must be 5 characters long' },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.password && <p className='text-error'>{errors?.password?.message}</p>}
                                </div>

                                <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                                {signUpError && <p className='text-red-600'>{signUpError} </p>}
                                <p className='mt-2'>Already have an Account <Link className='text-primary' to='/login'>Please Login</Link></p>
                                <div className="divider">OR</div>
                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;





