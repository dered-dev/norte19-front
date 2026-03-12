import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeAbout from './HomeAbout'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

vi.mock('react-countup', () => ({
    __esModule: true,
    default: ({ end }: { end: number }) => <span>{end}</span>
}))

describe('HomeAbout Component', () => {


    it('renders the section title', () => {
        render(<HomeAbout data={HomeMock.data.attributes.About_us} />)
        const title = screen.getByText('Quiénes somos')
        expect(title).toBeInTheDocument()
    })

    it('renders the stats', () => {
        render(<HomeAbout data={HomeMock.data.attributes.About_us} />)

        const hotelStat = screen.getByText('150')
        const roomStat = screen.getByText('17503')
        const yearsStat = screen.getByText('20')

        expect(hotelStat).toBeInTheDocument()
        expect(roomStat).toBeInTheDocument()
        expect(yearsStat).toBeInTheDocument()

        const hotelLabel = screen.getByText('No. hoteles')
        const roomLabel = screen.getByText('No. Habitaciones')
        const yearsLabel = screen.getByText('Años en la industria')

        expect(hotelLabel).toBeInTheDocument()
        expect(roomLabel).toBeInTheDocument()
        expect(yearsLabel).toBeInTheDocument()
    })

    it('renders the description text', () => {
        render(<HomeAbout data={HomeMock.data.attributes.About_us} />)

        const descriptionText1 = screen.getByText(/fundada hace más de 20 años/i)
        const descriptionText2 = screen.getByText(/más de 150 hoteles/i)

        expect(descriptionText1).toBeInTheDocument()
        expect(descriptionText2).toBeInTheDocument()
    })
})
