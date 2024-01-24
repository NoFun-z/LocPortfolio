import React from 'react'
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import useImages from '@/hooks/useImages';
import { Metadata } from 'next'
import WorkTimeLine from './timeLine';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Hidden } from '@mui/material';
import ExperienceAccordion from '@/utils/ExperienceAccordion';

export const metadata: Metadata = {
  title: 'My NextJS Portfolio - Loc Pham Experience',
  description: 'My education and work experience information',
}

export default function Experience() {
  const { serviceImages } = useImages();

  return (
    <div className="pt-14 md:pt-20 flex flex-col">
      <p className='font-mono mb-10 text-lg md:text-2xl font-bold' style={{ color: '#838fc9' }}>Education</p>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <div className='font-mono mb-10 md:text-lg xl:text-xl'>
        <p className='mb-3 font-bold' style={{ color: '#838fc9' }}>
          Niagara College - Computer Programming & Analysis <span className='font-light'>(2021-2024)</span>
        </p>
        <ul className="list-disc pl-5">
          <li className='mb-2 text-gray-300'>
            Developed functional server-side components using REST APIs using GET/POST/DELETE/PUT requests,
            including writting unit tests to ensure code integrity
          </li>
          <li className='mb-2 text-gray-300'>
            Constructed applications in C# incorporating advanced concepts such as binary trees, recursions,
            linked lists, arrays, polymorphism, indexer, and inheritance
          </li>
          <li className='mb-2 text-gray-300'>
            Applied SQL expertise to handle SSIS, big data, retrieval, and database backup
            operations. Implemented optimization strategies, including the creation of stored procedures and the
            utilization of indexes. Successfully integrated various software like C#, PowerBI with SQL databases
          </li>
          <li className='text-gray-300'>
            Demonstrated a keen understanding of the IT business industry, network communication, and
            cybersecurity measures to avoid malware
          </li>
        </ul>
      </div>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <p className='font-mono mb-10 text-lg md:text-2xl font-bold' style={{ color: '#838fc9' }}>Job Experience</p>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <div className='font-mono mb-10 text-base md:text-lg xl:text-xl'>
        <Hidden mdUp>
          <ExperienceAccordion />
        </Hidden>
        <Hidden mdDown>
          <WorkTimeLine />
        </Hidden>
        <div className='mt-12 p-4 text-gray-300' style={{ backgroundColor: '#4655a0' }}>
          <span><TipsAndUpdatesIcon style={{ color: '#e6b800' }} /></span> I am unwavering in my resolve to prioritize the needs of my clients and constantly seek strategies
          to enhance my work. By improving processes and welcoming feedback, I aim to surpass expectations and
          achieve long-term success
        </div>
      </div>

      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <p className='font-mono pt-20 mb-10 text-center text-lg md:text-2xl font-bold' style={{ color: '#838fc9' }}>
        Services I offer
      </p>
      <div className='font-mono mb-32 pt-12 text-lg md:text-xl flex flex-wrap items-center justify-center gap-10'>
        {serviceImages.map(si => (
          <a key={si.title} href={si.href} target="_blank" rel="noopener noreferrer" className='relative group'>
            <div className="image-container">
              <Image
                className='hover:cursor-pointer transition-transform duration-300 ease-out transform
             hover:scale-110 rounded p-4 bg-cover'
                src={si.src}
                alt={si.alt}
                width={250}
                height={250}
              />
              <div className="text-gray-300 text-center font-medium md:text-lg xl:text-xl mt-5">{si.title}</div>
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}