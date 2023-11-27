'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    searchTerm: string,
    sortTerm: string,
    filterTerm: string
}

const initialState: CounterState = {
    searchTerm: "",
    sortTerm: "All",
    filterTerm: "All"
}

export const filterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSearchState: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSortState: (state, action) => {
            state.sortTerm = action.payload;
        },
        setFilterState: (state, action) => {
            state.filterTerm = action.payload;
        }
    }
})

export const { setSearchState, setSortState, setFilterState } = filterSlice.actions;
export default filterSlice.reducer;