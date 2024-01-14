'use client'

import React, { } from 'react'
import { Grid, TableContainer, Table, TableBody, TableRow, TableCell, useMediaQuery, Theme, ThemeProvider, createTheme } from '@mui/material';
import Carousel from '@/utils/Carousel';
import useProjects from '@/hooks/useProjects';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectDetails() {
  const { projects } = useProjects();
  const { projectId } = useParams();
  //Retrieve project data
  const projectData = projects.find(p => p.id === projectId.toString())
  const theme = createTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (!projectData) {
    return (
      <div className='font-mono font-bold'>
        NO PROJECTS FOUND
      </div>
    )
  }

  const gitHubIconStyle = {
    fontSize: '2.25rem', // base size
    lineHeight: '2.5rem', // base line-height
    color: 'rgb(209, 213, 219)',
  }

  // Adjust text size based on screen size
  if (isLargeScreen) {
    gitHubIconStyle.fontSize = '3rem';
    gitHubIconStyle.lineHeight = '1';
  } else {
    gitHubIconStyle.fontSize = '2.25rem';
    gitHubIconStyle.lineHeight = '2.5rem';
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='pt-12 pb-32 md:pt-14'>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <div className='flex flex-col gap-10 justify-center'>
              {projectData.videoSrc ?
                (<Carousel>
                  <video className='w-full' autoPlay controls src={projectData.videoSrc} muted />
                  {...projectData.pictureURL.map(url => (
                    <img key={url} src={url} alt={projectData.name} className='w-full rounded' />
                  ))}
                </Carousel>)
                :
                (<Carousel>
                  {...projectData.pictureURL.map(url => (
                    <img key={url} src={url} alt={projectData.name} className='rounded' />
                  ))}
                </Carousel>)}
              <div className='flex gap-7'>
                {projectData.githubLink &&
                  <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className='hover:opacity-70 hover:cursor-pointer' style={gitHubIconStyle} />
                  </a>
                }
                {projectData.publishedLink &&
                  <a href={projectData.publishedLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faUpRightFromSquare}
                      className='text-4xl lg:text-5xl text-gray-300 hover:opacity-70 hover:cursor-pointer' />
                  </a>
                }
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='font-mono text-xl md:text-2xl lg:text-3xl font-bold' style={{ color: '#838fc9' }}>{projectData.name}</div>
            <hr className="mb-8 mt-2 h-2 w-full" style={{ backgroundColor: '#838fc9' }} />
            {isLargeScreen ? (<TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ color: '#838fc9' }}>
                      <span className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>Technologies</span>
                    </TableCell>
                    <TableCell><span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                      {projectData.technologies}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ color: '#838fc9' }}>
                      <span className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>Description</span>
                    </TableCell>
                    <TableCell><span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                      {projectData.description}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ color: '#838fc9' }}>
                      <span className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>Main Tools</span>
                    </TableCell>
                    <TableCell><span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                      {projectData.mainTools}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ color: '#838fc9' }}>
                      <span className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>Published Date</span>
                    </TableCell>
                    <TableCell><span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                      {projectData.publishedDate}</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>) : (<div>
              <div className='flex flex-col gap-4'>
                <span style={{ color: '#838fc9' }} className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>
                  Technologies
                </span>
                <span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                  {projectData.technologies}
                </span>
              </div>
              <hr className="mb-6 mt-6 h-1 w-full" style={{ backgroundColor: '#838fc9' }} />

              <div className='flex flex-col gap-4'>
                <span style={{ color: '#838fc9' }} className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>
                  Description
                </span>
                <span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                  {projectData.description}
                </span>
              </div>
              <hr className="mb-6 mt-6 h-1 w-full" style={{ backgroundColor: '#838fc9' }} />

              <div className='flex flex-col gap-4'>
                <span style={{ color: '#838fc9' }} className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>
                  Main Tools
                </span>
                <span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                  {projectData.mainTools}
                </span>
              </div>
              <hr className="mb-6 mt-6 h-1 w-full" style={{ backgroundColor: '#838fc9' }} />

              <div className='flex flex-col gap-4'>
                <span style={{ color: '#838fc9' }} className='font-mono font-bold text-lg md:text-xl xl:text-2xl'>
                  Published Date
                </span>
                <span className='font-mono text-gray-300 text-base md:text-lg xl:text-xl'>
                  {projectData.publishedDate}
                </span>
              </div>
              <hr className="mb-6 mt-6 h-1 w-full" style={{ backgroundColor: '#838fc9' }} />
            </div>)}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}


