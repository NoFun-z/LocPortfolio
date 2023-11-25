'use client'

import React, { useRef, useEffect } from 'react';
import { useAppDispatch, type RootState } from '../app/GlobalRedux/store';
import { useSelector } from 'react-redux';
import { setSortState } from '../app/GlobalRedux/Features/fillter/fiterSlice'

interface Props {
  toggleSort: boolean;
  handleToggleSort: (sort: boolean) => void;
}

export default function DropDownList({ toggleSort, handleToggleSort }: Props) {
  //Make sure to reference useRef type when comparing other elements in the html
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const sortTerm = useSelector((state: RootState) => state.counter.sortTerm);

  const handleClickOutside = (event: any) => {
    //Only set the toggle to false when the ddl is clicked first
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside the dropdown, close it
      handleToggleSort(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="font-mono z-20 relative w-40 before:content-['']
      before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:backdrop-blur-lg
      md:before:backdrop-blur-md before:bg-slate-600/30 lg:before:bg-slate-800/40">
      <div
        onClick={() => handleToggleSort(!toggleSort)}
        className='flex justify-between items-center w-full text-gray-300 text-center font-bold 
        text-base p-3 px-4 hover:cursor-pointer space-x-4 hover:text-zinc-900 hover:bg-slate-300'
      >
        <p>Sort By</p>
        <span className={`filter-arrow-icon ${toggleSort ? 'expanded' : ''}`}>&#9650;</span>
      </div>
      <div
        className={`${toggleSort ? '' : 'hidden'} text-center rounded-b absolute w-full before:content-['']
        before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:backdrop-blur-lg
        md:before:backdrop-blur-md before:bg-slate-600/30 lg:before:bg-slate-800/40`}
      >
        <div onClick={() => dispatch(setSortState('All'))}
          className={`${sortTerm === 'All' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
          font-bold p-4 text-base hover:cursor-pointer`}>
          All
        </div>
        <div onClick={() => dispatch(setSortState('Popular'))}
          className={`${sortTerm === 'Popular' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base hover:cursor-pointer`}>
          Popular
        </div>
        <div onClick={() => dispatch(setSortState('Latest'))}
          className={`${sortTerm === 'Latest' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base hover:cursor-pointer`}>
          Latest
        </div>
        <div onClick={() => dispatch(setSortState('Oldest'))}
          className={`${sortTerm === 'Oldest' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base hover:cursor-pointer`}>
          Oldest
        </div>
      </div>
    </div>
  );
}
