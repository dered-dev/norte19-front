import React from "react";
import { render, screen } from '@testing-library/react';
import RestaurantTabContentTypeCard from './RestaurantTabContentTypeCard';
import { RestaurantsPagesMock } from "../../../../mocks/RestaurantsPagesMock";


describe('RestaurantTabContentTypeCard', () => {
    const page = RestaurantsPagesMock.data[0].attributes.page[0];

    it('should render the title and description', () => {
        render(<RestaurantTabContentTypeCard page={page} />);

        // Title is rendered
        const title = screen.getByText('Café Plus');
        expect(title).toBeInTheDocument();

        // Description is rendered
        const description = screen.getByText(
            'Un concepto único que busca consentir los paladares sencillos con propuestas de alta calidad. Desde un delicioso buffet de desayuno, hasta menús de comida y cenas, en Café Plus podrás elegir entre diferentes opciones que se adecuen a tu gusto.'
        );
        expect(description).toBeInTheDocument();
    });

    // it('should apply the correct class based on image position', () => {
    //     render(<RestaurantTabContentTypeCard page={page} />);

    //     const contentDiv = screen.getByText('Café Plus').closest('div');
    //     expect(contentDiv).toHaveClass('order-md-2');
    // });
});
