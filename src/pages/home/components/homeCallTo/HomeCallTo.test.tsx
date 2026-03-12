import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeCallTo from './HomeCallTo'

// Mock the Home data
import { HomeMock } from '../../mocks/HomeMock';

describe('HomeCallTo Component', () => {
    it('renders the image with the correct src and alt text', () => {
        render(<HomeCallTo data={HomeMock.data.attributes.Our_services.background_image.data.attributes.url} />)

        const imgElement = screen.getByAltText('home banner')

        expect(imgElement).toBeInTheDocument()
    })
})
