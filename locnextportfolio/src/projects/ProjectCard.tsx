'use client'

import { Project } from '@/models/project'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IProject {
    project: Project
}

export default function ProjectCard({ project }: IProject) {

    const [substringLength, setSubstringLength] = useState(45);

    useEffect(() => {
        const calculateSubstringLength = () => {
            if (window.innerWidth >= 768) {
                return 24; // Use a shorter substring for medium-sized screens
            } else {
                return 30; // Use an even shorter substring for smaller screens
            }
        };

        setSubstringLength(calculateSubstringLength());

        const handleResize = () => {
            setSubstringLength(calculateSubstringLength());
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'instant' }) }} href={`/Work/${project.id}`} className='hover:cursor-pointer'>
            <div className="z-10 hover:scale-110 transition-transform duration-300 ease-out relative
             before:content-[''] before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
              before:bg-slate-600/30 lg:before:bg-slate-800/30 p-4 pb-0 before:rounded">
                <p className="font-mono pt-5 text-center font-bold text-xl text-gray-300">{project.name}</p>
                <Image className="pt-5 max-w-full md:h-64 lg:h-60 xl:h-52 md:object-contain" src={project.pictureURL} alt={project.name}
                    width={750} height={750} priority />
                <div className="pb-5 pt-5">
                    <p className="font-mono whitespace-pre-wrap text-lg text-gray-300">
                        <span>{project.technologies.substring(0, substringLength)}
                            {project.technologies.length > substringLength ? '...' : ''}</span>
                    </p>
                    <p className='mt-5 text-gray-300'>Click to view</p>
                </div>
            </div>
        </Link>
    )
}
