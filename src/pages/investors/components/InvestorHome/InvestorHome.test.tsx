import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestorHome from './InvestorHome';
import { vi } from 'vitest';
import { InvestorsHomeMock } from '../../mocks/InvestorsHomeMock';


vi.mock('./InvestorHomeNumbers/InvestorHomeNumbers', () => {
    return {
        default: () => <div>Mock Investor Home Numbers</div>
    };
});
vi.mock('./InvestorHomeMoreInfo/InvestorHomeMoreInfo', () => {
    return {
        default: () => <div>Mock Investor Home More Info</div>
    };
});

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsHomeMock,
            loading: true
        })
    };
});

describe('InvestorHome Component', () => {
    beforeEach(() => {
        render(<InvestorHome setTitle={vi.fn()} />);
    });

    it('renders without crashing', () => {
        expect(screen.getByText(/Mock Investor Home Numbers/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor Home More Info/i)).toBeInTheDocument();
    });

});
