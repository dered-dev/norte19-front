import React from 'react'

import { render, screen } from '@testing-library/react'
import HomeMoreServices from './HomeMoreServices'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

// Mock the third-party `react-awesome-reveal` library
vi.mock('react-awesome-reveal', () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

describe('HomeMoreServices Component', () => {
    it('renders the section title and description', () => {
        render(<HomeMoreServices data={HomeMock.data.attributes.Our_services} />)

        const title = screen.getByText('Nuestros servicios')
        const description = screen.getByText(/Nos especializamos en identificar y maximizar oportunidades/i)

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })

})
