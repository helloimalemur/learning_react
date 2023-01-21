import { render, screen } from '@testing-library/react';
import App from './App';

test('renders koonts', () => {
  render(<App />);
  const linkElement = screen.getByText(/Koonts/i);
  expect(linkElement).toBeInTheDocument();
});
