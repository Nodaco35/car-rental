import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14'>

        <h1 className='text-4xl md:text-5xl font-semibold'>Luxury cars on Rent</h1>

        <form className='flex flex-col md:flex-row md:items-center py-4 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]'>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
                <div className='flex flex-col items-start gap-2'>
                    <select name="" id="" required onChange={(e) => setPickUpLocation(e.target.value)}>
                      <option value="">Pickup Location</option>
                      {cityList.map((city, index) => 
                        <option key={index} value={city}>{city}</option>
                      )}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickUpLocation ? pickUpLocation : "Please select location"}</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickup-date">Pick-up Date </label>
                    <input type="date" name="" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required onChange={(e)=>setPickUpDate(e.target.value)} />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="return-date">Return Date </label>
                    <input type="date" name="" id="return-date"  className='text-sm text-gray-500' required min={pickUpDate ? pickUpDate : undefined} disabled={!pickUpDate}/>
                </div>
            </div>
        </form>
        <img src={assets.main_car} alt="car" className='max-h-74' />
      
    </div>
  )
}

export default Hero
