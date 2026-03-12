import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorESGCorporateBoard from './InvestorESGCorporateBoard'
import { vi } from 'vitest'
import { InvestorESGCorporateMock } from "../../../../mocks/InvestorsESGCorporateMock";

vi.mock('../../../../../shared/CorporateBoard/CorporateBoard', () => ({
    default: () => <div>Mocked CorporateBoard</div>,
}))

describe('InvestorESGCorporateBoard', () => {
    it('renders the CorporateBoard component', () => {
        render(<InvestorESGCorporateBoard data={InvestorESGCorporateMock.data.attributes.board_members} />)

        // Check if the mocked CorporateBoard component is rendered
        const corporateBoard = screen.getByText('Mocked CorporateBoard')
        expect(corporateBoard).toBeInTheDocument()
    })
})
