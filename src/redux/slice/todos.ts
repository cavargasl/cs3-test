
import { Filter, ToDo, ToDoList } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const EmptyTodosState: ToDoList = {
  todos: [],
  total: 0,
  skip: 0,
  limit: 0,
  filter: {
    byTitle: undefined,
    byCompleted: "All"
  }
}
export const todosState = createSlice({
  name: 'todos',
  initialState: EmptyTodosState,
  reducers: {
    addListTodos: (state, action: PayloadAction<ToDoList>) => {
      return { ...state, ...action.payload };
    },
    addTodo: (state, action: PayloadAction<ToDo>) => {
      return { ...state, total: state.total + 1, todos: [action.payload, ...state.todos] }
    },
    removeTodo: (state, action: PayloadAction<ToDo>) => {
      return { ...state, total: state.total - 1, todos: state.todos.filter(item => item.id !== action.payload.id) }
    },
    filterTodos: (state, action: PayloadAction<Partial<Filter>>) => {
      return { ...state, filter: { ...state.filter, ...action.payload } }
    }
  }
})

export const { addListTodos, addTodo, removeTodo, filterTodos } = todosState.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todosState.reducer;