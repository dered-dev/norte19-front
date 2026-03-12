import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InvestorBursatilConversion from './InvestorBursatilConversion';
import { InvestorBursatilMock } from '../../../mocks/InvestorsBursatilMock';
export interface ChartProps {
    options: {
        chart: {
            toolbar: { show: boolean };
        };
        labels: string[];
        dataLabels: {
            enabled: boolean;
            formatter: (val: number) => string; // Ensure the formatter is typed
            style: {
                fontSize: string;
                fontWeight: string;
                colors: string[];
            };
            dropShadow: {
                enabled: boolean;
                top: number;
                left: number;
                blur: number;
                opacity: number;
            };
        };
        legend: {
            show: boolean;
        };
        colors: string[];
    };
    series: number[];
    type: string;
    width: string;
    height: string;
}

let chartProps: ChartProps;

vi.mock('react-apexcharts', () => {
    return {
        default: (props: ChartProps) => {
            chartProps = props; // Capture the props for later assertions
            return <div role="img">Mock Chart</div>;
        },
    };
});

describe('InvestorBursatilConversion', () => {
    const mockData = InvestorBursatilMock.data.attributes.shareholding_donut_bar;

    it('renders the title correctly', () => {
        render(<InvestorBursatilConversion data={mockData} />);
        const titleElement = screen.getByText(mockData.title);
        expect(titleElement).toBeInTheDocument();
    });

    it('passes the correct series to the Chart component', () => {
        render(<InvestorBursatilConversion data={mockData} />);
        const expectedSeries = mockData.fields.map(field => parseFloat(field.value));
        expect(chartProps.series).toEqual(expectedSeries);
    });

    it('passes the correct options to the Chart component, including the formatter', () => {
        render(<InvestorBursatilConversion data={mockData} />);

        expect(chartProps.options).toMatchObject({
            labels: mockData.fields.map(field => field.label),
            dataLabels: {
                enabled: true,
                formatter: expect.any(Function), // Check that formatter is a function
            },
            legend: {
                show: false,
            },
            colors: ['#272B67', '#9497A1'], // Assuming only these colors are used
        });

        // Test the formatter directly (you can call it with a sample value)
        const formattedValue = chartProps.options.dataLabels.formatter(50);
        expect(formattedValue).toBe('50%'); // Adjust based on the expected behavior
    });
});
