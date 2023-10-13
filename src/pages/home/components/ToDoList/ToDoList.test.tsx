
import { addListTodos } from '@/redux/slice/todos';
import store from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ToDoList from './ToDoList';


const queryClient = new QueryClient();


jest.mock('./services', () => {
  return {
    getTodos: jest.fn(() => Promise.resolve(mokedGetTodos)),
  };
});

const mokedGetTodos = {
  todos: [
    {
      id: 1,
      title: 'Test Task',
      completed: false,
      userId: 1
    }
  ],
  total: 1,
  skip: 0,
  limit: 5,
  filter: {
    byCompleted: "All",
  }
};

it('ToDoList component renders correctly', async () => {
  store.dispatch(addListTodos({ filter: { byCompleted: "All" }, limit: 5, skip: 0, total: 1, todos: mokedGetTodos.todos }));

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToDoList />
      </QueryClientProvider>
    </Provider>
  );

  const taskElement = await screen.findByText('Test Task');
  expect(taskElement).toBeTruthy();

  const todoElements = await screen.getAllByTestId('to-do-list');
  expect(todoElements.length).toBe(mokedGetTodos.todos.length);
});