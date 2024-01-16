import React from 'react'

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <div id='contact' className=' pt-[5rem]'>
        <h1 className='text-center font-bold text-[3rem] mb-4'>Contact Us</h1>
        <div className='flex flex-col md:flex-row item-center justify-evenly mx-3 md:mx-[5rem] p-5 rounded-lg shadow-lg shadow-gray-400'>
            <div className='flex flex-col item-center'>
                <div className='flex gap-6 py-3'><HomeIcon/>  <p>No 98, Hattern Place, GalleRoad, Bambalapitiya</p></div>
                <div className='flex gap-6 py-3'><CallIcon/>  <p>011-222-3776 / 011-233-9080</p></div>
                <div className='flex gap-6 py-3'><EmailIcon/>  <p>camlyshopcolombo@gmail.com</p></div>
            </div>
            <div className='flex flex-row'>
                <form action="">

                    <div className='grid grid-cols-2 my-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' className='md:w-[20rem] h-10 border-2 border-orange-300 rounded-md'/>
                    </div>

                    <div className='grid grid-cols-2 my-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' className='md:w-[20rem] h-10 border-2 border-orange-300 rounded-md'/>
                    </div>

                    <div className='grid grid-cols-2 my-3'>
                    <label htmlFor="msg" >Send Message</label>
                    <textarea id='msg' className='md:w-[20rem] h h-28 border-2 border-orange-300 rounded-md'></textarea>
                    </div>

                    <div>
                        <button className='w-full bg-orange-500 text-white h-[3rem] '>Send Us</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div className='mt-[6rem] text-center bg-gray-400 text-sm py-2'>Designed and Developed by <a href="https://www.yasithnawodya.com" target='_blank'>Yasith Nawodya</a></div>
    </div>
  )
}

export default Contact