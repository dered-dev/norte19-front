import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeCarousel from './HomeCarousel'
import { vi } from 'vitest'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock'

// Mocking Swiper and SwiperSlide from 'swiper/react'
vi.mock('swiper/react', () => ({
    Swiper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    SwiperSlide: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

// Mocking the Icon component
vi.mock('../../../../components/Icon/Icon', () => ({
    Icon: ({ iconName }: { iconName: string }) => <span>{iconName}</span>
}))

describe('HomeCarousel Component', () => {

    it('renders the navigation arrows', () => {
        render(<HomeCarousel data={HomeMock.data.attributes.home_slider} />)

        // Check for left and right navigation buttons
        const leftArrow = screen.getByText('ChevronLeft')
        const rightArrow = screen.getByText('ChevronRight')

        expect(leftArrow).toBeInTheDocument()
        expect(rightArrow).toBeInTheDocument()
    })

    it('renders the heading in the carousel slides', () => {
        render(<HomeCarousel data={HomeMock.data.attributes.home_slider} />)

        // Check that the heading is rendered inside each slide
        const heading = screen.getAllByText(/Bienvenido a Norte 19/i)
        expect(heading).toHaveLength(5)
    })
})
