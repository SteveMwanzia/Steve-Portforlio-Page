import React from 'react'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import shape from '../assets/Shape.png'
import twitter from '../assets/twitter.png'
import myphoto from '../assets/steveImage.png'
import ovals from '../assets/Navovals.png'
import oval from '../assets/Oval.png'

const NavBar = () => {
  return (
    <div className=' font-SpaceGrotesk bg-black text-white min-h-screen w-full flex flex-col items-center
                     font-semibold pb-20 px-5 md:px-0 relative md:flex md:flex-row-reverse md:items-start md:pt-0 md:pl-6 md:relative lg:pr-20'>
        <h1 className=' text-[24px] bg-[#242424] w-[180px] h-20 text-center pt-5 md:hidden'>stevekivaa</h1>
        <img className=' absolute top-36 left-0 h-[126px] lg:top-28 ' src={ovals} alt="" />
        <img className=' absolute top-64 right-0 h-[120px] md:top-[470px] md:z-50 lg:right-[500px]' src={oval} alt="" />
        <div className=' flex flex-col gap-12 bg-[#242424] md:h-[600px] md:w-[322px] lg:h-[720px] lg:w-[420px] '>
            <div className=' flex justify-between px-3 pt-2 md:self-end md:gap-8 md:pt-7'>
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={github} alt="github" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={shape} alt="shape" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={linkedin} alt="linkedin" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={twitter} alt="twitter" />
            </div>

            <img className=' w-[180px] h-[242px] opacity-100 z-50 md:z-10 md:h-[600px] md:w-[322px] lg:h-[720px] lg:w-[420px]' src={myphoto} alt="photo" />
        </div>

        <div className=' pt-6 flex flex-col items-center gap-4 md:w-[460px] z-50 md:pt-0 md:h-[600px] md:absolute md:left-6 lg:w-[560px] lg:left-20'>
            <h1 className=' text-[32px] text-left pt-5 hidden md:flex w-full'>stevekivaa</h1>
            <h2 className=' text-[33px] text-center leading-[40px] md:w-full md:text-left md:text-[69px]  md:leading-[72px] md:pt-16 lg:text-[56px] '>Nice to <br className=' lg:hidden' /> meet you! I’m <span className='underline'>Steve Kivaa.</span></h2>
            <p className=' text-center text-sm md:text-[18px] text-[#D9D9D9] w-full md:text-left md:pt-8 lg:text-[14px]'>Based in the Kenya, I’m a front-end developer <br /> passionate about building accessible web apps <br /> that users love.</p>
            <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm md:self-start md:pt-3 lg:text-xs lg:pt-7 hover:cursor-pointer hover:text-[#4EE1A0]'>CONTACT ME</p>
        </div>
    </div>
  )
}

export default NavBar