import React from 'react'
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import useImages from '@/hooks/useImages';
import { Metadata } from 'next'

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
        <p className='mb-3 font-bold' style={{ color: '#838fc9' }}>
          Computer Programming Peer Tutor - Niagara College <span className='font-light'>(August 2023- Dec 2023)</span>
        </p>
        <ul className="list-disc pl-5">
          <li className='mb-2 text-gray-300'>
            Guided fellow students in programming in understanding concepts,
            debugging code, and conducting thorough code testing in MVC, Javascript, SQL
          </li>
          <li className='mb-2 text-gray-300'>
            Offered effective solutions to coding challenges
          </li>
          <li className='mb-2 text-gray-300'>
            Managed multiple student projects, providing support in organizing and optimizing code
          </li>
          <li className='mb-2 text-gray-300'>
            Created reports and provided solutions to aid students in their improvement with the
            peer tutor coordinator
          </li>
        </ul>
        <p className='mb-3 font-bold' style={{ color: '#838fc9' }}>
          Game Tech - Cineplex - Niagara College Internship  <span className='font-light'>(May 2023- Sep 2023)</span>
        </p>
        <ul className="list-disc pl-5">
          <li className='mb-2 text-gray-300'>
            Executed networking tasks, established LANs, managed hardware, and maintained databases for the Cineplex game system
          </li>
          <li className='mb-2 text-gray-300'>
            Developed and deployed a community-based full-stack ASP.NET MVC application designed for seamless meetings management integrated auto-mailing system for Niagara College Committee Advisors
          </li>
          <li className='mb-2 text-gray-300'>
            Led the community-based project presentation management, including slides, github source control pull requests
          </li>
          <li className='mb-2 text-gray-300'>
            Utilized Agile methodology, managing weekly sprints and tasks. Conducted daily code testing, improvements, and attended client meetings
          </li>
        </ul>
        <p className='pt-3 mb-3 font-bold' style={{ color: '#838fc9' }}>
          IT help desk - FPT <span className='font-light'>(2019-2020)</span>
        </p>
        <ul className="list-disc pl-5">
          <li className='mb-2 text-gray-300'>
            Provided hands-on support at the IT Help Desk, troubleshooting networking issues,
            addressing hardware and general IT concerns
          </li>

          <li className='mb-2 text-gray-300'>
            Wrote detailed customer report forms, documenting solutions,
            and ensuring effective communication of technical resolutions
          </li>

          <li className='mb-2 text-gray-300'>
            Collaborated with IT team members to implement and maintain efficient help desk procedures,
            improvement of support services
          </li>
        </ul>
      </div>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <p className='font-mono mb-10 text-lg md:text-2xl font-bold' style={{ color: '#838fc9' }}>References</p>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <div className='font-mono mb-10 font-medium md:text-lg xl:text-xl'>
        <ul className="list-disc pl-5">
          <li className='mb-2 text-gray-300'>
            <span className='hidden md:inline-block'>Gonul Turkdogan -</span>{" "}gturkdogan@niagaracollege.ca
            <a className='ml-2' href="mailto:gturkdogan@niagaracollege.ca?subject=&body=Dear%20Ms. Gonul Turkdogan:">
              <EmailIcon className='hover:opacity-60' />
            </a>
          </li>
          <li className='mb-2 text-gray-300'>
            <span className='hidden md:inline-block'>David Stovell - </span>{" "}dstovell@niagaracollege.ca
            <a className='ml-2' href="mailto:dstovell@niagaracollege.ca?subject=&body=Dear%20Mr. David Stovell:">
              <EmailIcon className='hover:opacity-60' />
            </a>
          </li>
          <li className='mb-2 text-gray-300'>
            <span className='hidden md:inline-block'>Marsha Badeley - </span>{" "}mbaddeley@niagaracollege.ca
            <a className='ml-2' href="mailto:mbaddeley@niagaracollege.ca?subject=&body=Dear%20Ms. Marsha Badeley:">
              <EmailIcon className='hover:opacity-60' />
            </a>
          </li>
        </ul>
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