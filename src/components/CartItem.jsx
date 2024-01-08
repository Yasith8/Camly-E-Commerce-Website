import React, { useState } from 'react'
import img from '../assets/cam/51.jpg'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function CartItem({data}) {
  console.log(data)
  const [itemCount,setItemCount]=useState(1);
  const itemPrice=parseInt(data.price);
  const [price,setPrice]=useState(itemPrice)



  const decHandler=()=>{
    if(itemCount<=0){
      setItemCount(0)
    }else{
      setItemCount(itemCount-1)
      setPrice(price-itemPrice)
    }
  }
  
  const incHandler=()=>{
    setItemCount(itemCount+1)
    setPrice(price+itemPrice)
  }

  return (
    <div className='flex mb-2 justify-between bg-white p-3 gap-1 shadow-md shadow-slate-200'>
        <div className='w-[20%] bg-green-500'><img src={data.img1} alt="" /></div>
        <div className=' w-[80%] gap-1 flex flex-col'>
        <div className='p-2 w-full bg-yellow-500'>{data.title}</div>
        <div className='flex'>
        <div className='p-2 w-full bg-blue-400 flex justify-between items-center'>
          <div className='flex items-center justify-center'><button><DeleteForeverRoundedIcon fontSize='small' className='text-red-500'/></button></div>
          <div className='flex items-center'><button className='w-5 h-5 bg-orange-300 flex items-center justify-center mx-1 rounded-sm' onClick={decHandler}>-</button>{itemCount}<button className='w-5 h-5 bg-orange-300 flex items-center justify-center mx-1 rounded-sm' onClick={incHandler}>+</button></div>
        </div>
        <div className='p-2 w-full bg-red-300'>{price}</div>
        </div>
        </div>
    </div>
  )
}

export default CartItem