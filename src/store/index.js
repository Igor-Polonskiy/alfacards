import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './todoSlice';

export default configureStore({
    reducer: {
        cards: cardReducer,
    },
});