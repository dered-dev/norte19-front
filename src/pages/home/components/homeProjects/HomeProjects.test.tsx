import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeProjects from './HomeProjects'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

// Mock the third-party `react-awesome-reveal` library
vi.mock('react-awesome-reveal', () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

describe('HomeProjects Component', () => {
    it('renders the section title', () => {
        render(<HomeProjects data={HomeMock.data.attributes.Our_services.sections[0]} />)

        const title = screen.getByText(/Desarrollo de proyectos hoteleros/i)
        expect(title).toBeInTheDocument()

        const highlightedText = screen.getByText(/“llave en mano”/i)
        expect(highlightedText).toBeInTheDocument()
    })
})
