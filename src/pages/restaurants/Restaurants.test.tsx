import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Restaurants from './Restaurants'

// Mock components
vi.mock('./components/RestaurantHeader/RestaurantHeader', () => {
    return {
        default: () => <div>Mock Restaurant Header</div>
    };
})

vi.mock('./components/RestaurantTabs/RestaurantTabs', () => {
    return {
        default: () => <div>Mock Restaurant Tabs</div>
    };
})

vi.mock('./components/RestaurantFooter/RestaurantFooter', () => {
    return {
        default: () => <div>Mock Restaurant Footer</div>
    };
})

vi.mock('../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: {
                data: {
                    attributes: {
                        header: {},
                        footer: {}
                    }
                }
            },
            loading: true
        })
    };
});

describe('Restaurants', () => {
    it('renders RestaurantHeader', () => {
        render(<Restaurants />)

        // Check if the header and tabs are rendered
        expect(screen.getByText('Mock Restaurant Header')).toBeInTheDocument()
        expect(screen.getByText('Mock Restaurant Footer')).toBeInTheDocument()

    })
})
