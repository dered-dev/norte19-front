import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Mock, vi } from 'vitest';
import useHeader from '../hooks/useHeader/useHeader';
import { useFetchData } from '../hooks/useFetchData/useFetchData';

// Mock the hooks
vi.mock('../hooks/useHeader/useHeader');
vi.mock('../hooks/useFetchData/useFetchData');

// Mock lazy-loaded components
vi.mock('../pages/home/Home', () => ({ __esModule: true, default: () => <div>Home Page</div> }));
vi.mock('../pages/hotelManagement/HotelManagement', () => ({ __esModule: true, default: () => <div>Hotel Management Page</div> }));
vi.mock('../pages/investors/Investors', () => ({ __esModule: true, default: () => <div>Investors Page</div> }));
vi.mock('../pages/restaurants/Restaurants', () => ({ __esModule: true, default: () => <div>Restaurants Page</div> }));
vi.mock('../pages/technology/Technology', () => ({ __esModule: true, default: () => <div>Technology Page</div> }));

describe('AppRoutes Component', () => {
    const mockFetchHeaders = vi.fn();

    beforeEach(() => {
        vi.resetAllMocks();

        (useHeader as unknown as Mock).mockReturnValue({
            data: {
                data: {
                    attributes: {
                        header_sections: [
                            { id: 1, isEnabled: true, section_name: 'home', url: 'home' },
                            { id: 2, isEnabled: true, section_name: 'hotel-management', url: 'hotel-management' },
                        ],
                    },
                },
            },
            fetchHeaders: mockFetchHeaders,
        });

        (useFetchData as Mock).mockReturnValue({
            data: {
                data: {
                    attributes: {
                        sections: [
                            { link: { id: 3, isEnabled: true, section_name: 'investors', url: 'investors' } },
                        ],
                    },
                },
            },
        });
    });

    it('should render enabled routes when data is loaded', async () => {
        render(
            <MemoryRouter initialEntries={['/home']}>
                <AppRoutes />
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.getByText('Home Page')).toBeInTheDocument());
    });

    it('should navigate to a specific route based on the path', async () => {
        render(
            <MemoryRouter initialEntries={['/hotel-management']}>
                <AppRoutes />
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.getByText('Hotel Management Page')).toBeInTheDocument());
    });

    it('should navigate to the first enabled route when accessing an unknown path', async () => {
        render(
            <MemoryRouter initialEntries={['/unknown-path']}>
                <AppRoutes />
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.getByText('Home Page')).toBeInTheDocument());
    });

    it('should call fetchHeaders on mount', () => {
        render(
            <MemoryRouter>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(mockFetchHeaders).toHaveBeenCalledTimes(1);
    });
});
