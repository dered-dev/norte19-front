import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorBursatilNextEvents from './InvestorBursatilNextEvents'
import { InvestorBursatilMock } from "../../../mocks/InvestorsBursatilMock";

describe('InvestorBursatilNextEvents', () => {
    it('renders the next events section correctly', () => {
        const mock = InvestorBursatilMock.data.attributes.upcoming_events
        render(<InvestorBursatilNextEvents data={mock} />)

        // Check if the title is in the document
        expect(screen.getByText(mock.title)).toBeInTheDocument()

        // Check if the event details are rendered
        expect(screen.getByText(mock.events[0].title)).toBeInTheDocument()
    })
})
