import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div style={{
                    backgroundColor: '#1abc9c',
                }} className="drawer-side ">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className=" w-80 text-white p-6">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;