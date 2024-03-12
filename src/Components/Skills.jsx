import React from 'react'
import ovals from '../assets/rightovals.png'

const Skills = () => {
  return (
    <div className=' font-SpaceGrotesk bg-black text-white flex flex-col items-center gap-4 w-full relative px-4 md:px-6 lg:px-20'>
        <div className=' flex flex-col md:flex-row gap-4 md:w-full items-center border-t-2 border-solid border-white w-5/6 mx-auto pt-10 ' >
            <div className='md:w-1/2 '>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>HTML</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px]'> 1 Year Experience</p>
            </div>
            <div className='md:w-1/2 '>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>CSS</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px] '>1 Year Experience</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:w-full'>
            <div className='md:w-1/2'>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>JavaScript</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px] '>1 Year Experience</p>
            </div >
            <div className='md:w-1/2'>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>React</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px]'>1 Year Experience</p>
            </div>
        </div>
        <div className=' flex flex-col md:flex-row md:w-full  gap-4 border-b-2 border-solid border-white w-5/6 mx-auto pb-10 md:border-none '>
            <div className='md:w-1/2'>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>Responsive Design</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px]'>1 Year Experience</p>
            </div>
            <div className='md:w-1/2'>
                <h3 className=' text-center text-[26px] font-semibold md:text-left md:text-[48px]'>TailwindCSS</h3>
                <p className=' text-[#D9D9D9] text-sm text-center md:text-left md:text-[18px]'>1 Year Experience</p>
            </div>
        </div>
        <img className=' absolute -bottom-16 right-0 h-[126px] ' src={ovals} alt="" />
    </div>
  )
}

export default Skills