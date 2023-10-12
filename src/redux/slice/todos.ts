
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo, ToDoList } from '@/types';
import { RootState } from '../store';

const EmptyTodosState: ToDoList = {
  todos: [],
  total: 0,
  skip: 0,
  limit: 0
}
export const todosState = createSlice({
  name: 'todos',
  initialState: EmptyTodosState,
  reducers: {
    addListTodos: (_, action: PayloadAction<ToDoList>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<ToDo>) => {
      return {...state, total: state.total + 1, todos: [action.payload, ...state.todos]}
    },
    removeTodo: (state, action: PayloadAction<ToDo>) => {
      return { ...state, total: state.total - 1, todos: state.todos.filter(item => item.id !== action.payload.id) }
    }
  }
})

export const { addListTodos, addTodo, removeTodo } = todosState.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todosState.reducer;