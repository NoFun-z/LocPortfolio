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
  const [projectData, setProjectData] = useState<Project | undefined>();

  //Retrieve project data
  useEffect(() => {
    if (projectId) {
      setProjectData(projects.find(p => p.id === projectId.toString()))
    }
  }, [])

  if (!projectData) {
    return <div>NO DATA</div>
  }

  return (
    <div className='pt-12 pb-32 md:pt-14'>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <div className='flex flex-col gap-10 justify-center'>
            {projectData.videoSrc ?
              (<Carousel>
                {/* <video controls="" src={projectData.videoSrc} muted/> */}
                <img src={projectData.pictureURL} alt={projectData.name} className='rounded' />
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
          <div className='text-2xl lg:text-4xl font-bold'>{projectData.name}</div>
          <hr className="mb-12 mt-2 h-2 w-full" style={{ backgroundColor: '#838fc9' }} />
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='text-gray-300 text-base lg:text-lg font-bold lg:w-44'>Technologies</TableCell>
                  <TableCell className='text-gray-300 text-base lg:text-lg'>{projectData.technologies}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-gray-300 text-base lg:text-lg font-bold'>Description</TableCell>
                  <TableCell className='text-gray-300 text-base lg:text-lg'>{projectData.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-gray-300 text-base lg:text-lg font-bold'>Main Tools</TableCell>
                  <TableCell className='text-gray-300 text-base lg:text-lg'>{projectData.mainTools}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-gray-300 text-base lg:text-lg font-bold'>Published Date</TableCell>
                  <TableCell className='text-gray-300 text-base lg:text-lg'>{projectData.publishedDate}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     ''
//   );

//   const db = client.db();
//   const projectsCollection = db.collection('projects');

//   const projects = await projectsCollection.find({}, { projection: { _id: 1 } }).toArray();

//   client.close();

//   return {
//     fallback: false,
//     paths: projects.map(p => ({
//       params: { projectId: p._id?.toString() },
//     })),
//   }
// }

// export async function getServerProps(context: any) {
//   const projectId = context.params.projectId;

//   const client = await MongoClient.connect(
//     ''
//   );

//   try {
//     const db = client.db();
//     const projectsCollection = db.collection('projects');
//     console.log("Why!");
//     const selectedProject = await projectsCollection.findOne({ _id: new ObjectId(projectId) });

//     if (selectedProject) {
//       console.log("Good");
//     } else {
//       console.log("Bad: No project found");
//     }

//     return {
//       props: {
//         projectData: {
//           id: selectedProject?._id.toString(),
//           name: selectedProject?.name,
//           technologies: selectedProject?.technologies,
//           description: selectedProject?.description,
//           publishedDate: selectedProject?.publishedDate,
//           pictureURL: selectedProject?.pictureURL,
//           publishedLink: selectedProject?.publishedLink,
//           githubLink: selectedProject?.githubLink,
//           favourite: selectedProject?.favourite,
//           videoSrc: selectedProject?.videoSrc,
//         },
//       },
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return {
//       notFound: true,
//     };
//   } finally {
//     client.close();
//   }
// }

