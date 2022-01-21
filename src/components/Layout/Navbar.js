import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {

    const menuItems = [
        {
            title: 'Home',
            path: '',
        },
        {
            title: 'Projects',
            path: '',
        },
        {
            title: 'Skills',
            path: '',
        },
        {
            title: 'Contact',
            path: '',
        },
    ]

    return (
        <div className='z-10 fixed top-0 left-0 right-0 px-6 h-12 w-full flex items-center justify-center bg-slate-50 text-slate-600 border-b border-slate-200'>
            <p className="mr-auto cursor-pointer font-bold flex items-center justify-center"><span className='text-indigo-500'>{'<'}</span>barnabee<span className='text-indigo-500'>{'/>'}</span></p>
            <div className="hidden md:flex ml-auto items-center justify-center space-x-8">
                {menuItems.map((item) => (
                    <div key={item.title} className="cursor-pointer font-semibold">
                        <p className=" hover:text-indigo-500 text-sm">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="ml-auto flex md:hidden">
                <HiMenuAlt4 className='text-2xl' />
            </div>
        </div>
    )
}

export default Navbar
