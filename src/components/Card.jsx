import React, { useState } from 'react'

import img from '../assets/cam/51.jpg'

import StarIcon from '@mui/icons-material/Star';

function Card({id,name,price,img,rate,sale,addToCart}) {
  
  

  const clickHandler=()=>{
    addToCart(id);
    
  }

  return (
    <button className='m-5 w-[14rem] h-[19rem] flex flex-col items-center bg-white rounded-xl shadow-md shadow-slate-300 hover:shadow-slate-400'>
        <div className='bg-white  mt-[0.5rem] mx-[1rem] mb-[0.1rem] rounded-lg'><img src={img} className='max-w-[8rem] max-h-[9rem]'/></div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='px-4 text-center font-bold'>{name}</h1>
        <h3 className='px-4 text-center font-medium text-[16px] pt-1'>LKR {price}</h3>
        <h3 className='px-4 text-center font-normal flex items-center text-[12px] pt-[2px]'>
        <div className='y fill-yellow-500'>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        </div>
         {rate}({sale})</h3>
        </div>
        <div className=''>
        <button className='m-2 p px-14 py-[0.4rem] rounded bg-orange-500 text-white' onClick={clickHandler}>Add to Cart</button>
        </div>
    </button>
  )
}

export default Card