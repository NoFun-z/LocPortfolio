'use client'

import useProjects from '@/hooks/useProjects'
import ProjectCard from '@/projects/ProjectCard';
import DropDownList from '@/utils/DropDownList';
import SearchBar from '@/utils/SearchBar';
import { Grid } from '@mui/material';
import React, { useState } from 'react'

export default function Work() {
  const { projects } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (searchTerm) {
      // Perform your search logic here
    }
  };

  const handleSetSearchTerm = (searchterm: string) => {
    setSearchTerm(searchterm);
  }

  const handleToggleSort = (sort: boolean) => {
    setToggleSort(sort);
  }

  return (
    <div className='pt-12 mb-40 w-full'>
      <div className='flex justify-between items-center pt-8 mb-10 text-2xl font-bold text-sky-300'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSetSearchTerm} handleSubmit={handleSubmit} />
        <DropDownList toggleSort={toggleSort} handleToggleSort={handleToggleSort} />
      </div>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <Grid container spacing={4}>
        {projects.map((p) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={p.id.toString()}>
            <ProjectCard key={p.id.toString()} project={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
