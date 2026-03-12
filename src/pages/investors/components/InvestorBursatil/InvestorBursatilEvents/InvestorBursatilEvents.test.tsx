import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import InvestorBursatilEvents from './InvestorBursatilEvents' // Adjust the import based on your file structure
import { InvestorBursatilMock } from "../../../mocks/InvestorsBursatilMock";
import { vi } from "vitest";

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key === 'viewMore' ? 'View More' : 'View Less'
    })
}))

describe('InvestorBursatilEvents Component', () => {
    const mock = InvestorBursatilMock.data.attributes.press_releases

    it('renders the component with the title', () => {
        render(<InvestorBursatilEvents data={mock} />)

        // Check if the title is rendered
        const title = screen.getByText(mock.title)
        expect(title).toBeInTheDocument()
    })

    it('shows "Ver más" button initially', () => {
        render(<InvestorBursatilEvents data={mock} />)

        const button = screen.getByLabelText('view-more')
        expect(button).toBeInTheDocument()

        fireEvent.click(button)
    })

    it('should show correct content when an accordion item is clicked', () => {
        render(<InvestorBursatilEvents data={mock} />)

        // Click on the first accordion header
        const informesHeader = screen.getByText('2024')
        fireEvent.click(informesHeader)
        fireEvent.click(informesHeader)

    })

    it('renders the accordion items', () => {
        render(<InvestorBursatilEvents data={mock} />)

        // Check if the accordion items for years are rendered
        const year2024 = screen.getAllByText(/2024/i)
        expect(year2024).toBeTruthy()
    })



})
