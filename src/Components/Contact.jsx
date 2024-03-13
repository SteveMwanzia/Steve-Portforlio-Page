import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import shape from '../assets/Shape.png'
import twitter from '../assets/twitter.png'
import ovals from '../assets/Navovals.png'

const Contact = () => {
    const form = useRef();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    // }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_nk3rjop', 'template_hs26atq', form.current, {
            publicKey: 'abu5ydmXD-6J6hJRe',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            alert('Message Sent!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        setName("");
        setEmail("");
        setMessage("");
    };
  return (
    <div className='font-SpaceGrotesk bg-[#242424] text-white w-full flex flex-col gap-6 pt-16 px-4 md:px-6 relative md:justify-center md:items-center lg:px-20' >
        <img className=' absolute top-[280px] top- left-0 h-[126px] ' src={ovals} alt="" />
        <div className=' lg:flex lg:justify-between lg:items-start lg:w-full lg:gap-28'>
            <div className=' flex flex-col gap-4 md:w-[400px]'>
                <h2 className='text-[28px] font-bold text-center md:text-[72px] lg:text-left'>Contact</h2>
                <p className=' text-xs text-[#D9D9D9] text-center md:text-[18px] leading-[28px] lg:text-left lg:text-[16px]'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className=' flex flex-col gap-4 border-b-[1px] border-solid border-white pb-16 md:w-[400px] md:border-none '>
                <input className=' bg-[#242424] text-xs md:text-sm border-b-[1px] border-solid px-5 pb-4 pt-2  border-white outline-none' type="text " placeholder='NAME' name="user_name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input className=' bg-[#242424] text-xs md:text-sm border-b-[1px] border-solid px-5 pb-4 pt-2 border-white outline-none' type="email" placeholder='EMAIL' name="user_email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <textarea className=' bg-[#242424] bg-transparent text-xs md:text-sm border-b-[1px] border-solid px-5 pt-2 border-white outline-none' placeholder='MESSAGE' cols="30" rows="5" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                <input type="submit" value="SEND MESSAGE" className=' hover:cursor-pointer pb-1 border-b-2 border-solid border-[#4EE1A0] tracking-widest text-sm md:text-[16px] self-end pt-3'/>
            </form>
        </div>
        
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:w-full md:py-6 md:pb-0 gap-3 pb-10 md:border-t-[1px] md:border-solid md:border-white'>
            <h3 className=' text-[19px] md:text-[32px] font-semibold'>stevekivaa</h3>
            <div className=' flex justify-between px-3 pt-2 gap-4'>
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={github} alt="github" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={shape} alt="shape" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={linkedin} alt="linkedin" />
                <img className=' h-[19px] w-[19px] md:h-[24px] md:w-[24px] hover:cursor-pointer hover:bg-[#4EE1A0]' src={twitter} alt="twitter" />
            </div>
        </div>
    </div>
  )
}

export default Contact