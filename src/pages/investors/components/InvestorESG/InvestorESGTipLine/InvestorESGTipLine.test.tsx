import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorESGTipLine from './InvestorESGTipLine'
import { vi } from 'vitest'
import { InvestorsESGTipLineMock } from "../../../mocks/InvestorsESGTipLineMock";

vi.mock('../../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsESGTipLineMock,
            loading: true
        })
    };
});


describe('InvestorESGTipLine Component', () => {
    it('renders the title and content correctly', () => {
        render(<InvestorESGTipLine />)

        // Check if the title is rendered correctly
        expect(screen.getByText('Línea de Denuncias')).toBeInTheDocument()

        // Check if the procedure section is rendered correctly
        expect(screen.getByText('Procedimiento de Denuncias')).toBeInTheDocument()

    })

})
