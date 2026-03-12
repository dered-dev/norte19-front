import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorESGSustainabilitySections from './InvestorESGSustainabilitySections'
import '@testing-library/jest-dom'
import { vi } from "vitest";
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

vi.mock('../InvestorESGSustainabilityReport/InvestorESGSustainabilityReport', () => {
    return {
        default: () => <div data-testid="report-section">Report Section</div>,
    };
});

vi.mock('../InvestorESGSustainabilityGuessWorld/InvestorESGSustainabilityGuessWorld', () => {
    return {
        default: () => <div data-testid="guess-world-section">Guess World Section</div>,
    };
});

describe('InvestorESGSustainabilitySections', () => {

    it('renders the sections correctly', () => {
        render(<InvestorESGSustainabilitySections
            data={InvestorESGSustainabilityMock.data.attributes.sections}
            dataReport={InvestorESGSustainabilityMock.data.attributes.sustainability_report} />)

        // Verify that all sections are rendered
        const guessWorldSections = screen.getAllByTestId('guess-world-section')
        expect(guessWorldSections).toHaveLength(InvestorESGSustainabilityMock.data.attributes.sections.length)

        // Verify that the report section is rendered in the first section only
        const reportSection = screen.getByTestId('report-section')
        expect(reportSection).toBeInTheDocument()
    })

    it('does not render the report section in other sections', () => {
        render(<InvestorESGSustainabilitySections
            data={InvestorESGSustainabilityMock.data.attributes.sections}
            dataReport={InvestorESGSustainabilityMock.data.attributes.sustainability_report} />)

        const guessWorldSections = screen.getAllByTestId('guess-world-section')
        expect(guessWorldSections[1]).toBeInTheDocument()

        // Ensure report section only appears in the first section
        expect(screen.getByTestId('report-section')).toBeInTheDocument()
    })
})
