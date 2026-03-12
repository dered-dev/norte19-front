import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorFinancialFstay from './InvestorFinancialFstay';
import { InvestorsFinancialMock } from '../../../mocks/InvestorsFinancialMock';

describe('InvestorFinancialFstay', () => {
    beforeEach(() => {
        render(<InvestorFinancialFstay data={InvestorsFinancialMock.data.attributes.section_ftsay} />);
    });

    it('renders the document section heading', () => {
        expect(screen.getByText(/Documentos/i)).toBeInTheDocument();
    });

    it('renders the first document description', () => {
        expect(screen.getByText(/Prospecto de Colocación FSTAY, Folleto Informativo y Presentación Corporativa/i)).toBeInTheDocument();
    });

});
