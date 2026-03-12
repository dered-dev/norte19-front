import React from 'react'
import { render, screen } from '@testing-library/react'
import FallbackSpinner from './FallbackSpinner'

describe('FallbackSpinner Component', () => {
    it('renders the preloader div', () => {
        render(<FallbackSpinner />)

        const preloaderElement = screen.getByLabelText('preloader')
        expect(preloaderElement).toBeInTheDocument()

        expect(preloaderElement).toHaveClass('preloader')
    })
})
