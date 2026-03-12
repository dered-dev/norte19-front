import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorFinancialProspect from './InvestorFinancialProspect';
import { InvestorsFinancialMock } from '../../../mocks/InvestorsFinancialMock';

describe('InvestorFinancialProspect', () => {
    beforeEach(() => {
        render(<InvestorFinancialProspect data={InvestorsFinancialMock.data.attributes.section_prospectuses} />);
    });

    it('renders the title', () => {
        expect(screen.getByText('Prospectos')).toBeInTheDocument();
    });

    it('renders the documents section', () => {
        expect(screen.getByText('Documentos')).toBeInTheDocument();
    });

    it('renders the links to the prospect documents', () => {
        const firstLink = screen.getByText('Prospecto Oferta Pública Subsecuente');

        expect(firstLink).toBeInTheDocument();
    });


});
