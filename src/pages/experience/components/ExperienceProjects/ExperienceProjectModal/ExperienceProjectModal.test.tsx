import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import ExperienceProjectModal from './ExperienceProjectModal'
import { ExperienceMock } from '../../../mocks/ExperienceMock'


describe('ExperienceProjectModal', () => {
    const toggleMock = vi.fn()
    const mockProject = ExperienceMock.data.attributes.proyects[0]

    it('renders the modal with project details when open', () => {
        render(
            <ExperienceProjectModal
                modal={true}
                toggle={toggleMock}
                selectProject={mockProject}
            />
        )

        // Check if the modal image is rendered
        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('src', mockProject.image.data.attributes.url)

        // Check if the project title is rendered
        expect(screen.getByText(mockProject.proyect)).toBeInTheDocument()

    })

    it('calls toggle function when close button is clicked', async () => {
        render(
            <ExperienceProjectModal
                modal={true}
                toggle={toggleMock}
                selectProject={mockProject}
            />
        )

        const closeButton = screen.getByRole('button', { name: /close/i })
        await userEvent.click(closeButton)

        expect(toggleMock).toHaveBeenCalledTimes(1)
    })
})
