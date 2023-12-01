'use client'

import React, { useRef, useEffect, useState } from 'react';
import { useAppDispatch, type RootState } from '../app/GlobalRedux/store';
import { useSelector } from 'react-redux';
import { setFilterState, setSortState } from '../app/GlobalRedux/Features/fillter/fiterSlice'


export default function DropDownList() {
  //Make sure to reference useRef type when comparing other elements in the html
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  const [toggleDDL, setToggleDDL] = useState({ sortState: false, filterState: false });
  const dispatch = useAppDispatch();
  const sortTerm = useSelector((state: RootState) => state.counter.sortTerm);
  const filterTerm = useSelector((state: RootState) => state.counter.filterTerm);

  const handleClickOutside = (event: any) => {
    if (
      (dropdownRef.current && !dropdownRef.current.contains(event.target))
    ) {
      // Click occurred outside the dropdowns, close both
      setToggleDDL((prev) => ({ ...prev, sortState: false }));
    }
    if (
      (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target))
    ) {
      // Click occurred outside the dropdowns, close both
      setToggleDDL((prev) => ({ ...prev, filterState: false }));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-3">
      {/* Sort */}
      <div ref={dropdownRef} className="font-mono z-20 relative w-30 before:content-['']
      before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:backdrop-blur-md
       before:bg-slate-600/30 lg:before:bg-slate-800/30">
        <div
          onClick={() => setToggleDDL((prev) => ({ ...prev, sortState: !prev.sortState }))}
          className='flex justify-between items-center w-full text-gray-300 text-center font-bold 
          text-base md:text-lg xl:text-xl p-3 px-4 hover:cursor-pointer space-x-2 hover:text-zinc-900 hover:bg-slate-300'
        >
          <p>Sort By</p>
          <span className={`filter-arrow-icon ${toggleDDL.sortState ? 'expanded' : ''}`}>&#9650;</span>
        </div>
        <div
          className={`${toggleDDL.sortState ? '' : 'hidden'} text-center rounded-b absolute w-full before:content-['']
        before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
        before:backdrop-blur-md before:bg-slate-600/30 lg:before:bg-slate-800/30`}
        >
          <div onClick={() => dispatch(setSortState('All'))}
            className={`${sortTerm === 'All' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
          font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            All
          </div>
          <div onClick={() => dispatch(setSortState('Popular'))}
            className={`${sortTerm === 'Popular' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Popular
          </div>
          <div onClick={() => dispatch(setSortState('Latest'))}
            className={`${sortTerm === 'Latest' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Latest
          </div>
          <div onClick={() => dispatch(setSortState('Oldest'))}
            className={`${sortTerm === 'Oldest' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Oldest
          </div>
        </div>
      </div>

      {/* Filters */}
      <div ref={filterDropdownRef} className="font-mono z-20 relative w-30 before:content-['']
      before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:backdrop-blur-md
       before:bg-slate-600/30 lg:before:bg-slate-800/30">
        <div
          onClick={() => setToggleDDL((prev) => ({ ...prev, filterState: !prev.filterState }))}
          className='flex justify-between items-center w-full text-gray-300 text-center font-bold 
          text-base md:text-lg xl:text-xl p-3 px-4 hover:cursor-pointer space-x-2 hover:text-zinc-900 hover:bg-slate-300'
        >
          <p>Filter</p>
          <span className={`filter-arrow-icon ${toggleDDL.filterState ? 'expanded' : ''}`}>&#9650;</span>
        </div>
        <div
          className={`${toggleDDL.filterState ? '' : 'hidden'} text-center rounded-b absolute w-full before:content-['']
        before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
        before:backdrop-blur-md before:bg-slate-600/30 lg:before:bg-slate-800/30`}
        >
          <div onClick={() => dispatch(setFilterState('All'))}
            className={`${filterTerm === 'All' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
          font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            All
          </div>
          <div onClick={() => dispatch(setFilterState('Software'))}
            className={`${filterTerm === 'Software' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Software
          </div>
          <div onClick={() => dispatch(setFilterState('Websites'))}
            className={`${filterTerm === 'Websites' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Websites
          </div>
          <div onClick={() => dispatch(setFilterState('Data'))}
            className={`${filterTerm === 'Data' ?
              'text-zinc-900 bg-slate-300 hover:opacity-70' :
              'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base md:text-lg xl:text-xl hover:cursor-pointer`}>
            Data
          </div>
        </div>
      </div>
    </div>
  );
}
