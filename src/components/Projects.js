import React from 'react'
import { HiCode, HiLink } from 'react-icons/hi'

const Projects = () => {

    const projects = [
        {
            name: 'openRÖszTI',
            description: 'RÖszTI (Rendszer az Összesített Teljesítmény Igazolására) is a performance tracking sheet which is only visible to the current Board of ESTIEM Budapest BME. openRÖszTI is a solution to let people check their stats anytime without having to ask someone or to access other\'s performance. Version 3 and 4 were the first live versions and they were written in Excel VBA utilizing UserForms, but version 5 was in PowerApps making it easier to access the data. Since January of 2022 version 6 is out, which is written in React JS (CRA), with Tailwind CSS for styling and an Express JS based API deployed on Firebase Cloud Functions.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            imgPosition: '',
            url: 'https://roszti.barnabee.studio',
            source: 'https://github.com/vabarnabas/open-roszti'
        },
        {
            name: 'Finpak x Limoverse',
            description: 'Limoverse was a solution to replace Excel sheets, with a UI. It was first written in PowerApps, but a newer version of it is in works, named Finpak. Finpak is a customizable dashboard, where users can pin four frequently used parts of the application to their main dashboard, but also can open these parts separately as a middle section. Some parts such as the pinned elements are stored in localStorage, but the user handling and the main data storage is in Firebase. Also this was my first React project where I used a Utilities file, which is a collection of useful functions.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            imgPosition: '',
            url: '',
            source: ''
        },
        {
            name: 'ESTIEM Budapest BME',
            description: '',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            imgPosition: '',
            url: '',
            source: ''
        },
    ]

    return (
        <div className='w-full flex flex-col items-center justify-center px-6 py-8 select-none'>
            <p className="mr-auto text-white font-bold text-3xl mb-4"><span className='text-teal-500'>{'<'}</span>projects<span className='text-teal-500'>{'/>'}</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 overflow">
                {projects.map((item) => (
                    <div key={item.name} className="bg-slate-800 rounded-lg pb-6 overflow-hidden text-white h-max">
                        <img src={item.image} alt="" className="object-cover aspect-[2/1]" />
                        <p className="flex mx-4 mt-3 font-bold text-2xl">{item.name}</p>
                        <p className="mt-2 text-xs flex mx-4">{item.description}</p>
                        <div className="mt-4 mx-4 flex items-center justify-start space-x-2">
                            <button onClick={() => window.open(item.url, '_blank')} className=" bg-teal-500 hover:bg-teal-600 py-1 px-8 rounded-lg text-sm text-white flex items-center justify-center"><HiLink className='mr-1'/>Open</button>
                            <button onClick={() => {if(item.source !== '') {window.open(item.source, '_blank')}}} className={` py-1 px-1 rounded-lg text-sm flex items-center justify-center ${item.source ? 'text-teal-500 hover:text-teal-600' : 'text-gray-300 cursor-default'}`}><HiCode className='mr-1' />{item.source ? 'Source Code' : 'Code Not Available'}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
