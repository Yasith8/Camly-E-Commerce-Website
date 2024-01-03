import React, { useState } from 'react'
import Card from './Card'

function CardSection(props) {

    const [sortOption,setSortOption]=useState("")

    const handleSortChange=(e)=>{
        setSortOption(e.target.value);
    }

    const sortedShopList = () => {
        switch (sortOption) {
          case 'lowToHigh':
            return props.shopList.slice().sort((a, b) => a.price - b.price);
          case 'highToLow':
            return props.shopList.slice().sort((a, b) => b.price - a.price);
          default:
            return props.shopList.slice();
        }
      };

  return (
    <div className='mt-[3rem] md:w-auto pt-[5rem] px-6 md:pt-[5%] md:px-[4rem]'>
        <h1 className='text-center font-bold text-[2rem]'>Our Most Exclusive Products</h1>
        <div className='mt-5 flex justify-end items-center gap-3'>
            <h2 className='font-semibold'>Filter</h2>
            <select className='border-2 p-2 rounded-lg' value={sortOption} onChange={handleSortChange}>
                <option value="">Recent</option>
                <option value="lowToHigh">Low to High(Price)</option>
                <option value="highToLow">High to Low(Price)</option>
            </select>
        </div>


        <div className='flex flex-col items-center mt-3 gap-4'>
                   <div className='flex flex-wrap items-center justify-center gap-6'>
                     {sortedShopList().slice(0, 4).map((i) => (
                       <Card id={i.id} name={i.title} price={i.price} img={i.img1} />
                       ))}
                   </div>
                 
                   <div className='flex flex-wrap items-center justify-center gap-6'>
                     {sortedShopList().slice(4, 8).map((i) => (
                       <Card id={i.id} name={i.title} price={i.price} img={i.img1}/>
                     ))}
                   </div>
        </div>
        
    </div>
  )
}

export default CardSection