import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorFinancialPresentation from './InvestorFinancialPresentation';
import { InvestorsFinancialMock } from '../../../mocks/InvestorsFinancialMock';

describe('InvestorFinancialPresentation', () => {
    beforeEach(() => {
        render(<InvestorFinancialPresentation data={InvestorsFinancialMock.data.attributes.corporate_presentation} />);
    });

    it('renders the introductory text', () => {
        expect(screen.getByText('CONOCE MÁS SOBRE NORTE 19 EN NUESTRA')).toBeInTheDocument();
    });

    it('renders the presentation title', () => {
        expect(screen.getByText('Presentación Corporativa')).toBeInTheDocument();
    });

});
