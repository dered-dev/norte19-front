import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGStatus from './InvestorESGStatus'; // Adjust the path as needed
import { InvestorESGCorporateMock } from "../../../../mocks/InvestorsESGCorporateMock";

describe('InvestorESGStatus', () => {
    it('renders the status section correctly', () => {
        render(<InvestorESGStatus data={InvestorESGCorporateMock.data.attributes.social_statues} />);

        // Check if the section title is in the document
        expect(screen.getByText(/DESCARGA NUESTROS/i)).toBeInTheDocument();

        // Check if the subtitle is in the document
        expect(screen.getByText(/Estatutos Sociales/i)).toBeInTheDocument();

        // Check if the download button is in the document
        expect(screen.getByRole('link', { name: /Descargar/i })).toBeInTheDocument();
    });
});
