import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />);
    const headerElement = screen.getByText(/CS3 · Technical Test · To-Do list/i);
    expect(headerElement).toBeDefined();
  });
});