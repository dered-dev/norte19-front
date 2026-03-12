import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeSustainability from './HomeSustainability'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

vi.mock('swiper/react', () => ({
    Swiper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    SwiperSlide: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

vi.mock('react-router-dom', () => ({
    Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>
}))

describe('HomeSustainability Component', () => {
    it('renders the main heading and description', () => {
        render(<HomeSustainability data={HomeMock.data.attributes.sustainability} />)

        const heading = screen.getAllByText(/Sostenibilidad/i)
        const description = screen.getByText(/El núcleo de nuestra estrategia es construir un futuro mejor/i)
        const moreInfoText = screen.getByText(/Conoce más sobre nuestras acciones de sostenibilidad/i)

        expect(heading).toBeTruthy()
        expect(description).toBeInTheDocument()
        expect(moreInfoText).toBeInTheDocument()
    })

})
