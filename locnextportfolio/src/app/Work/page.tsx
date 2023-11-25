'use client'

import useProjects from '@/hooks/useProjects'
import { Project } from '@/models/project';
import ProjectCard from '@/projects/ProjectCard';
import DropDownList from '@/utils/DropDownList';
import SearchBar from '@/utils/SearchBar';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import type { RootState } from '../GlobalRedux/store';
import { useSelector } from 'react-redux';

export default function Work() {
  const { projects } = useProjects();
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  const searchTerm = useSelector((state: RootState) => state.counter.searchTerm);
  const sortTerm = useSelector((state: RootState) => state.counter.sortTerm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm && sortTerm === 'All') {
      setProjectsData(projects);
    } else {
      let filteredProjects = [...projects];

      // Filter by search term
      if (searchTerm) {
        const searchTermUpper = searchTerm.toUpperCase();
        filteredProjects = filteredProjects.filter((p) =>
          p.technologies.split(',').some((tech) => tech.toUpperCase().includes(searchTermUpper))
        );
      }

      // Sort by sort term
      if (sortTerm === 'Popular') {
        // Implement logic for sorting by popularity
        filteredProjects = filteredProjects.filter(fp => fp.favourite);
      } else if (sortTerm === 'Latest') {
        // Implement logic for sorting by the latest date
        filteredProjects.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
      } else if (sortTerm === 'Oldest') {
        // Implement logic for sorting by the oldest date
        filteredProjects.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
      }

      setProjectsData(filteredProjects);
    }
  };

  const handleToggleSort = (sort: boolean) => {
    setToggleSort(sort);
  }

  useEffect(() => {
    setProjectsData(projects);
  }, [])

  useEffect(() => {
    const syntheticEvent = { preventDefault: () => { } };
    handleSubmit(syntheticEvent as React.FormEvent)
  }, [sortTerm])

  return (
    <div className='pt-12 mb-40 w-full'>
      <div className='flex justify-between items-center pt-8 mb-10 text-2xl font-bold text-sky-300'>
        <SearchBar handleSubmit={handleSubmit} />
        <DropDownList toggleSort={toggleSort} handleToggleSort={handleToggleSort} />
      </div>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <Grid container spacing={4}>
        {projectsData.map((p) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={p.id}>
            <ProjectCard key={p.id} project={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
