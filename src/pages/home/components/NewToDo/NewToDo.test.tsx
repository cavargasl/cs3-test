import { render, screen } from '@testing-library/react';
import { NewToDo } from '.';


describe('ToDoList component', () => {
  beforeAll(() => {
    render(<NewToDo />);
  });

  it('should render a header with an input and a button', () => {
    const header = screen.getByTestId('new-todo');
    const input = screen.getByPlaceholderText('What do you need to do?');
    const button = screen.getByText(/add task/i, { selector: 'button' });

    expect(header).toBeDefined();
    expect(input).toBeDefined();
    expect(button).toBeDefined();
  });

});