import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorUs from './InvestorUs';
import { vi } from 'vitest';
import { InvestorsUsMock } from '../../mocks/InvestorsUsMock';

// Mock the child components
vi.mock('./InvestorUsHistory/InvestorUsHistory', () => {
    return {
        default: () => <div>Mock Investor Us History</div>
    };
});
vi.mock('./InvestorUsSections/InvestorUsSections', () => {
    return {
        default: () => <div>Mock Investor Us Sections</div>
    };
});

vi.mock('./InvestorUsKnowMore/InvestorUsKnowMore', () => {
    return {
        default: () => <div>Mock Investor Us Know More</div>
    };
});
vi.mock('./InvestorUsFaqs/InvestorUsFaqs', () => {
    return {
        default: () => <div>Mock Investor Us FAQs</div>
    };
});


vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsUsMock,
            loading: true
        })
    };
});


describe('InvestorUs Component', () => {
    beforeEach(() => {
        render(<InvestorUs setTitle={vi.fn()} />);
    });

    it('renders without crashing', () => {
        expect(screen.getByText(/Mock Investor Us History/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor Us Sections/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor Us Know More/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor Us FAQs/i)).toBeInTheDocument();
    });
});
