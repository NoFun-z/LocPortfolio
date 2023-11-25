'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    searchTerm: string,
    sortTerm: string
}

const initialState: CounterState = {
    searchTerm: "",
    sortTerm: "All"
}

export const filterSlice = createSlice({
    name: 'filterCounter',
    initialState,
    reducers: {
        setFilterState: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSortState: (state, action) => {
            state.sortTerm = action.payload;
        }
    }
})

export const { setFilterState, setSortState } = filterSlice.actions;
export default filterSlice.reducer;