import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeServices from './HomeServices'
import { vi } from 'vitest'
import { HomeMock } from '../../mocks/HomeMock'

// Mock third-party libraries
vi.mock('react-awesome-reveal', () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))


describe('HomeServices Component', () => {
    it('renders all paragraphs with correct content', () => {
        render(<HomeServices data={HomeMock.data.attributes.About_us} />)

        const paragraph1 = screen.getByText(/nos especializamos en la gestión de hoteles rentables/i)

        expect(paragraph1).toBeInTheDocument()
    })

    it('renders all service cards with correct titles and icons', () => {
        render(<HomeServices data={HomeMock.data.attributes.About_us} />)

        const serviceTitles = [
            /Inversión en hoteles/i,
            /Administración de hoteles/i,
            /Diseño y desarrollo de proyectos/i,
            /Tecnología para administración y distribución de hoteles/i
        ]

        serviceTitles.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument()
        })

    })
})
