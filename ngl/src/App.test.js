import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<NglApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
