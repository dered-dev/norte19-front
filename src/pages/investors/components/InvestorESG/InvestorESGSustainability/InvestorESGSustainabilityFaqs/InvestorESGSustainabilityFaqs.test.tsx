import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import InvestorESGSustainabilityFaqs from './InvestorESGSustainabilityFaqs'
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityFaqs Component', () => {
    it('should render the FAQ titles correctly', () => {
        render(<InvestorESGSustainabilityFaqs data={InvestorESGSustainabilityMock.data.attributes.certification_catalog} />)

        // Check if the Accordion titles are rendered
        expect(screen.getByText('Informes')).toBeInTheDocument()
        expect(screen.getByText('Políticas')).toBeInTheDocument()
        expect(screen.getByText('Reportes')).toBeInTheDocument()
    })

    it('should show correct content when an accordion item is clicked', () => {
        render(<InvestorESGSustainabilityFaqs data={InvestorESGSustainabilityMock.data.attributes.certification_catalog} />)

        // Click on the first accordion header
        const informesHeader = screen.getByText('Informes')
        fireEvent.click(informesHeader)
        fireEvent.click(informesHeader)

        // Now clicking on the 'Políticas' accordion
        const politicasHeader = screen.getByText('Políticas')
        fireEvent.click(politicasHeader)

    })
})
