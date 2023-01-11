import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.success('LogOut Successfully') })

            .catch(err => console.log(err))
    }

    const menuItmes = <>
        <li className='font-bold '><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/orders'>Orders</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        {user?.uid ?
            <>
                <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold'><button onClick={handleLogOut}>SignOut</button></li>
            </>
            : <li className='font-bold'><Link to='/login'>Login</Link></li>
        }
        {user?.displayName ?
            <p className='py-4 font-semibold text-green-700 mr-2'>Welcome {user?.displayName} </p>
            :
            <></>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }

    </>


    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItmes}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">E-Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItmes}
                    </ul>
                </div>
                <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;