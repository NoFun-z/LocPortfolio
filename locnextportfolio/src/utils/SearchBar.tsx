'use client'

import { Paper, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, type RootState } from '../app/GlobalRedux/store';
import { useSelector } from 'react-redux';
import { setSearchState } from '../app/GlobalRedux/Features/fillter/fiterSlice'
import { setProjectsState } from '../app/GlobalRedux/Features/projects/projectSlice'

import useProjects from '@/hooks/useProjects';

interface Props {
    setIsLoading: (loading: boolean) => void;
}

export default function SearchBar({ setIsLoading }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useAppDispatch()
    const searchTerm = useSelector((state: RootState) => state.counter.searchTerm);
    const sortTerm = useSelector((state: RootState) => state.counter.sortTerm);
    const filterTerm = useSelector((state: RootState) => state.counter.filterTerm);
    const { projects } = useProjects();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const fetchData = async () => {
            if (!searchTerm && sortTerm === 'All' && filterTerm === 'All') {
                await dispatch(setProjectsState(projects));
            } else {
                let filteredProjects = [...projects];

                // Filter by search term
                if (searchTerm) {
                    const searchTermUpper = searchTerm.toUpperCase();
                    filteredProjects = filteredProjects.filter((p) =>
                        p.technologies.split(',').some((tech) => tech.toUpperCase().includes(searchTermUpper.toUpperCase()))
                    );
                }

                // Sort by sort term
                if (sortTerm === 'Popular') {
                    // Implement logic for sorting by popularity
                    filteredProjects = filteredProjects.filter(fp => fp.favourite);
                } else if (sortTerm === 'Latest') {
                    // Implement logic for sorting by the latest date
                    filteredProjects.sort((a, b) => new Date(b.publishedDate).getTime() -
                        new Date(a.publishedDate).getTime());
                } else if (sortTerm === 'Oldest') {
                    // Implement logic for sorting by the oldest date
                    filteredProjects.sort((a, b) => new Date(a.publishedDate).getTime() -
                        new Date(b.publishedDate).getTime());
                }

                // Filter by filter term
                // Implement logic for filtering by type
                if (filterTerm !== 'All') {
                    filteredProjects = filteredProjects.filter(fp =>
                        fp.type && fp.type.some((type) =>
                            type.toUpperCase().includes(filterTerm.toUpperCase())
                        )
                    );
                }

                await dispatch(setProjectsState(filteredProjects));
            }

            // Set a timeout to ensure that isLoading is set to false after 0.5 seconds
            const timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 500);

            // Cleanup function
            return () => {
                // If the component is unmounted before the timeout completes,
                // make sure to clear the timeout and set the loading state to false.
                clearTimeout(timeoutId);
                setIsLoading(false);
            };
        }

        fetchData();
    };

    useEffect(() => {
        const syntheticEvent = { preventDefault: () => { } };
        handleSubmit(syntheticEvent as React.FormEvent);

    }, [sortTerm, filterTerm]);

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                background: 'transparent',
                border: `3px solid ${isFocused ? '#838fc9' : '#70819e'}`,
                boxShadow: 'none',
                position: 'relative',
                transform: 'translateY(-2px)',
            }}
            className="font-mono before:rounded-full before:content-['']
            before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
             before:bg-slate-600/30 lg:before:bg-slate-800/20"
        >
            <IconButton
                type='button'
                sx={{
                    p: '10px',
                    color: '#838fc9',
                    zIndex: 1,
                    position: isFocused ? 'relative' : 'absolute',
                    '&:disabled': {
                        color: '#70819e',
                    },
                }}
                aria-label='search'
                disabled={!isFocused}
            >
                <SearchIcon />
            </IconButton>
            <input
                className={`search-bar ${isFocused ? 'focused' : ''}`}
                placeholder='By tools...'
                value={searchTerm}
                onChange={(e) => dispatch(setSearchState(e.target.value))}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    backgroundColor: 'transparent',
                    color: '#838fc9',
                    height: '46px',
                }}
            />
        </Paper>
    );
}
