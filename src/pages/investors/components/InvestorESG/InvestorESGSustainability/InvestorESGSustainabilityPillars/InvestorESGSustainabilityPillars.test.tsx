import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGSustainabilityPillars from './InvestorESGSustainabilityPillars'; // Adjust the import path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityPillars', () => {
    it('renders the pillars correctly', () => {
        render(<InvestorESGSustainabilityPillars data={InvestorESGSustainabilityMock.data.attributes.sustainable_model} />);

        // Check if the title and subtitle are rendered
        expect(screen.getByText(/NUESTRO MODELO SOSTENIBLE/i)).toBeInTheDocument();
        expect(screen.getByText(/Contempla 3 pilares estratégicos/i)).toBeInTheDocument();

    });

    it('renders the Swiper component with the correct number of slides', () => {
        const { container } = render(<InvestorESGSustainabilityPillars data={InvestorESGSustainabilityMock.data.attributes.sustainable_model} />);

        // Check if Swiper has the correct number of slides
        const swiperSlides = container.querySelectorAll('.swiper-slide');
        expect(swiperSlides.length).toBe(1); // Should match the number of pillars
    });
});
