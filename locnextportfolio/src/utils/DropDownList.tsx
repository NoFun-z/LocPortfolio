import React, { useRef, useEffect } from 'react';

interface Props {
  toggleSort: boolean;
  handleToggleSort: (sort: boolean) => void;
  handleSetSortTerm: (sortTerm: string, e: React.MouseEvent) => void;
  sortTerm: string;
}

export default function DropDownList({ toggleSort, handleToggleSort, handleSetSortTerm, sortTerm }: Props) {
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
    <div ref={dropdownRef} className="relative w-40 before:content-['']
      before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
      before:backdrop-blur-lg before:bg-slate-600/50">
      <div
        onClick={() => handleToggleSort(!toggleSort)}
        className='flex justify-between items-center w-full text-gray-300 text-center font-bold 
        text-base p-3 px-4 hover:cursor-pointer space-x-4 hover:text-zinc-900 hover:bg-slate-300'
      >
        <p>Sort By</p>
        <span className={`filter-arrow-icon ${toggleSort ? 'expanded' : ''}`}>&#9650;</span>
      </div>
      <div
        className={`${toggleSort ? '' : 'hidden'} text-center z-40 rounded-b absolute w-full before:content-['']
        before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
        before:backdrop-blur-lg before:bg-slate-600/50`}
      >
        <div onClick={(e) => handleSetSortTerm('All', e)}
          className={`${sortTerm === 'All' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
          font-bold p-4 text-base hover:cursor-pointer`}>
          All
        </div>
        <div onClick={(e) => handleSetSortTerm('Popular', e)}
          className={`${sortTerm === 'Popular' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base hover:cursor-pointer`}>
          Popular
        </div>
        <div onClick={(e) => handleSetSortTerm('Latest', e)}
          className={`${sortTerm === 'Latest' ?
            'text-zinc-900 bg-slate-300 hover:opacity-70' :
            'text-gray-300 hover:bg-slate-300 hover:text-zinc-900'}
        font-bold p-4 text-base hover:cursor-pointer`}>
          Latest
        </div>
        <div onClick={(e) => handleSetSortTerm('Oldest', e)}
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
