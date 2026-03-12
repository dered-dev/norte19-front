import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGSustainabilityAchievements from './InvestorESGSustainabilityAchievements'; // Adjust the path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityAchievements', () => {
    it('renders the achievements section correctly', () => {
        render(<InvestorESGSustainabilityAchievements section={InvestorESGSustainabilityMock.data.attributes.achievements} />);

        // Check if the section title is in the document
        expect(screen.getByText(/Nuestros logros en 2023/i)).toBeInTheDocument();
    });
});
