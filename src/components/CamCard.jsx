import React from 'react'
import camera1 from '../assets/camera1.png'

function CamCard() {
  return (
    <div className='md:w-auto pt-[2rem] mb-[2rem] px-6 md:pt-[2rem] md:px-[4rem]'>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
               <div className="bg-green-300 row-span-4">
                <h2>Model</h2>
                
               </div>
               <div className="bg-blue-300 row-span-4 col-start-2 row-start-1"><img src={camera1} /></div>
               <div className=" row-span-4 col-start-3 row-start-1">
                
                <table className='table-auto border border-black'>
                    <tbody>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Model</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Matirial</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>WiFi</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Display</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>View Finder</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Sensor Type</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Lensor Kit</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Mega Pixel</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>ISO Range</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                        <tr className=''><td className='bg-orange-200 border-2 p-3 px-5 border-orange-700'>Battery</td><td className='border-2 p-3 border-orange-700 w-full'>Nikon</td></tr>
                    </tbody>
                </table>
               </div>
        </div>

    </div>
  )
}

export default CamCard