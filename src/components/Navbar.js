import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {

    const menuItems = [
        {
            title: 'About',
            path: '',
        },
        {
            title: 'Projects',
            path: '',
        },
        {
            title: 'Contact',
            path: '',
        },
    ]

    return (
        <div className='fixed top-0 left-0 right-0 px-6 h-12 w-full flex items-center justify-center text-white select-none'>
            <p className="mr-auto cursor-pointer font-bold flex items-center justify-center"><span className='text-teal-500'>{'<'}</span>barnabee<span className='text-teal-500'>{'/>'}</span></p>
            <div className="hidden md:flex ml-auto items-center justify-center space-x-8">
                {menuItems.map((item) => (
                    <div key={item.title} className="cursor-pointer font-semibold">
                        <p className=" hover:text-teal-500 text-sm">{item.title}</p>
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
