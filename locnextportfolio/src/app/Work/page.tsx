'use client'

import useProjects from '@/hooks/useProjects'
import { Project } from '@/models/project';
import ProjectCard from '@/projects/ProjectCard';
import DropDownList from '@/utils/DropDownList';
import SearchBar from '@/utils/SearchBar';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function Work() {
  const { projects } = useProjects();
  const [projectsData, setProjectsData] = useState<Project[]>([])
  const [filterTerm, setFilterTerm] = useState({ searchTerm: '', sortTerm: 'All' });
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!filterTerm.searchTerm && filterTerm.sortTerm === 'All') {
      setProjectsData(projects);
    } else {
      let filteredProjects = [...projects];

      // Filter by search term
      if (filterTerm.searchTerm) {
        const searchTermUpper = filterTerm.searchTerm.toUpperCase();
        filteredProjects = filteredProjects.filter((p) =>
          p.technologies.split(',').some((tech) => tech.toUpperCase().includes(searchTermUpper))
        );
      }

      // Sort by sort term
      if (filterTerm.sortTerm === 'Popular') {
        // Implement logic for sorting by popularity
        filteredProjects = filteredProjects.filter(fp => fp.favourite);
      } else if (filterTerm.sortTerm === 'Latest') {
        // Implement logic for sorting by the latest date
        filteredProjects.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
      } else if (filterTerm.sortTerm === 'Oldest') {
        // Implement logic for sorting by the oldest date
        filteredProjects.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
      }

      setProjectsData(filteredProjects);
    }
  };

  const handleSetSearchTerm = (searchterm: string) => {
    setFilterTerm({ ...filterTerm, searchTerm: searchterm });
  }

  const handleSetSortTerm = (sortterm: string, e: React.MouseEvent) => {
    setFilterTerm({ ...filterTerm, sortTerm: sortterm });
  }

  const handleToggleSort = (sort: boolean) => {
    setToggleSort(sort);
  }

  useEffect(() => {
    setProjectsData(projects);
  }, [])

  useEffect(() => {
    const syntheticEvent = { preventDefault: () => { } };
    handleSubmit(syntheticEvent as React.FormEvent)
  }, [filterTerm.sortTerm])

  return (
    <div className='pt-12 mb-40 w-full'>
      <div className='flex justify-between items-center pt-8 mb-10 text-2xl font-bold text-sky-300'>
        <SearchBar searchTerm={filterTerm.searchTerm} setSearchTerm={handleSetSearchTerm}
          handleSubmit={handleSubmit} />
        <DropDownList toggleSort={toggleSort} handleToggleSort={handleToggleSort}
          handleSetSortTerm={(sortTerm, e) => handleSetSortTerm(sortTerm, e)} sortTerm={filterTerm.sortTerm} />
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
