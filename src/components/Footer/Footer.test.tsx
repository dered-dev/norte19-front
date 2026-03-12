import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData/useFetchData';
import { FooterMock } from './mocks/FooterMock';

// Mock the useFetchData hook
vi.mock('../../hooks/useFetchData/useFetchData', () => ({
  useFetchData: vi.fn(),
}));

const mockWindowWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('Footer', () => {
  beforeEach(() => {
    // Reset mocks before each test to ensure test isolation
    vi.clearAllMocks();
  });

  const checkFooter = () => {
    vi.mocked(useFetchData).mockReturnValue({
      data: FooterMock,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <Footer />
      </Router>,
    );
    expect(screen.getByAltText('logo')).toHaveAttribute(
      'src',
      FooterMock.data.attributes.logo.data.attributes.url,
    );
    expect(screen.getByText('Inversionistas')).toBeInTheDocument();
    expect(
      screen.getByText(
        FooterMock.data.attributes.copyright,
      ),
    ).toBeInTheDocument();
  }

  it('renders loading spinner when data is loading', () => {
    vi.mocked(useFetchData).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <Router>
        <Footer />
      </Router>,
    );

    expect(screen.getByRole('status')).toBeInTheDocument(); // Spinner is displayed
  });

  it('renders footer with data', () => {
    checkFooter();

    const toggle = screen.getAllByLabelText('footer-accordion');
    expect(toggle).toHaveLength(3); // 3 sections();
    fireEvent.click(toggle[0]);
    expect(screen.getByText('Inversionistas')).toBeInTheDocument();
  });

  it('does not render the footer sections when fetching data fails', () => {
    vi.mocked(useFetchData).mockReturnValue({
      data: null,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <Footer />
      </Router>,
    );

    expect(screen.queryByText('Section 1')).not.toBeInTheDocument();
    expect(screen.queryByText('© 2023 Company')).not.toBeInTheDocument();
  });

  it('should render desktop view when window width is greater than or equal to 1140px', () => {
    mockWindowWidth(1200);
    checkFooter();
  });
});
