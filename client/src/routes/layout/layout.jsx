import React from 'react'
import './layout.scss';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

const Layout = () => {
  return (
    <div className='layout'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='outlet'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout