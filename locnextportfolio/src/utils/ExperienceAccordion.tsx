import ArrowIconEx from '@/mixes/arrow-icon-ex'
import { Accordion, AccordionSummary, Box, Typography, AccordionDetails } from '@mui/material'
import React, { Fragment } from 'react'

export default function ExperienceAccordion() {
    return (
        <Fragment>
            {/* Experience 1 */}
            <Accordion elevation={3} sx={{
                marginBottom: 3,
                backgroundColor: 'transparent', border: 'solid #838fc9',
                color: 'rgb(209 213 219)', fontFamily: 'monospace'
            }}>
                <AccordionSummary expandIcon={<ArrowIconEx />}>
                    <div className='items-center mt-2'>
                        <span className='mt-2 p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                            style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                            Jul 2023 - Current
                        </span>
                        <div className='mt-2 font-bold text-base md:text-lg xl:text-xl'>
                            Freelance Full Stack .NET Developer at Upwork
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="list-disc pl-5 font-mono mb-4 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Developed websites, data solutions, and software by with React, Angular, .NET REST API, MVC, and ASP.NET
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Constructed database models from the ground up, utilizing SQL and Azure for optimal performance and functionality
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Engaged in regular client discussions, gathering feedback, and deployed continuous improvement throughout the software development life cycle
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            {/* Experience 2 */}
            <Accordion elevation={3} sx={{
                marginBottom: 3,
                backgroundColor: 'transparent', border: 'solid #838fc9',
                color: 'rgb(209 213 219)', fontFamily: 'monospace'
            }}>
                <AccordionSummary expandIcon={<ArrowIconEx />}>
                    <div className='items-center mt-2'>
                        <span className='p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                            style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                            Aug 2023 - Dec 2023
                        </span>
                        <div className='mt-2 font-bold text-base md:text-lg xl:text-xl'>
                            Computer Program Peer Tutor at Niagara College
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="list-disc pl-5 font-mono mb-4 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Guided 1st and 2nd year students in programming in understanding concepts,
                            debugging code, and conducting thorough code testing in MVC, Javascript, SQL
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Offered effective solutions to coding challenges
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Managed multiple student projects, providing support in organizing and optimizing code
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Created reports and provided solutions to aid students in their improvement with the
                            peer tutor coordinator
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            {/* Experience 3 */}
            <Accordion elevation={3} sx={{
                marginBottom: 3,
                backgroundColor: 'transparent', border: 'solid #838fc9',
                color: 'rgb(209 213 219)', fontFamily: 'monospace'
            }}>
                <AccordionSummary expandIcon={<ArrowIconEx />}>
                    <div className='items-center mt-2'>
                        <span className='p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                            style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                            May 2023 - Sep 2023
                        </span>
                        <div className='mt-2 font-bold text-base md:text-lg xl:text-xl'>
                            Game Tech at Cineplex (Internship)
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="list-disc pl-5 font-mono mb-4 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Executed networking tasks, established LANs, managed hardware, and maintained databases for the Cineplex game system
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Developed and deployed a community-based full-stack ASP.NET MVC application designed for seamless meetings management integrated auto-mailing system for Niagara College Committee Advisors
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Led the community-based project presentation management, including slides, github source control pull requests
                        </li>
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Utilized Agile methodology, managing weekly sprints and tasks. Conducted daily code testing, improvements, and attended client meetings
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            {/* Experience 4 */}
            <Accordion elevation={3} sx={{
                marginBottom: 3,
                backgroundColor: 'transparent', border: 'solid #838fc9',
                color: 'rgb(209 213 219)', fontFamily: 'monospace'
            }}>
                <AccordionSummary expandIcon={<ArrowIconEx />}>
                    <div className='items-center mt-2'>
                        <span className='p-2 font-bold font-mono text-sm md:text-base xl:text-lg'
                            style={{ backgroundColor: '#4655a0', color: 'rgb(209 213 219)' }}>
                            2019 - 2020
                        </span>
                        <div className='mt-2 font-bold text-base md:text-lg xl:text-xl'>
                            IT help desk at FPT
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="list-disc pl-5 font-mono mb-4 text-base md:text-lg xl:text-xl">
                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Provided hands-on support at the IT Help Desk, troubleshooting networking issues,
                            addressing hardware and general IT concerns
                        </li>

                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Wrote detailed customer report forms, documenting solutions,
                            and ensuring effective communication of technical resolutions
                        </li>

                        <li className='mb-2 text-gray-300 text-sm md:text-base xl:text-lg'>
                            Collaborated with IT team members to implement and maintain efficient help desk procedures,
                            improvement of support services
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    )
}
