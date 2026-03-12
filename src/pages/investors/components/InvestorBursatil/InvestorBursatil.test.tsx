import { render, screen } from '@testing-library/react';
import InvestorBursatil from './InvestorBursatil';
import React from 'react';
import { vi } from 'vitest';
import { InvestorBursatilMock } from '../../mocks/InvestorsBursatilMock';

// Mock the child components
vi.mock('./InvestorUsHistory/InvestorUsHistory', () => {
    return {
        default: () => <div>Mock Investor Us History</div>
    };
});

// Additional mocks for other components
vi.mock('./InvestorBursatilCoverage/InvestorBursatilCoverage', () => {
    return {
        default: () => <div>Mock Investor Bursatil Coverage</div>
    };
});
vi.mock('./InvestorBursatilAction/InvestorBursatilAction', () => {
    return {
        default: () => <div>Mock Investor Bursatil Action</div>
    };
});
vi.mock('./InvestorBursatilConversion/InvestorBursatilConversion', () => {
    return {
        default: () => <div>Mock Investor Bursatil Conversion</div>
    };
});
vi.mock('./InvestorBursatilEvents/InvestorBursatilEvents', () => {
    return {
        default: () => <div>Mock Investor Bursatil Events</div>
    };
});
vi.mock('./InvestorBursatilNextEvents/InvestorBursatilNextEvents', () => {
    return {
        default: () => <div>Mock Investor Bursatil Next Events</div>
    };
});

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorBursatilMock,
            loading: true
        })
    };
});

describe('InvestorBursatil Component', () => {
    it('renders all child components', () => {
        render(<InvestorBursatil setTitle={vi.fn()} />);

        // Check if all child components are rendered
        expect(screen.getByText('Mock Investor Bursatil Coverage')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor Bursatil Action')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor Bursatil Conversion')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor Bursatil Events')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor Bursatil Next Events')).toBeInTheDocument();
    });
});
