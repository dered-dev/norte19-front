import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RestaurantTabContentTypeText from './RestaurantTabContentTypeText';
import { RestaurantsPagesMock } from "../../../../mocks/RestaurantsPagesMock";

describe('RestaurantTabContentTypeText', () => {
    const page = RestaurantsPagesMock.data[0].attributes.page[1];

    it('renders paragraph text correctly', () => {


        render(<RestaurantTabContentTypeText page={page} />);

        // Check if the paragraph text is rendered
        const paragraph = screen.getByText(/Todos nuestros alimentos son elaborados con altos estándares que cuidan cada proceso desde su preparación hasta el servicio frente al cliente./i);
        expect(paragraph).toBeInTheDocument();
    });

});
