import React from "react";
import { render, screen } from '@testing-library/react';
import InvestorESGCorporateAssembly from './InvestorESGCorporateAssembly';
import { InvestorESGCorporateMock } from "../../../../mocks/InvestorsESGCorporateMock";

describe('InvestorESGCorporateAssembly', () => {
    it('renders the table and toggle button', () => {
        render(<InvestorESGCorporateAssembly data={InvestorESGCorporateMock.data.attributes.assembly_table} />);

        // Check if the table headers are rendered
        expect(screen.getAllByText('Consejo de Administración')).toBeTruthy();

    });

});
