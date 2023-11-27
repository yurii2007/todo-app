import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../utils/axiosInstance";

export const getTodos = createAsyncThunk("todos/getAll", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get("users/1/todos?_start=0&_limit=5");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getTodosByPage = createAsyncThunk(
  "todos/getByPage",
  async (credentials, thunkAPI) => {
    try {
      // set params for request by current page
      const params = new URLSearchParams({
        _start: credentials.start * 5,
        _limit: credentials.limit,
      });
      const { data } = await instance.get(`users/1/todos?${params}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateOne",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.put(`todos/${credentials.id}`, { ...credentials });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteOne",
  async (credentials, thunkAPI) => {
    try {
      await instance.delete(`todos/${credentials}`);
      return credentials;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/createOne",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("todos", {
        userId: 1,
        ...credentials,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
