import React from 'react'
import './layout.scss';
import { Outlet , Navigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

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

function Requireauth() {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login"  />;
  }
  return (
    currentUser && (
      <div className='layout'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='outlet'>
            <Outlet/>
        </div>
      </div>
    )
  )
}

export { Layout , Requireauth };