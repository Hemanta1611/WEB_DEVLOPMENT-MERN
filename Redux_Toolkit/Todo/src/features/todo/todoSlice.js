import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: "abc", task:"Demo task", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); // direct mutation of the array, which is generally not possible in normal react
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                   todo.isDone = !todo.isDone;
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions; // action creator are generated for each case reducer function
export default todoSlice.reducer;

/*
--> Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax
*/