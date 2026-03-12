import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InvestorFinancialReports from './InvestorFinancialReports';
import { InvestorsFinancialMock } from '../../../mocks/InvestorsFinancialMock';
import { vi } from "vitest";

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key === 'viewMore' ? 'Ver más' : 'Ver menos',
    }),
}));

describe('InvestorFinancialReports', () => {
    beforeEach(() => {
        render(<InvestorFinancialReports
            data={InvestorsFinancialMock.data.attributes.report_section}
            dataReports={InvestorsFinancialMock.data.attributes.reports}
        />);
    });

    it('renders the title', () => {
        expect(screen.getByText('Reportes Trimestrales y Anuales')).toBeInTheDocument();
    });

    it('renders the initial button to view more', () => {
        expect(screen.getByText('Ver más')).toBeInTheDocument();
    });

    it('toggles the view more button correctly', () => {
        const viewMoreButton = screen.getByText('Ver más');

        // Click the button to show more
        fireEvent.click(viewMoreButton);
        expect(screen.getByText('Ver menos')).toBeInTheDocument();

        // Click the button to show less
        const viewLessButton = screen.getByText('Ver menos');
        fireEvent.click(viewLessButton);
        expect(screen.getByText('Ver más')).toBeInTheDocument();
    });

    it('should show correct content when an accordion item is clicked', () => {
        // Click on the first accordion header
        const accordionHeader = screen.getByText('2024')
        fireEvent.click(accordionHeader)
        fireEvent.click(accordionHeader)

    })

});
