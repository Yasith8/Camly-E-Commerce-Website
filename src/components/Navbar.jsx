import React from 'react'

import '../components/font.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge/Badge"
import Button from '@mui/material/Button';

function Navbar({cartCount}) {
  return (
    <div>
      <nav className='fixed top-0 left-0 w-screen bg-white'>
        <ul className='flex items-center justify-between py-3 px-8 md:px-[5rem] '>
          <li><h1 className='font-bold scale-150'>Camly<span className='text-orange-500 text-lg'>.</span></h1></li>
          <li>
            <ul className='hidden md:flex md:gap-7'>
              <li className=' text-slate-600 hover:text-black'><a href="#home">Home</a></li>
              <li className=' text-slate-600 hover:text-black'><a href="#about">About</a></li>
              <li className=' text-slate-600 hover:text-black'><a href="#contact">Contact</a></li>
              <li className=' text-slate-600 hover:text-black'><a href="#blog">Blog</a></li>
            </ul>
          </li>

          <li className='flex items-center justify-evenly gap-7'>
          <Badge color="warning" badgeContent={cartCount} >
            <ShoppingCartIcon />
          </Badge>
          <button className='bg-orange-500 text-white py-2 px-5 rounded-md'>LogIn</button>

          {/* hamburger menu need to be done */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar