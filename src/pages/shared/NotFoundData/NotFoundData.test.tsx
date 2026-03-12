import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, vi } from 'vitest'
import NotFoundData from './NotFoundData'

// ** Mock i18n
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                error404Subtitle: 'The page you are looking for was not found.',
                goToHome: 'Go to Home',
            }
            return translations[key] || key
        },
    }),
}))

describe('NotFoundData Component', () => {
    it('should render the 404 image', () => {
        render(
            <BrowserRouter>
                <NotFoundData />
            </BrowserRouter>
        )
        const imgElement = screen.getByAltText('404')
        expect(imgElement).toBeInTheDocument()
    })

    it('not should render the 404 image', () => {
        render(
            <BrowserRouter>
                <NotFoundData loading={false} data={{ id: 1 }} />
            </BrowserRouter>
        )
        const imgElement = screen.queryByAltText('404')
        expect(imgElement).not.toBeInTheDocument()
    })
})
