import React from 'react'
import Card from './Card'

function CardSection(props) {
  return (
    <div className='mt-[3rem] md:w-auto pt-[5rem] px-6 md:pt-[5%] md:px-[4rem]'>
        <h1 className='text-center font-bold text-[2rem]'>Our Most Exclusive Products</h1>
        <div className='mt-5 flex justify-end items-center gap-3'>
            <h2 className='font-semibold'>Filter</h2>
            <select className='border-2 p-2 rounded-lg'>
                <option value="">Recent</option>
                <option value="">Low to High(Price)</option>
                <option value="">High to Low(Price)</option>
            </select>
        </div>


        <div className='flex flex-col items-center mt-3 gap-4'>
                   <div className='flex flex-wrap items-center justify-center gap-6'>
                     {props.shopList.slice(0, 4).map((i) => (
                       <Card id={i.id} name={i.title} price={i.price} img={i.img1} />
                       ))}
                   </div>
                 
                   <div className='flex flex-wrap items-center justify-center gap-6'>
                     {props.shopList.slice(4, 8).map((i) => (
                       <Card id={i.id} name={i.title} price={i.price} img={i.img1}/>
                     ))}
                   </div>
        </div>
        
    </div>
  )
}

export default CardSection