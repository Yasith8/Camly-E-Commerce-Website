import React, { useState } from 'react'
import camera1 from '../assets/camera1.png'

function CamCard(props) {

  const [itemId,setItemId]=useState(0);

  const btnHandler=(id)=>{
    setItemId(id)
  }

  return (
    <div className='md:w-auto pt-[2rem] mb-[2rem] px-6 md:pt-[2rem] md:px-[4rem]'>
      <h1 className='font-bold text-[2rem] text-center pb-5'>New Arrived Products</h1>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
               <div className=" row-span-4">
                <div className='flex flex-col items-center justify-between gap-7'>
                  {props.camList.map((i)=>(
                    <button key={i.id} onClick={() => btnHandler(i.id)} className='px-4 py-3 rounded-lg w-full text-white font-bold text-[1rem] bg-orange-500 border-[3px] border-orange-500 hover:bg-orange-400  hover:border-orange-800'>{i.matirial}</button>
                  ))}
                </div>
                
               </div>
               <div className="row-span-4 col-start-2 row-start-1 flex items-center justify-center"><img src={props.camList[itemId] ? props.camList[itemId].img1 : props.camList[0].img3} /></div>
               <div className=" row-span-4 col-start-3 row-start-1">
                
                <table className='table-auto border border-black'>
                    <tbody>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Model</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].model : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Matirial</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].matirial : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>WiFi</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].wifi : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Display</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].display : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>View Finder</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].view : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Sensor Type</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].sensor : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Lensor Kit</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].lensor : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Mega Pixel</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].pixel : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>ISO Range</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].iso : 'No Details'}</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Battery</td><td className='border-2 p-3 border-orange-700 w-full'>{props.camList[itemId] ? props.camList[itemId].battery : 'No Details'}</td></tr>
                    </tbody>
                </table>
               </div>
        </div>


    </div>
  )
}

export default CamCard