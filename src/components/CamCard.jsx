import React, { useState } from 'react'
import camera1 from '../assets/camera1.png'

function CamCard({camList}) {

  const [itemId,setItemId]=useState(0);

  const btnHandler=(id)=>{
    setItemId(id)
  }

  return (
    <div className='md:w-auto md:h-screen pt-[2rem] mb-[2rem] px-6 md:pt-[2rem] md:px-[4rem]'>
      <h1 className='font-bold text-[2rem] text-center pb-5'>New Arrived Products</h1>
        <div className="md:grid md:grid-cols-3 md:grid-rows-4 gap-4">
               <div className=" md:row-span-4">
                <div className='hidden md:flex md:flex-col md:items-center md:justify-between md:gap-7'>
                  {camList.map((i)=>(
                    <button key={i.id} onClick={() => btnHandler(i.id)} className='px-4 py-3 rounded-lg w-full text-white font-bold text-[1rem] bg-orange-500 border-[3px] border-orange-500 hover:bg-orange-400  hover:border-orange-800'>{i.matirial}</button>
                  ))}
                </div>
          
                <div className='flex md:flex-col items-center justify-between gap-7 md:hidden'>
                   <div className='flex flex-wrap md:flex-col items-center justify-center gap-3'>
                     {camList.slice(0, 4).map((i) => (
                       <button key={i.id} onClick={() => btnHandler(i.id)} className='md:px-4 py-3 w-[10rem] rounded-lg text-white font-bold text-[1rem] bg-orange-500 border-[3px] border-orange-500 hover:bg-orange-400 hover:border-orange-800'>
                         {i.matirial}
                       </button>
                     ))}
                   </div>
                 
                   <div className='flex flex-wrap md:flex-col items-center justify-center gap-3'>
                     {camList.slice(4, 8).map((i) => (
                       <button key={i.id} onClick={() => btnHandler(i.id)} className='px-4 py-3 w-[10rem] rounded-lg  text-white font-bold text-[1rem] bg-orange-500 border-[3px] border-orange-500 hover:bg-orange-400 hover:border-orange-800'>
                         {i.matirial}
                       </button>
                     ))}
                   </div>
              </div>

          


                
                
               </div>
               <div className="md:row-span-4 md:col-start-2 md:row-start-1 flex items-center justify-center"><img src={camList[itemId] ? camList[itemId].img1 : camList[0].img3} /></div>
               <div className=" md:row-span-4 md:col-start-3 md:row-start-1">
                
                <table className='table-auto border border-black'>
                    <tbody>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Model</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].model : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Matirial</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].matirial : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>WiFi</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].wifi : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Display</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].display : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>View Finder</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ?camList[itemId].view : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Sensor Type</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ?camList[itemId].sensor : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Lensor Kit</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].lensor : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Mega Pixel</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].pixel : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>ISO Range</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].iso : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Battery</td><td className='border-2 p-3 border-orange-700 w-full'>{camList[itemId] ? camList[itemId].battery : 'No Details'}</td></tr>
                    </tbody>
                </table>
               </div>
        </div>


    </div>
  )
}

export default CamCard