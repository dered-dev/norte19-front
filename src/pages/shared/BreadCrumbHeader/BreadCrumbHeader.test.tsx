import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BreadCrumbHeader from './BreadCrumbHeader'; // Adjust the import path as necessary
import useTitleHeader from '../../../hooks/useTitleHeader/useTitleHeader';
import { vi } from 'vitest';


// Mock the hooks used in the component
vi.mock('../../../hooks/useTitleHeader/useTitleHeader');
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key, // Mock translation to return the key itself
    }),
}));

describe('BreadCrumbHeader', () => {
    const mockHeaderData = {
        section_name: 'Current Page',
    };

    beforeEach(() => {
        (useTitleHeader as jest.Mock).mockReturnValue({ headerData: mockHeaderData });
    });

    afterEach(() => {
        vi.clearAllMocks(); // Clear mocks after each test
    });

    it('renders the breadcrumb navigation', () => {
        render(
            <MemoryRouter>
                <BreadCrumbHeader url="/current-page" />
            </MemoryRouter>
        );

        // Check if the home link is present and clickable
        const homeLink = screen.getByText('home');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');

        // Check if the current section name is rendered correctly
        const currentSection = screen.getByText(mockHeaderData.section_name);
        expect(currentSection).toBeInTheDocument();
        expect(currentSection).toHaveClass('active');
    });
});
