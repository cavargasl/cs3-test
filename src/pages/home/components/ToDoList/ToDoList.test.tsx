import { render, screen } from '@testing-library/react';
import { ToDoList } from '.';

const MockToDoList = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Prepare a dish from a foreign culture Task 2 with more text for rebase' },
  { id: 3, title: 'Prepare a dish from a foreign culture' },
];

describe('ToDoList component', () => {
  beforeAll(() => {
    render(<ToDoList />);
  });

  it('should render a list of tasks with correct titles and buttons', () => {

    const taskList = screen.getByTestId('to-do-list');
    expect(taskList).toBeDefined();

    MockToDoList.forEach((task) => {
      const taskElement = screen.getByText(task.title);
      expect(taskElement).toBeDefined();

    });
  });

});