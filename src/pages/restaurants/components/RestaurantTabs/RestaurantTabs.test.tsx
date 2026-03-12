import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RestaurantTabs from './RestaurantTabs'
import { vi } from 'vitest'
import { RestaurantsPagesMock } from '../../mocks/RestaurantsPagesMock'

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: RestaurantsPagesMock,
            loading: true
        })
    };
});

describe('RestaurantTabs', () => {
    it('renders the correct number of tabs', () => {
        render(<RestaurantTabs />)

        // Check if the correct number of tabs is rendered
        RestaurantsPagesMock.data.forEach((tab) => {
            expect(screen.getAllByText(tab.attributes.title)).toBeTruthy()
        })
    })

    it('activates the correct tab and shows its content on click', () => {
        render(<RestaurantTabs />)

        // Check the initial state (first tab active)
        expect(screen.getAllByText(RestaurantsPagesMock.data[0].attributes.title)[0].closest('a')).toHaveClass('active')

        // Click on the second tab
        const secondTab = screen.getAllByText(RestaurantsPagesMock.data[1].attributes.title)
        fireEvent.click(secondTab[0])
    })

    it('only one tab is active at a time', () => {
        render(<RestaurantTabs />)

        const firstTab = screen.getAllByText(RestaurantsPagesMock.data[0].attributes.title)
        const secondTab = screen.getAllByText(RestaurantsPagesMock.data[1].attributes.title)

        // Click the second tab
        fireEvent.click(secondTab[0])

        // Check the first tab is not active
        expect(firstTab[0].closest('a')).not.toHaveClass('active')
        // Check the second tab is active
        expect(secondTab[0].closest('a')).toHaveClass('active')
    })
})
