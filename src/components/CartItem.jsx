import React, { useState } from 'react'
import img from '../assets/cam/51.jpg'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function CartItem({data,updateTotalPrice,onRemove}) {
  console.log(data)
  const [itemCount,setItemCount]=useState(1);
  const itemPrice=parseInt(data.price);
  const [price,setPrice]=useState(itemPrice)

  



  const decHandler=()=>{
    if(itemCount<=0){
      setItemCount(0)
      updateTotalPrice(0)
    }else{
      setItemCount(itemCount-1)
      setPrice(price-itemPrice)
      updateTotalPrice(-itemPrice)
    }
  }
  
  const incHandler=()=>{
    setItemCount(itemCount+1)
    setPrice(price+itemPrice)
    updateTotalPrice(itemPrice)
  }

  return (
    <div className='flex mb-2 justify-between bg-white p-3 gap-1 shadow-md shadow-slate-200'>
        <div className='w-[20%] '><img src={data.img1} alt="" /></div>
        <div className=' w-[80%] gap-1 flex flex-col'>
        <div className='p-2 w-full font-semibold'>{data.title}</div>
        <div className='flex'>
        <div className='p-2 w-full flex justify-between items-center'>
          <div className='flex items-center justify-center'><button><DeleteForeverRoundedIcon onClick={() => onRemove(data)} fontSize='small' className='text-red-500'/></button></div>
          <div className='flex items-center'><button className='w-5 h-5 bg-orange-500 text-white flex items-center justify-center mx-1 rounded-sm' onClick={decHandler}>-</button>{itemCount}<button className='w-5 h-5 bg-orange-500 text-white flex items-center justify-center mx-1 rounded-sm' onClick={incHandler}>+</button></div>
        </div>
        <div className='p-2 w-full font-bold'>Rs {price}</div>
        </div>
        </div>
    </div>
  )
}

export default CartItem