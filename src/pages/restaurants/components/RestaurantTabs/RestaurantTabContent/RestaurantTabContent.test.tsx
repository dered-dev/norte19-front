import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantTabContent from './RestaurantTabContent';
import { RestaurantsPagesMock } from '../../../mocks/RestaurantsPagesMock';

describe('RestaurantTabContent Component', () => {
    it('should render the component with the correct elements', () => {
        render(<RestaurantTabContent
            tab={RestaurantsPagesMock.data[0]}
            background_url={''} />);

        // Check section 1
        expect(screen.getByRole('heading', { name: /Café Plus/i })).toBeInTheDocument();
        expect(screen.getByText(/Un concepto único que busca consentir los paladares sencillos/i)).toBeInTheDocument();

        // Check section 2
        expect(screen.getByText(/Todos nuestros alimentos son elaborados con altos estándares/i)).toBeInTheDocument();

        // Check section 3 image

        // Check section 4
        expect(screen.getByRole('heading', { name: /Nuestro menú/i })).toBeInTheDocument();
        expect(screen.getByText(/Entre los platillos más populares/i)).toBeInTheDocument();

        // Check section 5
        expect(screen.getByRole('heading', { name: /La coctelería/i })).toBeInTheDocument();
        expect(screen.getByText(/Para complementar el servicio/i)).toBeInTheDocument();

        // Check section 6
        expect(screen.getByText(/Enamórate de los sabores/i)).toBeInTheDocument();
        expect(screen.getByText(/Café Plus Cali Colombia Café/i)).toBeInTheDocument();

    });
});
