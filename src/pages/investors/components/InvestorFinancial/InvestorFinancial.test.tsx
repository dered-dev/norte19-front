import React from 'react'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import InvestorFinancial from './InvestorFinancial'
import { InvestorsFinancialMock } from '../../mocks/InvestorsFinancialMock';

// Mock the child components
vi.mock('./InvestorFinancialReports/InvestorFinancialReports', () => {
    return {
        default: () => <div>Mock Investor Financial Reports</div>
    };
});

vi.mock('./InvestorFinancialPresentation/InvestorFinancialPresentation', () => {
    return {
        default: () => <div>Mock Investor Financial Presentation</div>
    };
});

vi.mock('./InvestorFinancialProspect/InvestorFinancialProspect', () => {
    return {
        default: () => <div>Mock Investor Financial Prospect</div>
    };
});

vi.mock('./InvestorFinancialFstay/InvestorFinancialFstay', () => {
    return {
        default: () => <div>Mock Investor Financial Fstay</div>
    };
});


vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsFinancialMock,
            loading: true
        })
    };
});


describe('InvestorFinancial', () => {
    it('renders all child components', () => {
        render(<InvestorFinancial setTitle={vi.fn()} />)

        // Check if all mocked components are rendered
        expect(screen.getByText('Mock Investor Financial Reports')).toBeInTheDocument()
        expect(screen.getByText('Mock Investor Financial Presentation')).toBeInTheDocument()
        expect(screen.getByText('Mock Investor Financial Prospect')).toBeInTheDocument()
        expect(screen.getByText('Mock Investor Financial Fstay')).toBeInTheDocument()
    })
})
