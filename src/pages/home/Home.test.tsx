import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render the NewToDo and ToDoList component', () => {
    const newToDoComponent = screen.getByTestId('new-todo');
  const toDoListComponent = screen.getByTestId('to-do-list');

  expect(newToDoComponent).toBeDefined();
  expect(toDoListComponent).toBeDefined();
  });
});

