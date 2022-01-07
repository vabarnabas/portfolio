import React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { AiFillLinkedin } from 'react-icons/ai'

const Hero = () => {

    const openURL = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
      }

    return (
        <div className='w-full h-full grid gap-x-4 items-center text-white font-semibold px-6'>
            <div className="flex flex-col items-start justify-center">
                <p className="text-4xl flex flex-col items-start">Hi! I am<span className='inline text-teal-500'>Barnabas Varga</span></p>
                <p className="font-normal flex w-[70%] sm:w-[35%] lg:w-[20%]">I am a React front-end developer, who is eager to learn.</p>
                <div className="flex items-center justify-center mt-2 text-2xl cursor-pointer space-x-2">
                    <DiGithubBadge onClick={() => openURL('https://github.com/vabarnabas')} className='hover:text-gray-300' />
                    <AiFillLinkedin onClick={() => openURL('https://www.linkedin.com/in/vabarnabas/')} className='hover:text-gray-300 text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero
