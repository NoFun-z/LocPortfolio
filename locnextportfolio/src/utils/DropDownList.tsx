import React, { useRef, useEffect } from 'react';

interface Props {
  toggleSort: boolean;
  handleToggleSort: (sort: boolean) => void;
}

export default function DropDownList({ toggleSort, handleToggleSort }: Props) {
  //Make sure to reference useRef type when comparing other elements in the html
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div ref={dropdownRef} className='relative w-60 bg-slate-700'>
      <div
        onClick={() => handleToggleSort(!toggleSort)}
        className='flex justify-between items-center w-full text-gray-300 text-center font-bold 
        text-lg p-3 px-4 hover:cursor-pointer space-x-4 hover:text-gray-300/75'
      >
        <p>Sort By</p>
        <span className={`filter-arrow-icon ${toggleSort ? 'expanded' : ''}`}>&#9650;</span>
      </div>
      <div
        className={`${toggleSort ? '' : 'hidden'} text-center z-40 pb-2 absolute max-h-16 h-full w-full bg-slate-700`}
      >
        <div className='font-bold text-gray-300 p-4 text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-zinc-900'>
          Popular
        </div>
        <div className='font-bold text-gray-300 p-4 text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-zinc-900'>
          Latest
        </div>
        <div className='font-bold text-gray-300 p-4 text-lg hover:cursor-pointer hover:bg-slate-300 hover:text-zinc-900'>
          Oldest
        </div>
      </div>
    </div>
  );
}
