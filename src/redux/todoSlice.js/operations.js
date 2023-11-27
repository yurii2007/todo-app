import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../utils/axiosInstance";

export const getTodos = createAsyncThunk("todos/getAll", async () => {
  try {
    const { data } = await instance.get("users/1/todos?_start=0&_limit=20");
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getTodosByPage = createAsyncThunk("todos/getByPage", async (credentials) => {
  try {
    const params = new URLSearchParams({
      _start: credentials.start,
      _limit: credentials.limit,
    });
    const { data } = await instance.get(`users/1/todos?${params}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const updateTodo = createAsyncThunk("todos/updateOne", async (credentials) => {
  try {
    const { data } = await instance.put(`todos/${credentials.id}`, { ...credentials });
    return data;
  } catch (error) {
    return error.message;
  }
});
