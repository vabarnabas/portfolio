import React from 'react'
import { HiAnnotation, HiAcademicCap } from 'react-icons/hi'
import { IoLogoJavascript } from 'react-icons/io'
import { RiComputerFill } from 'react-icons/ri'

const Skills = () => {

    const skills = [
        {
            name: 'Software/Framework',
            icon: <IoLogoJavascript className='text-indigo-500 text-lg'/>,
            skills: [
                'Adobe Photoshop', 'React.js', 'TailwindCSS', 'Firebase', 'GitHub'
            ],
        },
        {
            name: 'Soft Skills',
            icon: <HiAnnotation className='text-indigo-500 text-lg'/>,
            skills: [
                'Team Player', 'Communication', 'Problem Solving', 'Adaptability', 'Creativity'
            ],
        },
        {
            name: 'Hard Skill',
            icon: <RiComputerFill className='text-indigo-500 text-lg'/>,
            skills: [
                'Graphic Design', 'UI/UX Design', 'Data Management', 'Content Management', 'Front-end Development'
            ],
        },
        {
            name: 'To Learn',
            icon: <HiAcademicCap className='text-indigo-500 text-xl'/>,
            skills: [
                'Typescript', 'Next.js', 'React Native', 'Redux', 'PostgreSQL'
            ],
        },
    ]

    return (
        <div className='w-full min-h-full flex flex-col items-center justify-center px-6 py-8 select-none'>
            <p className="mr-auto text-slate-600 text-3xl font-bold mb-4">Skills</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((item) => (
                    <div key={item.name} className="w-full bg-slate-100 ring-1 flex flex-col items-center justify-center ring-slate-300 rounded-lg overflow-hidden text-slate-600 py-4 px-4 h-max">
                        <div className="aspect-square bg-indigo-200 p-3 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <p className="font-bold text-xl mb-2">{item.name}</p>
                        <div className="space-y-2 flex flex-col items-center justify-center">
                            {item.skills.map((item) => (
                                <p key={item} className="">{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
