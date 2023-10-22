import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import "../App.css";

const Header = () => {
  return (
    <header className='flex justify-between py-4 px-4 md:px-20 bg-[#f9f9ff]'>
        <NavLink to={'/'}>
            <img src="./images/logo.PNG" alt="logo" className='h-[50px]' />
        </NavLink>
        <Navbar/>
    </header>
  )
};


export default Header
