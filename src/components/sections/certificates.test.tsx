import { render, screen } from '@testing-library/react';
import { certificates } from '@/data/certificates';
import Certificates from './certificates';

describe('Certificates section', () => {
  test('renders Certificates heading', () => {
    render(<Certificates />);
    const title = screen.getByRole('heading', { name: /certificates/i });
    expect(title).toBeInTheDocument();
  });
  test('renders every certificate', () => {
    render(<Certificates />);
    const certificates = screen.getAllByRole('listitem');
    expect(certificates).toHaveLength(certificates.length);
  });
  test('renders clickable certificate links', () => {
    render(<Certificates />);
    const links = screen.getAllByRole('link', { name: /certificate/i });
    expect(links).toHaveLength(certificates.length);
  });
});
