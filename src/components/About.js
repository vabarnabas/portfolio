import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const About = () => {
    return (
        <div className='w-full min-h-full flex flex-col items-center justify-center px-6 py-8 sm:mt-4 md:mt-0 select-none'>
            <div className="aspect-[5/2] lg:aspect-[3/1] relative w-full rounded-lg overflow-hidden hidden md:flex items-center justify-center">
                <div className="absolute inset-0 h-full w-full bg-indigo-500 bg-opacity-[0.85]"></div>
                <div className="px-6 max-w-xl absolute text-white text-center">
                    <p className=" font-extrabold text-5xl lg:text-6xl">Welcome, my name is Barnabas</p>
                    <p className="mt-2 font-semibold xl:text-xl">I am a React front-end developer, eager to learn.</p>
                    <button className="mt-4 bg-white hover:bg-gray-200 text-indigo-500 text-sm lg:text-base py-1.5 px-6 rounded-lg font-semibold">My Resume</button>
                </div>
                <div className="absolute bottom-4 flex items-center justify-center text-white text-xl space-x-3">
                    <AiFillGithub onClick={() => window.open('https://github.com/vabarnabas', '_blank')} className='hover:text-gray-200 cursor-pointer'/>
                    <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/vabarnabas/', '_blank')} className='hover:text-gray-200 cursor-pointer text-base'/>
                </div>
                <img src={'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'} alt="" className='object-cover' />
            </div>
            <div className="flex flex-col md:hidden">
                <div className="text-slate-600 text-center">
                    <p className="font-extrabold text-4xl">Welcome, my name is <span className='text-indigo-500'>Barnabas</span></p>
                    <p className="mt-2 font-semibold text-sm">I am a React front-end developer, eager to learn.</p>
                    <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white text-sm lg:text-base py-1.5 px-6 rounded-lg font-semibold">My Resume</button>
                </div>
                <div className="mt-4 flex items-center justify-center text-slate-600 text-xl space-x-3">
                    <AiFillGithub onClick={() => window.open('https://github.com/vabarnabas', '_blank')} className='hover:text-indigo-500 cursor-pointer'/>
                    <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/vabarnabas/', '_blank')} className='hover:text-indigo-500 cursor-pointer text-base'/>
                </div>
            </div>
        </div>
    )
}

export default About
