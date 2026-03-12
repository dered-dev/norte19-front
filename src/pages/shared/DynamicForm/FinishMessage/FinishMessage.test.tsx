import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import FinishMessage from './FinishMessage'

// Mock the useTranslation hook
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key === 'sendSuccessForm' ? 'Success message' : 'Error message'
    })
}))

describe('FinishMessage Component', () => {
    it('renders success message when success is true', () => {
        render(<FinishMessage success={true} error={false} />)

        const successMessage = screen.getByText('Success message')
        expect(successMessage).toBeInTheDocument()
        expect(successMessage).toHaveClass('background-success')
    })

    it('renders error message when error is true', () => {
        render(<FinishMessage success={false} error={true} />)

        const errorMessage = screen.getByText('Error message')
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveClass('background-error')
    })

    it('does not render any message when both success and error are false', () => {
        render(<FinishMessage success={false} error={false} />)

        expect(screen.queryByText('Success message')).not.toBeInTheDocument()
        expect(screen.queryByText('Error message')).not.toBeInTheDocument()
    })
})
