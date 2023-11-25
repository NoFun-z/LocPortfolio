'use client';

import {configureStore} from '@reduxjs/toolkit';
import filterReducer from '@/app/GlobalRedux/Features/fillter/fiterSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        counter: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();