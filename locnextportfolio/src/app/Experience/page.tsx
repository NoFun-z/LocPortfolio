'use client'

import React from 'react'
import Image from 'next/image'
import useImages from '@/hooks/useImages';
import WorkTimeLine from './timeLine';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Hidden } from '@mui/material';
import ExperienceAccordion from '@/utils/ExperienceAccordion';
import { InView } from "react-intersection-observer"


export default function Experience() {
  const { serviceImages } = useImages();

  return (
    <div className="pt-14 md:pt-20 flex flex-col">
      <InView triggerOnce threshold={0.3}>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={` ${inView ? 'animate-bottom-fadeInSlideIn' : ''}
            opacity-0 font-mono mb-10 text-lg md:text-2xl font-bold`} style={{ color: '#838fc9' }}>Education</p>
        )}
      </InView>
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <hr
            ref={ref}
            className={`${inView ? 'animate-full-hr-fadeInSlideIn' : ''}
          mb-12 h-1 w-0 bg-gradient-to-br from-indigo-500 ...`} />
        )}
      </InView>
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${inView ? 'animate-left-fadeInSlideIn' : ''}
            opacity-0 font-mono mb-10 md:text-lg xl:text-xl`}>
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
        )}
      </InView>
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <hr
            ref={ref}
            className={`${inView ? 'animate-full-hr-fadeInSlideIn' : ''}
          mb-12 h-1 w-0 bg-gradient-to-br from-indigo-500 ...`} />
        )}
      </InView>
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={` ${inView ? 'animate-bottom-fadeInSlideIn' : ''}
          opacity-0 font-mono mb-10 text-lg md:text-2xl font-bold`} style={{ color: '#838fc9' }}>Job Experience</p>
        )}
      </InView>
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <hr
            ref={ref}
            className={`${inView ? 'animate-full-hr-fadeInSlideIn' : ''}
          mb-12 h-1 w-0 bg-gradient-to-br from-indigo-500 ...`} />
        )}
      </InView>
      <div className='font-mono mb-10 text-base md:text-lg xl:text-xl'>
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${inView ? 'animate-left-fadeInSlideIn' : ''}
              opacity-0`}>
              <Hidden mdUp>
                <ExperienceAccordion />
              </Hidden>
              <Hidden mdDown>
                <WorkTimeLine />
              </Hidden>
            </div>
          )}
        </InView>
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className='overflow-x-hidden'>
              <div
                className={`${inView ? 'animate-idea-fadeInSlideIn' : ''}
                transform -translate-x-full mt-12 p-4 text-gray-300`} style={{ backgroundColor: '#4655a0' }}>
                <span><TipsAndUpdatesIcon style={{ color: '#e6b800' }} /></span> I am unwavering in my resolve to prioritize the needs of my clients and constantly seek strategies
                to enhance my work. By improving processes and welcoming feedback, I aim to surpass expectations and
                achieve long-term success
              </div>
            </div>
          )}
        </InView>
      </div>

      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <hr
            ref={ref}
            className={`${inView ? 'animate-full-hr-fadeInSlideIn' : ''}
          mb-12 h-1 w-0 bg-gradient-to-br from-indigo-500 ...`} />
        )}
      </InView>
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={`${inView ? 'animate-bottom-fadeInSlideIn' : ''}
            opacity-0 font-mono pt-20 mb-10 text-center text-lg md:text-2xl font-bold`} style={{ color: '#838fc9' }}>
            Services I offer
          </p>
        )}
      </InView>
      <div className='font-mono mb-32 pt-12 text-lg md:text-xl flex flex-col items-center'>
        {serviceImages.map((si, index) => (
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <a
                ref={ref}
                key={si.title} href={si.href} target="_blank" rel="noopener noreferrer"
                className={` ${inView ? (index % 2 === 0 ? 'animate-left-fadeInSlideIn' :
                  'animate-right-fadeInSlideIn') : ''} relative group opacity-0`}>
                <div className={` bg-slate-800/40 rounded-md mb-12 p-6 lg:p-8 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center justify-center gap-12 lg:gap-24 w-full`}>
                  <div className='w-full flex flex-col items-center'>
                    <p className="text-gray-300 text-center font-medium md:text-lg xl:text-xl mt-5">{si.title}</p>
                    <Image
                      className='hover:cursor-pointer transition-transform duration-300 ease-out transform hover:scale-110 rounded p-4 bg-cover'
                      src={si.src}
                      alt={si.alt}
                      width={400}
                      height={400}
                    />
                  </div>
                  <p className='w-full text-gray-300 text-sm md:text-base xl:text-lg'>{si.description}</p>
                </div>
              </a>
            )}
          </InView>

        ))}
      </div>

    </div>
  )
}