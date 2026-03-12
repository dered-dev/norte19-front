import React from "react";
import { render, screen } from '@testing-library/react'
import InvestorESGCodeEthics from './InvestorESGCodeEthics'
import { BrowserRouter as Router } from 'react-router-dom'
import { vi } from 'vitest'
import { InvestorsESGCodeEthicsMock } from "../../../mocks/InvestorsESGCodeEthicsMock";

vi.mock('../../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsESGCodeEthicsMock,
            loading: true
        })
    };
});

describe('InvestorESGCodeEthics Component', () => {
    it('renders the title and paragraph content correctly', () => {
        render(
            <Router>
                <InvestorESGCodeEthics />
            </Router>
        )

        // Check if the title is rendered correctly
        expect(screen.getByText('Código de Ética')).toBeInTheDocument()

        // Check if the paragraph under the title is rendered
        expect(screen.getByText(/Mediante el Código de Ética/i)).toBeInTheDocument()

        // Check if the download link is present
        expect(screen.getByText('Descargar código de ética')).toBeInTheDocument()
    })


})