import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGSustainabilityConservation from './InvestorESGSustainabilityConservation'; // Adjust the path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityConservation', () => {
    it('renders the conservation section correctly', () => {
        render(<InvestorESGSustainabilityConservation data={InvestorESGSustainabilityMock.data.attributes.sustainable_model} />);

        // Check if the title of the first card is in the document
        expect(screen.getByText(/Conservación del medio ambiente/i)).toBeInTheDocument();

    });
});
