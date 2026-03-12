import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorBursatilCoverage from './InvestorBursatilCoverage'
import { InvestorBursatilMock } from "../../../mocks/InvestorsBursatilMock";

describe('InvestorBursatilCoverage Component', () => {
    const mockHeader = InvestorBursatilMock.data.attributes.analyst_coverage
    const mockTable = InvestorBursatilMock.data.attributes.analyst_coverage_table

    it('renders the component with the title', () => {
        render(<InvestorBursatilCoverage dataHeader={mockHeader} dataTable={mockTable} />)

        // Check if the title is rendered
        const title = screen.getByText(mockHeader.title)
        expect(title).toBeInTheDocument()
    })


    it('renders the table rows with correct data', () => {
        render(<InvestorBursatilCoverage dataHeader={mockHeader} dataTable={mockTable} />)

        mockTable.analyst_coverage_table_body.forEach(row => {
            // Check if the table row is rendered
            const tableRow = screen.getByText(row.financial_institution)
            expect(tableRow).toBeInTheDocument()
        })
    })
})
