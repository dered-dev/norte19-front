import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGPolitics from './InvestorESGPolitics'; // Adjust the path as needed
import { InvestorESGCorporateMock } from "../../../../mocks/InvestorsESGCorporateMock";

describe('InvestorESGPolitics', () => {
    it('renders the policies and documents section correctly', () => {
        render(<InvestorESGPolitics data={InvestorESGCorporateMock.data.attributes.governance_policies} />);

        // Check if the main title is present
        expect(screen.getByText('Políticas y Documentos')).toBeInTheDocument();

        // Check for paragraphs containing policy descriptions
        expect(screen.getByText(/Norte 19 tiene políticas y lineamientos/i)).toBeInTheDocument();

        // Check for the links to the documents
        expect(screen.getByText('Política de Regulación de Partes Relacionadas')).toBeInTheDocument();

    });
});
