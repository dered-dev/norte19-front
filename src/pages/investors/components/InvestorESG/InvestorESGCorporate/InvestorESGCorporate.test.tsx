import React from "react";
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import InvestorESGCorporate from './InvestorESGCorporate'; // Adjust the path as needed
import { InvestorESGCorporateMock } from "../../../mocks/InvestorsESGCorporateMock";

// Mock the components used in InvestorESGCorporate
vi.mock('./InvestorESGCorporateAssembly/InvestorESGCorporateAssembly', () => {
    return {
        default: () => <div>Mock Investor ESG Corporate Assembly</div>
    };
});

vi.mock('./InvestorESGCorporateBoard/InvestorESGCorporateBoard', () => {
    return {
        default: () => <div>Mock Investor ESG Corporate Board</div>
    };
});

vi.mock('./InvestorESGStatus/InvestorESGStatus', () => {
    return {
        default: () => <div>Mock Investor ESG Status</div>
    };
});

vi.mock('./InvestorESGPolitics/InvestorESGPolitics', () => {
    return {
        default: () => <div>Mock Investor ESG Politics</div>
    };
});

vi.mock('../../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorESGCorporateMock,
            loading: true
        })
    };
});

describe('InvestorESGCorporate', () => {
    it('renders all mocked components correctly', () => {
        render(<InvestorESGCorporate />);

        // Check if the mocked components are rendered
        expect(screen.getByText('Mock Investor ESG Corporate Assembly')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor ESG Corporate Board')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor ESG Status')).toBeInTheDocument();
        expect(screen.getByText('Mock Investor ESG Politics')).toBeInTheDocument();
    });
});
