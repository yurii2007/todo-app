import { createSlice } from "@reduxjs/toolkit";

import {
  createTodo,
  deleteTodo,
  getTodos,
  getTodosByPage,
  updateTodo,
} from "./operations";

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
  state.todos = [...state.todos, ...action.payload];
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
      .addCase(getTodosByPage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todos = [...payload];
        state.error = null;
      })
      .addCase(getTodosByPage.rejected, todosRejected)
      .addCase(updateTodo.pending, todosPending)
      .addCase(updateTodo.fulfilled, (state, { payload }) => {
        // looking for index of updating element
        const todoIndex = state.todos.findIndex((todo) => todo.id === payload.id);
        state.isLoading = false;
        if (todoIndex === -1) {
          state.error = "Can not find todo in current list";
          return;
        }
        // update element in store
        state.todos[todoIndex] = { ...payload };
        state.error = null;
      })
      .addCase(updateTodo.rejected, todosRejected)
      .addCase(deleteTodo.pending, todosPending)
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        const todoIndex = state.todos.findIndex((todo) => todo.id === payload);
        if (todoIndex === -1) {
          state.error = "Can not find todo in current list";
          return;
        }
        state.todos.splice(todoIndex, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTodo.pending, todosPending)
      .addCase(createTodo.fulfilled, (state, { payload }) => {
        // add new element at the beginning of a store
        state.todos.unshift(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTodo.rejected, todosRejected);
  },
});

export const todoReducer = todoSlice.reducer;
