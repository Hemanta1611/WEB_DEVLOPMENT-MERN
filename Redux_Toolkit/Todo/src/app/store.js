import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer, // The key "todo" should match how you access the state in `useSelector`
    },
});
