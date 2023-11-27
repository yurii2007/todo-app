import { createSlice } from "@reduxjs/toolkit";

import { getTodos, getTodosByPage, updateTodo } from "./operations";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// create universal function to handling all cases
const todosPending = (state) => {
  state.isLoading = true;
};

const todosRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const todosFulfilled = (state, action) => {
  state.isLoading = false;
  state.todos = [...action.payload];
  state.error = null;
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, todosPending)
      .addCase(getTodos.fulfilled, todosFulfilled)
      .addCase(getTodos.rejected, todosRejected)
      .addCase(getTodosByPage.pending, todosPending)
      .addCase(getTodosByPage.fulfilled, todosFulfilled)
      .addCase(getTodosByPage.rejected, todosRejected)
      .addCase(updateTodo.pending, todosPending)
      .addCase(updateTodo.fulfilled, (state, { payload }) => {
        const todoIndex = state.todos.findIndex((todo) => todo.id === payload.id);
        if (todoIndex === -1) return;
        state.todos[todoIndex] = { ...payload };
      })
      .addCase(updateTodo.rejected, todosRejected);
  },
});

export const todoReducer = todoSlice.reducer;
