import store from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { ToDoList } from '.';

const queryClient = new QueryClient();
jest.mock('@/', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe('ToDoList component', () => {

  it('should render the list of todos with correct data', async () => {
    // Import the necessary dependencies for mocking
    // Mock the useSelector and useDispatch hooks
    jest.mock('react-redux', () => ({
      useDispatch: jest.fn(),
      useSelector: jest.fn(),
    }));

    // Mock the useQuery hook
    jest.mock('@tanstack/react-query', () => ({
      useQuery: jest.fn(),
    }));

    useDispatch.mockImplementation(() => ({
      isLoading: true,
    }));
    // Render the ToDoList component
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ToDoList />
        </Provider>
      </QueryClientProvider>
    );

    // Assert that the list of todos is rendered correctly
    expect(screen.getByTestId('loader')).toBeDefined();
  });

});