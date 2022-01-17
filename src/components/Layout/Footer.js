import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiMessengerFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className='w-full grid grid-cols-2 border-t border-slate-200 px-6 py-6 text-slate-600'>
            <div className="">
                <p className="text-xs font-semibold">Created by <span className='text-indigo-500'>Varga Barnabas</span></p>
            </div>
            <div className="flex items-center justify-end space-x-3">
                <AiFillGithub className='hover:text-indigo-500 cursor-pointer'/>
                <FaLinkedinIn className='hover:text-indigo-500 cursor-pointer'/>
                <RiMessengerFill className='hover:text-indigo-500 cursor-pointer'/>
            </div>
        </div>
    )
}

export default Footer
