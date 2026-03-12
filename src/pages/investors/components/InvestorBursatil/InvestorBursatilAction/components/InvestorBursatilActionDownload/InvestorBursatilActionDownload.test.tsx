import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for routing
import InvestorBursatilActionDownload from './InvestorBursatilActionDownload';
import { getStockForDownload } from '../../services/Graphics';
import { StockInformationInterface } from '../../services/interfaces/StockInformation';
import { InvestorBursatilMock } from '../../../../../mocks/InvestorsBursatilMock';
import { InvestorBursatilGraphicMock } from '../../../../../mocks/InvestorsBursatilGraphicMock';

// Mock the getStockForDownload service
vi.mock('../../services/Graphics', () => ({
    getStockForDownload: vi.fn(),
}));

// Mock URL.createObjectURL
const originalCreateObjectURL = URL.createObjectURL;
beforeAll(() => {
    URL.createObjectURL = vi.fn(() => 'mocked-url');
});

afterAll(() => {
    URL.createObjectURL = originalCreateObjectURL; // Restore original function after tests
});

describe('InvestorBursatilActionDownload', () => {
    const mock = InvestorBursatilMock.data.attributes.stock_info;

    it('renders the button correctly', () => {
        render(
            <MemoryRouter>
                <InvestorBursatilActionDownload data={mock} />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('download-btn')).toBeInTheDocument();
    });

    it('triggers CSV download on button click', async () => {
        const mockResponse: StockInformationInterface = InvestorBursatilGraphicMock;

        // Set up the mock to return the expected response
        (getStockForDownload as Mock).mockResolvedValue(mockResponse);

        render(
            <MemoryRouter>
                <InvestorBursatilActionDownload data={mock} />
            </MemoryRouter>
        );

        // Click the download button
        fireEvent.click(screen.getByLabelText('download-btn'));

    });
});
