import React from 'react'
import { Empty } from 'antd';

function EmptyCart({itemOnClose}) {
  return (
    <div className='flex flex-col items-center justify-evenly'><Empty description='No Items'/>
    <a href='#card' className='mt-[5rem] rounded-lg p-4 bg-orange-500 text-white' onClick={()=>{itemOnClose(false)}}>Keep Browsing</a>
    </div>
  )
}

export default EmptyCart