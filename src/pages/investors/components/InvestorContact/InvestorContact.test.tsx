import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorContact from './InvestorContact';
import { vi } from 'vitest';
import { InvestorsContactMock } from '../../mocks/InvestorsContactMock';

// Mock the InvestorContactForm component
vi.mock('./InvestorContactForm/InvestorContactForm', () => {
    return {
        default: () => <div>Mock Investor Contact Form</div>
    };
});

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsContactMock,
            loading: true
        })
    };
});

describe('InvestorContact Component', () => {
    beforeEach(() => {
        render(<InvestorContact setTitle={vi.fn()} />);
    });

    it('renders without crashing', () => {
        // Check if the mocked InvestorContactForm is rendered
        expect(screen.getByText(/Mock Investor Contact Form/i)).toBeInTheDocument();
    });
});
