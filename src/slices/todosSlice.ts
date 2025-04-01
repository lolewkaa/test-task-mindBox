import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoItem } from "../types/types";

type TodosState = {
  value: RepoItem[];
}

const initialState: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosRepo: (state: TodosState, action: PayloadAction<RepoItem>) => {
      state.value = [...state.value, action.payload]
      },
      changeTodoStatus: (state: TodosState, action: PayloadAction<RepoItem>) => {
        const index = state.value.findIndex((el) => el.id === action.payload.id);
        state.value.splice(index, 1, action.payload);
      },
      clearTodos: (state: TodosState) => {
        const newArr = state.value.filter((el) => el.done !== true)
        state.value = newArr
      },
    },
});

export const { setTodosRepo, changeTodoStatus, clearTodos } = todosSlice.actions;

export default todosSlice.reducer;