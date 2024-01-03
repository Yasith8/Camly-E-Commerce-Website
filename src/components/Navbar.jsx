import React, { useState } from 'react'

import '../components/font.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge/Badge"
import { Button, Drawer } from 'antd';

import MenuIcon from '@mui/icons-material/Menu';

function Navbar({cartCount}) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
          <div className='md:hidden'>
          <button onClick={showDrawer}>
        <MenuIcon/>
      </button>
      <Drawer title="Capture List" placement="right" onClose={onClose} open={open}>
        <ul className='py-5 flex flex-col items-center gap-10'>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#home">Home</a></li>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#about">About Us</a></li>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#latest">Our Latest Products</a></li>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#shop">Shop</a></li>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#contact">Contact</a></li>
          <li><a className='text-[18px] p-3 text-black hover:text-white rounded-lg hover:bg-orange-400' href="#blog">Blog</a></li>
        </ul>
      </Drawer>
          </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar