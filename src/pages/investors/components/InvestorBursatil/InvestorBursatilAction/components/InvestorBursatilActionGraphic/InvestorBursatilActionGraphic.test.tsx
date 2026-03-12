import React from "react";
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import InvestorBursatilActionGraphic from './InvestorBursatilActionGraphic';
import * as graphicsService from '../../services/Graphics'; // Import your graphics service

// Define types for the Chart props
interface MockChartProps {
    options: {
        chart: {
            height: number;
        };
    };
    series: { name: string; data: number[] }[];
    type: string;
}

// Mock the Chart component from react-apexcharts
vi.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: ({ options, series, type }: MockChartProps) => (
            <div data-testid="mock-chart" style={{ height: options.chart.height }}>
                Mock Chart - {type} - Data: {JSON.stringify(series)}
            </div>
        ),
    };
});

// Mock your service functions
vi.mock('../../services/Graphics', () => ({
    getGraphicByPeriod: vi.fn(),
    getGraphicOneWeek: vi.fn(),
}));

describe('InvestorBursatilActionGraphic', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the component and displays default state', () => {
        render(<InvestorBursatilActionGraphic />);

        expect(screen.getByText('1S')).toBeInTheDocument(); // Check default tab
        expect(screen.queryByTestId('mock-chart')).not.toBeInTheDocument(); // Chart should not be rendered initially
    });

    it('fetches data and renders chart on tab click', async () => {
        // Mock data response for a week
        const mockData = {
            data: [
                { attributes: { operation_date: '2024-10-01', maximum_price: '100' } },
                { attributes: { operation_date: '2024-10-02', maximum_price: '110' } },
            ],
        };

        // Mock the implementation of the service function
        (graphicsService.getGraphicOneWeek as Mock).mockResolvedValue(mockData);

        render(<InvestorBursatilActionGraphic />);

        // Click on the '1S' tab
        fireEvent.click(screen.getByText('1S'));

        // Check that the service function was called
        expect(graphicsService.getGraphicOneWeek).toHaveBeenCalled();
    });

    it('updates the chart when a different tab is clicked', async () => {
        const mockDataOneWeek = {
            data: [
                { attributes: { operation_date: '2024-10-01', maximum_price: '100' } },
                { attributes: { operation_date: '2024-10-02', maximum_price: '110' } },
            ],
        };
        const mockDataOneMonth = {
            data: [
                { attributes: { operation_date: '2024-09-01', maximum_price: '90' } },
                { attributes: { operation_date: '2024-09-02', maximum_price: '95' } },
            ],
        };

        (graphicsService.getGraphicOneWeek as Mock).mockResolvedValue(mockDataOneWeek);
        (graphicsService.getGraphicByPeriod as Mock).mockResolvedValue(mockDataOneMonth);

        render(<InvestorBursatilActionGraphic />);

        // Click on the '1M' tab
        fireEvent.click(screen.getByText('1M'));

        // Check that the service function was called for 1M
        expect(graphicsService.getGraphicByPeriod).toHaveBeenCalledWith('week', '1M');
    });

    it('handles error state gracefully', async () => {
        (graphicsService.getGraphicOneWeek as Mock).mockRejectedValue(new Error('Fetch error'));

        render(<InvestorBursatilActionGraphic />);

        fireEvent.click(screen.getByText('1S'));

        await waitFor(() => {
            // Chart should not be rendered in case of error
            expect(screen.queryByTestId('mock-chart')).not.toBeInTheDocument();
        });
    });


    it('handles empty data array gracefully', async () => {
        const mockEmptyData = {
            data: [],
        };

        (graphicsService.getGraphicOneWeek as Mock).mockResolvedValue(mockEmptyData);

        render(<InvestorBursatilActionGraphic />);

        fireEvent.click(screen.getByText('1S'));

        await waitFor(() => {
            // Chart should not be rendered in case of empty data
            expect(screen.queryByTestId('mock-chart')).not.toBeInTheDocument();
        });
    });

    it('processes yearly data correctly', async () => {
        const mockYearlyData = {
            "2019": {
                period: "2019",
                startOfPeriod: "2019-01-01",
                values: [1, 2, 3]
            }
        };

        (graphicsService.getGraphicByPeriod as Mock).mockResolvedValue(mockYearlyData);

        render(<InvestorBursatilActionGraphic />);

        act(() => {
            fireEvent.click(screen.getByText('1A'));
        })

        act(() => {
            fireEvent.click(screen.getByText('5A'));
        })

        act(() => {
            fireEvent.click(screen.getByText('3M'));
        })

        act(() => {
            fireEvent.click(screen.getByText('6M'));
        })

    });
});
