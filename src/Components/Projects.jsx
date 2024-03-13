import React, { useEffect, useState } from 'react'
import todoImg from '../assets/todoimg.png'
import country from '../assets/countrysearch.png'
import dev from '../assets/devfinder.png'
import audiophile from '../assets/audiophile.png'

const Projects = () => {

  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover((prev) => !prev);
    console.log(hover);
  }

  useEffect(() => {
    handleHover
  })

  return (
    <div className='font-SpaceGrotesk bg-black text-white min-h-screen w-full flex flex-col gap-6 pt-16 px-4 pb-16 md:px-6 lg:px-20'>
        <div className=' flex justify-between items-center'>
            <h2 className=' text-[28px] font-bold md:text-[72px]'>Projects</h2>
            <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm md:text-[16px] hover:cursor-pointer hover:text-[#4EE1A0]'>CONTACT ME</p>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-6'>
          <div className=' flex flex-col gap-5 '>
            <div className=' lg:relative lg:w-[450px] lg:h-[350px] cursor-pointer' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={country} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://country-search-steve.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="https://github.com/SteveMwanzia/Countries_app_project" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
              
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>COUNTRY SEARCH</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>

          <div className=' flex flex-col gap-5'>
          <div className=' lg:relative lg:w-[450px] lg:h-[350px]' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={dev} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://github-search-module-project-steve.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="https://github.com/SteveMwanzia/GitHub-Search-Module-Project-2" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>DEV FINDER APP</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>

          <div className=' flex flex-col gap-5'>
          <div className=' lg:relative lg:w-[450px] lg:h-[350px]' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={audiophile} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://audiophile-ecom-stevekm.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="https://github.com/SteveMwanzia/audiophile" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>E-COMMERCE WEBSITE</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>

          <div className=' flex flex-col gap-5'>
          <div className=' lg:relative lg:w-[450px] lg:h-[350px]' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={country} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://country-search-steve.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="https://github.com/SteveMwanzia/Todo-Module-Project" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>TODO WEB APP</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>

          <div className=' flex flex-col gap-5'>
          <div className=' lg:relative lg:w-[450px] lg:h-[350px]' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={country} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://country-search-steve.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>TODO WEB APP</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>

          <div className=' flex flex-col gap-5'>
          <div className=' lg:relative lg:w-[450px] lg:h-[350px]' onClick={handleHover}>
              <img className=' w-[340px] h-[250px] lg:w-[450px] lg:h-[350px]' src={country} alt="Todo"/>
              {hover ? (
                <div className=' lg:flex lg:gap-12 hidden lg:absolute lg:top-0 lg:w-full lg:h-full lg:bg-black lg:opacity-75'>
                <a href="https://country-search-steve.netlify.app" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-28 lg:left-44 lg:absolute'>VIEW PROJECT</p></a>
                <a href="" target="_blank"><p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0] lg:top-1/2 lg:left-48 lg:absolute'>VIEW CODE</p></a>
              </div>
              ) :null}
            </div>
            <div>
              <h4 className=' text-[18px] font-semibold'>TODO WEB APP</h4>
              <div className=' flex gap-3 text-[14px] text-[#D9D9D9]'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className=' flex gap-12 lg:hidden'>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className=' pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm hover:cursor-pointer hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Projects