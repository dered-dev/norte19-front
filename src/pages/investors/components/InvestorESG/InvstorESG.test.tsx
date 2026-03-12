import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import InvestorESG from './InvestorESG'; // Adjust the import path as needed
import { InvestorsESGMock } from "../../mocks/InvestorsESGMock";

// Mock individual components
vi.mock('./InvestorESGSustainability/InvestorESGSustainability', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability</div>,
    };
});

vi.mock('./InvestorESGCorporate/InvestorESGCorporate', () => {
    return {
        default: () => <div>Mock Investor ESG Corporate</div>,
    };
});

vi.mock('./InvestorESGCodeEthics/InvestorESGCodeEthics', () => {
    return {
        default: () => <div>Mock Investor ESG Code of Ethics</div>,
    };
});

vi.mock('./InvestorESGTipLine/InvestorESGTipLine', () => {
    return {
        default: () => <div>Mock Investor ESG Tip Line</div>,
    };
});

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsESGMock,
            loading: true
        })
    };
});


describe('InvestorESG', () => {
    it('renders the tabs and switches content when clicked', () => {
        render(<InvestorESG setTitle={vi.fn()} />);

        // Check if the initial content is from the first tab
        expect(screen.getAllByText(/Mock Investor ESG Sustainability/i)).toBeTruthy();

        // Click on the second tab
        fireEvent.click(screen.getByText('Gobierno Corporativo'));
        expect(screen.getAllByText(/Mock Investor ESG Corporate/i)).toBeTruthy();

        // Click on the third tab
        fireEvent.click(screen.getByText('Código de Ética y Conducta'));
        expect(screen.getAllByText(/Mock Investor ESG Code of Ethics/i)).toBeTruthy();

        // Click on the fourth tab
        fireEvent.click(screen.getByText('Línea de Denuncias'));
        expect(screen.getAllByText(/Mock Investor ESG Tip Line/i)).toBeTruthy();
    });
});
