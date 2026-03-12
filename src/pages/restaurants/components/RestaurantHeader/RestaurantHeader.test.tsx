import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantHeader from './RestaurantHeader';
import { RestaurantsMock } from '../../mocks/RestaurantsMock';
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            if (key === 'home') {
                return 'Inicio';
            }
            return key;
        },
    }),
}));


describe('RestaurantHeader Component', () => {

    it('should render the component with the correct elements', () => {
        render(
            <BrowserRouter>
                <RestaurantHeader data={RestaurantsMock.data.attributes.header} />
            </BrowserRouter>
        );

        // Check that the current page breadcrumb is present
        const currentBreadcrumb = screen.getAllByText(RestaurantsMock.data.attributes.header.title);
        expect(currentBreadcrumb).toBeTruthy();

        // Check that the title is rendered
        const titleElement = screen.getByRole('heading', { name: RestaurantsMock.data.attributes.header.title });
        expect(titleElement).toBeInTheDocument();
    });
});
