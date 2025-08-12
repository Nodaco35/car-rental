import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14'>

        <h1 className='text-4xl md:text-5xl font-semibold'>Luxury cars on Rent</h1>

        <form className='flex flex-col md:flex-row md:items-center justify-center rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]'>

            

        </form>

        <img src={assets.main_car} alt="car" className='max-h-74' />
      
    </div>
  )
}

export default Hero
