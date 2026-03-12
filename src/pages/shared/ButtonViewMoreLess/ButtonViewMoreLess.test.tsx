import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonViewMoreLess from './ButtonViewMoreLess'
import { vi } from 'vitest'

// Mock the useTranslation hook
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key === 'viewMore' ? 'View More' : 'View Less'
    })
}))

describe('ButtonViewMoreLess', () => {
    it('should render and display "View More" when viewMore is false', () => {
        const setViewMore = vi.fn()

        render(<ButtonViewMoreLess viewMore={false} setViewMore={setViewMore} />)

        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('View More')
    })

    it('should render and display "View Less" when viewMore is true', () => {
        const setViewMore = vi.fn()

        render(<ButtonViewMoreLess viewMore={true} setViewMore={setViewMore} />)

        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('View Less')
    })

    it('should call setViewMore with the opposite value when clicked', () => {
        const setViewMore = vi.fn()

        render(<ButtonViewMoreLess viewMore={false} setViewMore={setViewMore} />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(setViewMore).toHaveBeenCalledWith(true)
    })
})
