import React from "react";
import { render, screen } from '@testing-library/react'
import HomeCallToServices from './HomeCallToServices'

// Mock the Home data
import { HomeMock } from "../../mocks/HomeMock";


describe('HomeCallToServices Component', () => {
    it('renders the section title and paragraph', () => {
        render(<HomeCallToServices data={HomeMock.data.attributes.Our_services} />)

        const sectionTitle = screen.getByText('¿Por qué nuestros servicios son confiables?')
        const sectionParagraph = screen.getByText(/Somos creadores de marcas exitosas/i)

        expect(sectionTitle).toBeInTheDocument()
        expect(sectionParagraph).toBeInTheDocument()
    })
})
