import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGSustainabilityGuessWorld from './InvestorESGSustainabilityGuessWorld'; // Adjust the path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityGuessWorld', () => {
    it('renders the content correctly', () => {
        render(<InvestorESGSustainabilityGuessWorld data={InvestorESGSustainabilityMock.data.attributes.sections[0]} />);

        // Check if the title is rendered
        expect(screen.getByText(/Huéspedes del Mundo/i)).toBeInTheDocument();

    });
});
