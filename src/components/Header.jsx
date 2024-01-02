import React from 'react'
import camera1 from '../assets/camera1.png'
import drone1 from '../assets/drone1.png'
import drone2 from '../assets/drone1.png'

function Header() {
  return (
    <div>
        <header className=' h-screen md:w-auto pt-[5rem] px-6 md:pt-[5%] md:px-[4rem] flex flex-col md:items-center justify-between md:flex-row md:gap-3' id='home'>
        <div className='md:w-[50%]'>
            <h4 className='text-orange-500'>Camly Camera Studio</h4>
            <h1 className='text-[3rem] md:text-[3.5rem] font-semibold'>Famous Camera</h1>
            <h1 className='text-[3rem] md:text-[3.5rem] font-semibold'><span className='bg-orange-500 px-2'>Collection</span> Point</h1>
            <p className='mt-4 text-[15px] md:text-[16px]'> Explore our extensive collection of cutting-edge cameras, lenses, and accessories that 
              cater to both amateur enthusiasts and seasoned professionals. Whether you're a photography 
              novice or a seasoned pro, our knowledgeable staff is here to guide you in finding the perfect 
              gear to unleash your creativity.</p>

            <button className='mt-4 px-10 py-4 bg-black text-white font-bold rounded-lg'>Explore</button>
        </div>
        <div className=''>
          <img src={drone1} alt="" className='w-[600px] h-auto'/>
        </div>
        </header>
    </div>
  )
}

export default Header