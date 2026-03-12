import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorBursatilAction from './InvestorBursatilAction' // Adjust the import based on your file structure
import { InvestorBursatilMock } from '../../../mocks/InvestorsBursatilMock';

describe('InvestorBursatilAction Component', () => {
    const mock = InvestorBursatilMock.data.attributes.stock_info

    it('renders the component with the title and description', () => {
        render(<InvestorBursatilAction data={mock} />)

        // Check if the title and description are rendered
        const description = screen.getAllByText(mock.title)
        const title = screen.getByText(mock.subtitle)

        expect(description).toBeTruthy()
        expect(title).toBeInTheDocument()
    })

    it('renders the tabs', () => {
        render(<InvestorBursatilAction data={mock} />)

        // Check if all tab buttons are rendered
        const tabs = ['1S', '1M', '3M', '6M', '1A', '5A']
        tabs.forEach(tab => {
            expect(screen.getByText(tab)).toBeInTheDocument()
        })
    })

})
