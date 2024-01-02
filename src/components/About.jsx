import React from 'react'
import shop from '../assets/shop.jpg'


function About() {
  return (
    <div className='h-full pb-[5rem] w-auto md:w-auto pt-[5rem] px-6 md:pt-[5%] md:px-[4rem]' id='about'>
        <h1 className='font-bold text-[2rem]'>About Us</h1>
        <div className='mt-6 block md:flex items-center justify-center md:gap-7 '>
            <img src={shop} className='w-[500px] h-auto rounded-es-[100px] rounded-tr-[100px]'/>
            <div className='pt-[2rem]'>
            <p>
            <span className='font-bold md:text-[30px]'>At Camly<span className='text-orange-500'>.</span></span> we are passionate about capturing moments that last a lifetime. Our commitment is to provide you with a seamless and enjoyable camera shopping experience, backed by our expertise in the field.
            </p>
            <br />
            <p>Established in 2016, Camly was founded by a team of photography enthusiasts who recognized the need for a dedicated platform offering a wide range of cameras and accessories. With a combined experience of over 8 years in the industry, we understand the evolving needs of photographers, whether they are professionals or hobbyists.</p>
            </div>
        </div>
    </div>
  )
}

export default About