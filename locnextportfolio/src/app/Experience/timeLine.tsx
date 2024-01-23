'use client'

import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

export default function WorkTimeLine() {
    return (
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            },
        }}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{ border: '2px solid #838fc9', padding: '12px' }} variant="outlined">
                        <SettingsAccessibilityIcon style={{ color: 'rgb(209 213 219)' }} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#b8bfe0' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pt: '24px', px: 4, textAlign: 'left' }}>
                    <span className='mb-3 p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                        style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                        Jul 2023 - Current
                    </span>
                    <p className='mt-10 mb-3 font-bold font-mono text-base md:text-lg xl:text-xl' style={{ color: '#838fc9' }}>
                        Freelance Full Stack .NET Developer - Upwork
                    </p>
                    <ul className="list-disc pl-5 font-mono mb-10 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300'>
                            Developed websites, data solutions, and software by with React, Angular, .NET REST API, MVC, and ASP.NET
                        </li>
                        <li className='mb-2 text-gray-300'>
                            Constructed database models from the ground up, utilizing SQL and Azure for optimal performance and functionality
                        </li>
                        <li className='mb-2 text-gray-300'>
                            Engaged in regular client discussions, gathering feedback, and deployed continuous improvement throughout the software development life cycle
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{ border: '2px solid #838fc9', padding: '12px' }} variant="outlined">
                        <SchoolIcon style={{ color: 'rgb(209 213 219)' }} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#b8bfe0' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pt: '24px', px: 4, textAlign: 'left' }}>
                    <span className='mb-3 p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                        style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                        Aug 2023 - Dec 2023
                    </span>
                    <p className='mt-10 mb-3 font-bold font-mono text-base md:text-lg xl:text-xl' style={{ color: '#838fc9' }}>
                        Computer Program Peer Tutor - Niagara College
                    </p>
                    <ul className="list-disc pl-5 font-mono mb-10 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300'>
                            Guided 1st and 2nd year students in programming in understanding concepts,
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
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{ border: '2px solid #838fc9', padding: '12px' }} variant="outlined">
                        <SchoolIcon style={{ color: 'rgb(209 213 219)' }} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#b8bfe0' }} />
                </TimelineSeparator >
                <TimelineContent sx={{ pt: '24px', px: 4, textAlign: 'left' }}>
                    <span className='mb-3 p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                        style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                        May 2023 - Sep 2023
                    </span>
                    <p className='mt-10 mb-3 font-bold font-mono text-base md:text-lg xl:text-xl' style={{ color: '#838fc9' }}>
                        Game Tech - Cineplex (Internship)
                    </p>
                    <ul className="list-disc pl-5 font-mono mb-10 text-base md:text-lg xl:text-xl">
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
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{ border: '2px solid #838fc9', padding: '12px' }} variant="outlined">
                        <LaptopIcon style={{ color: 'rgb(209 213 219)' }} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#b8bfe0' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pt: '24px', px: 4, textAlign: 'left' }}>
                    <span className='mb-3 p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                        style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                        2019 - 2020
                    </span>
                    <p className='mt-10 mb-3 font-bold font-mono text-base md:text-lg xl:text-xl' style={{ color: '#838fc9' }}>
                        IT help desk - FPT
                    </p>
                    <ul className="list-disc pl-5 font-mono mb-10 text-base md:text-lg xl:text-xl">
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
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}
