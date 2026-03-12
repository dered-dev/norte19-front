import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Investors from './Investors';
import { MemoryRouter } from "react-router-dom";
import { InvestorsHeaderMock } from "./mocks/InvestorsHeaderMock";

vi.mock('./components/InvestorHome/InvestorHome', () => {
    return {
        default: ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }) => {
            setTitle('Investor Home');
            return <div>Mock Investor Home</div>;
        },
    };
});
vi.mock('./components/InvestorUs/InvestorUs', () => {
    return {
        default: () => <div>Mock Investor Us</div>,
    };
});

vi.mock('./components/InvestorFinancial/InvestorFinancial', () => {
    return {
        default: () => <div>Mock Investor Financial</div>,
    };
});

vi.mock('./components/InvestorBursatil/InvestorBursatil', () => {
    return {
        default: () => <div>Mock Investor Bursatil</div>,
    };
});

vi.mock('./components/InvestorContact/InvestorContact', () => {
    return {
        default: () => <div>Mock Investor Contact</div>,
    };
});

vi.mock('./components/InvestorESG/InvestorESG', () => {
    return {
        default: () => <div>Mock Investor ESG</div>,
    };
});

vi.mock('../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsHeaderMock,
            loading: true
        })
    };
});



describe('Investors', () => {
    it('renders the tabs and switches content when clicked', () => {
        render(
            <MemoryRouter>
                <Investors />
            </MemoryRouter>
        );

        // Check if the initial content is from the first tab
        expect(screen.getByText(/Mock Investor Home/i)).toBeInTheDocument();

        // Click on the second tab
        fireEvent.click(screen.getByText('Nosotros'));
        expect(screen.getByText(/Mock Investor Us/i)).toBeInTheDocument();

        // Click on the third tab
        fireEvent.click(screen.getByText('Financiero'));
        expect(screen.getByText(/Mock Investor Financial/i)).toBeInTheDocument();

        // Click on the fourth tab
        fireEvent.click(screen.getByText('Bursátil'));
        expect(screen.getByText(/Mock Investor Bursatil/i)).toBeInTheDocument();

        // Click on the fifth tab
        fireEvent.click(screen.getByText('ESG'));
        expect(screen.getByText(/Mock Investor ESG/i)).toBeInTheDocument();

        // Click on the sixth tab
        fireEvent.click(screen.getByText('Contacto'));
        expect(screen.getByText(/Mock Investor Contact/i)).toBeInTheDocument();

        // Click on the other tab
        fireEvent.click(screen.getByText('Otro'));
    });
});
