import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Features/User-slice';

export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})