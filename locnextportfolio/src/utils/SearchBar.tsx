import { Paper, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    searchTerm: string,
    setSearchTerm: (searchterm: string) => void,
    handleSubmit: (e: any) => void
}

export default function SearchBar({ searchTerm, setSearchTerm, handleSubmit }: Props) {
    const [isFocused, setIsFocused] = useState(false);

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
            md:before:backdrop-blur-sm before:bg-slate-600/30 lg:before:bg-slate-800/20"
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
                placeholder='Search by tools...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
