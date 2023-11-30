'use client'

import ProjectCard from '@/projects/ProjectCard';
import DropDownList from '@/utils/DropDownList';
import SearchBar from '@/utils/SearchBar';
import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { type RootState } from '../GlobalRedux/store';
import { useSelector } from 'react-redux';
import ProjectCardSkeleton from '@/projects/ProjectCardSkeleton';

export default function Work() {
  const projectsData = useSelector((state: RootState) => state.project);
  const [isLoading, setIsLoading] = useState(true);

  const HandleLoading = (loading: boolean) => {
    setIsLoading(loading);
  }

  return (
    <div className='pt-12 mb-40 w-full'>
      <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-start md:items-center pt-8 mb-10 text-2xl font-bold text-sky-300'>
        <SearchBar setIsLoading={HandleLoading}/>
        <DropDownList />
      </div>
      <hr className="mb-12 h-1 w-full bg-gradient-to-br from-indigo-500 ..." />
      <Grid container spacing={4}>
        {projectsData.map((p) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={p.id}>
            {isLoading ? <ProjectCardSkeleton key={p.id} project={p} />
              : <ProjectCard key={p.id} project={p} />}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
