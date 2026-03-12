import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { vi } from 'vitest';
import { HeaderSectionSpanishEnum } from '../../hooks/useHeader/useHeader.enum';

// Define the mock return value outside of vi.mock
const mockHeaderData = {
  data: {
    data: {
      attributes: {
        header_logo: {
          data: {
            attributes: {
              formats: {
                small: {
                  url: 'test-logo.png',
                },
              },
              url: 'test-logo.png',
            },
          },
        },
        header_sections: [
          { section_name: HeaderSectionSpanishEnum.HOME, isEnabled: false },
          { section_name: HeaderSectionSpanishEnum.HOTEL_MANAGEMENT, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.INVESTORS, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.TECHNOLOGY, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.RESTAURANTS, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.ACCESS, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.LEADERSHIP_TEAM, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.CONTACT, isEnabled: true },
          { section_name: HeaderSectionSpanishEnum.EXPERIENCE, isEnabled: true },

        ],
      },
    },
  },
  fetchHeaders: vi.fn(), // Mocking the fetchHeaders function
};

// Mock the useHeader hook
vi.mock('../../hooks/useHeader/useHeader', () => ({
  __esModule: true,
  default: () => mockHeaderData,
}));

vi.mock('../../hooks/useFetchData/useFetchData', () => ({
  useFetchData: () => ({
    data: {
      data: {
        attributes: {
          access_url: 'test-access-url',
        }
      }

    },
  })
}));

describe('Navbar', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-logo.png');

    // Check if navigation links are rendered
    expect(
      screen.getByText(HeaderSectionSpanishEnum.HOTEL_MANAGEMENT),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.INVESTORS),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.TECHNOLOGY),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.RESTAURANTS),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.ACCESS),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.LEADERSHIP_TEAM),
    ).toBeInTheDocument();
    expect(
      screen.getByText(HeaderSectionSpanishEnum.EXPERIENCE),
    ).toBeInTheDocument();
  });
});
