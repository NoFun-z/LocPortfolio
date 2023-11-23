'use client'

import React, { useEffect, useState } from 'react'
import { Project } from '@/models/project';
import { Grid, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import Carousel from '@/utils/Carousel';
import useProjects from '@/hooks/useProjects';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectDetails() {
  const { projects } = useProjects();
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState<Project | undefined>(undefined);

  //Retrieve project data
  useEffect(() => {
    if (projectId) {
      setProjectData(projects.find(p => p.id === projectId.toString()))
    }
  }, [])

  if (!projectData) {
    return (
      <div className='font-mono font-bold'>
        NO PROJECTS FOUND
      </div>
    )
  }

  return (
    <div className='pt-12 pb-32 md:pt-14'>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <div className='flex flex-col gap-10 justify-center'>
            {projectData.videoSrc ?
              (<Carousel>
                <video autoPlay controls src={projectData.videoSrc} muted />
                <img src={projectData.pictureURL} alt={projectData.name} className='rounded' />
              </Carousel>)
              :
              <img src={projectData.pictureURL} alt={projectData.name} className='rounded' />}
            <div className='flex gap-7'>
              {projectData.githubLink &&
                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className='text-4xl lg:text-5xl hover:opacity-70 hover:cursor-pointer' />
                </a>
              }
              {projectData.publishedLink &&
                <a href={projectData.publishedLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faUpRightFromSquare}
                    className='text-4xl lg:text-5xl hover:opacity-70 hover:cursor-pointer' />
                </a>
              }
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='font-mono text-2xl lg:text-4xl font-bold' style={{ color: '#838fc9' }}>{projectData.name}</div>
          <hr className="mb-12 mt-2 h-2 w-full" style={{ backgroundColor: '#838fc9' }} />
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg font-bold lg:w-44'
                    style={{ color: '#838fc9' }}>Technologies</TableCell>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg'>
                    {projectData.technologies}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg font-bold'
                    style={{ color: '#838fc9' }}>Description</TableCell>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg'>{projectData.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg font-bold'
                    style={{ color: '#838fc9' }}>Main Tools</TableCell>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg'>{projectData.mainTools}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg font-bold'
                    style={{ color: '#838fc9' }}>Published Date</TableCell>
                  <TableCell className='font-mono text-gray-300 text-base lg:text-lg'>{projectData.publishedDate}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}


