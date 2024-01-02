import React from 'react'
import slide1 from '../assets/boya.jpg'
import slide2 from '../assets/canon.png'
import slide3 from '../assets/godox.png'
import slide4 from '../assets/dji.png'
import slide6 from '../assets/insta.png'
import slide7 from '../assets/gopro.png'
import slide8 from '../assets/sony.png'
import slide9 from '../assets/sigma.png'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderBar() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className=' pt-[5rem] px-6 md:pt-[3%] md:px-[4rem]'>
        <h2 className='font-bold text-[2rem] text-center pb-[2rem]'>Our Trusted Partners</h2>
        <div className='block md:hidden'>

        <Slider {...settings} className='flex md:hidden flex-col items-center justify-center'>
       <div className=''>
            <img className='w-[100px] h-[30px]' src={slide1} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide2} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide3} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[50px] h-[30px]' src={slide4} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide6} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide7} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide8} alt="" srcset="" />
          </div>
          <div className=''>
            <img className='w-[100px] h-[30px]' src={slide9} alt="" srcset="" />
          </div>
          
        </Slider>
        </div>

        <div className='hidden md:flex items-center justify-center gap-[4rem]'>
          <div className=''><img src={slide1} className='w-[100px]'/></div>
          <div className=''><img src={slide2} className='w-[100px]'/></div>
          <div className=''><img src={slide3} className='w-[100px]'/></div>
          <div className=''><img src={slide4} className='w-[50px]'/></div>
          <div className=''><img src={slide6} className='w-[100px]'/></div>
          <div className=''><img src={slide7} className='w-[100px]'/></div>
          <div className=''><img src={slide8} className='w-[100px]'/></div>
          <div className=''><img src={slide9} className='w-[100px]'/></div>
        </div>
    </div>
  )
}

export default SliderBar 