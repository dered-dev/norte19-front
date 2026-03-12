import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeTechnology from './HomeTechnology'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

// Mock third-party libraries
vi.mock('react-awesome-reveal', () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

describe('HomeTechnology Component', () => {
    it('renders the technology section with correct content', () => {
        render(<HomeTechnology data={HomeMock.data.attributes.Our_services.sections[2]} />)

        const paragraph1 = screen.getByText(/Para mejorar la eficiencia, desarrollamos un software hotelero especializado/i)
        const image = screen.getByAltText(/tecnología hotelera/i)

        expect(paragraph1).toBeInTheDocument()
        expect(image).toBeInTheDocument()
    })
})
