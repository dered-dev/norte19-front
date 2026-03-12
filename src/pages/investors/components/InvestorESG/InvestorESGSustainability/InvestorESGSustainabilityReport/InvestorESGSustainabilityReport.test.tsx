import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGSustainabilityReport from './InvestorESGSustainabilityReport'; // Adjust the import path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityReport', () => {
    it('renders the report section correctly', () => {
        const mock = InvestorESGSustainabilityMock.data.attributes.sustainability_report
        render(<InvestorESGSustainabilityReport
            data={mock} />);

        // Check if the main text and heading are rendered
        expect(screen.getByText(mock.title)).toBeInTheDocument();
        expect(screen.getByText(mock.subtitle)).toBeInTheDocument();

    });
});
