import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header icon', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header.querySelector('svg')).toBeInTheDocument();
});
