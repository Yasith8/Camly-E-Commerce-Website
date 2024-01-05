import React from 'react'

import img from '../assets/cam/51.jpg'

function Card({id,name,price,img,addToCart}) {


  return (
    <button className='m-5 w-[14rem] h-[19rem] flex flex-col items-center bg-white rounded-xl shadow-md shadow-slate-300 hover:shadow-slate-400'>
        <div className='bg-white  mt-[1rem] mx-[1rem] mb-[0.3rem] rounded-lg'><img src={img} className='max-w-[8rem] max-h-[9rem]'/></div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='px-4 text-center font-bold'>{name}</h1>
        <h3 className='px-4 text-center font-medium pt-1'>LKR {price}</h3>
        </div>
        <div className=''>
        <button className='m-2 p px-14 py-[0.4rem] rounded bg-orange-500 text-white' onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    </button>
  )
}

export default Card