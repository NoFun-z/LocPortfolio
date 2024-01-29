'use client'

import Image from 'next/image'
import useImages from '@/hooks/useImages';
import DownloadButton from './DownloadButton';
import { InView } from "react-intersection-observer"

export default function Home() {
  const { techImages } = useImages();

  return (
    <div className="flex flex-col items-center justify-between">
      <section
        className="mb-40 pt-20 w-full flex flex-col-reverse items-center justify-between gap-36 py-6 lg:flex-row">
        <div className='flex flex-col gap-8 text-center lg:text-left'>
          <p className='text-gray-300 font-bold text-lg md:text-2xl xl:text-4xl'>MY NAME IS LOC PHAM</p>
          <p className='font-mono text-green-600 font-medium text-base md:text-lg xl:text-xl'>A passionate software developer</p>
          <div className="text-gray-300 flex gap-6 justify-center lg:justify-start">
            <a href='https://www.niagaracollege.ca/' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/NC-icon.png"
                alt="avatar"
                width={80}
                height={80} />
            </a>
            <a href='https://www.microsoft.com/en-us/microsoft-365/products-apps-services' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/microsoft-logo.jpg"
                alt="avatar"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }} />
            </a>
            <a href='https://www.udemy.com/' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/Udemy-Emblem.png"
                alt="avatar"
                width={82}
                height={82}
                style={{ borderRadius: "50%" }} />
            </a>
          </div>
          <DownloadButton />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/Images/Canva-Avatar.png"
            alt="avatar"
            width={380}
            height={380}
            className='w-full md:w-[420px] xl:w-[460px]'
          />
        </div>
      </section>
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref, entry }) => (
          <section
            ref={ref}
            className={`relative before:content-[''] before:absolute before:-z-10 before:top-0 
            before:left-0 px-2 before:bg-slate-700 before:w-full before:h-full before:opacity-20
            opacity-0 font-mono py-20 lg:px-10 mt-10 mb-20 text-center 
             ${inView ? 'animate-left-fadeInSlideIn before:animate-before-about-fadeInSlideIn' : ''}`}>
            <div className="absolute inset-0 hidden md:block md:-rotate-6 -z-10 bg-slate-900/40"></div> {/* This div serves as the background */}
            <p className='text-xl md:text-2xl lg:text-3xl font-bold'
              style={{ color: '#838fc9' }}>About me</p>
            <p className='text-gray-300 pt-20 text-base md:text-lg xl:text-xl'>
              I'm a C# .NET developer skilled in ASP.NET Core, RESTful API, React, Angular, jQuery UI, Blazor,
              and MVC. My expertise includes server-side and client-side development, cloud integration
              with Azure/AWS, and implementing CI/CD pipelines via Azure DevOps. My expertise spans
              SQL Server, Azure SQL, AWS RDS setup, and Stripe payment integration. I apply Agile
              methodologies to organize team tasks using Kanban boards on Trello, Azure DevOps, or Jira,
              containerize applications with Docker for streamlined development and deployment</p>


            <p className='text-gray-300 pt-8 text-base md:text-lg xl:text-xl'>My commitment to promoting creativity is demonstrated by my
              constant exploration of modern technologies and approaches. I get satisfaction from coming up with
              cutting-edge methods that enable me to create ground-breaking solutions that meet changing consumer
              and market demands</p>
          </section>
        )}
      </InView>
      <InView triggerOnce threshold={0.3}>
        {({ inView, ref, entry }) => (
          <hr
            ref={ref}
            className={`mx-auto mb-20 h-2 w-0 bg-gradient-to-br from-indigo-500 ...
            ${inView ? 'animate-hr-fadeInSlideIn' : ''}`} />
        )}
      </InView>
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref, entry }) => (
          <section
            ref={ref}
            className={`font-mono mb-32 pt-20 text-center lg:px-10 opacity-0
            ${inView ? 'animate-right-fadeInSlideIn' : ''}`}>
            <p className='text-xl md:text-2xl lg:text-3xl  font-bold rounded-md bg-slate-900/50
            md:bg-indigo-950/40 inline-block py-3 px-12'
              style={{ color: '#838fc9' }}>Technologies & Tools I use</p>
            <div className='pt-20 text-lg md:text-xl flex flex-wrap items-center justify-center gap-6'>
              {techImages.map(ti => (
                <a key={ti.alt} href={ti.href} target="_blank" rel="noopener noreferrer" className='relative group'>
                  <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
                    src={ti.src} alt={ti.alt} width={60} height={60}
                    style={{ width: 'auto', height: 'auto' }} />
                </a>
              ))}
            </div>
          </section>
        )}
      </InView>
    </div>
  )
}
