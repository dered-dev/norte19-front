import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { vi } from 'vitest';

// Mocking the components with specific test IDs and unique text
vi.mock('./components/homeCarousel/HomeCarousel', () => {
    return {
        default: () => <div data-testid="HomeCarousel">Mocked Home Carousel</div>
    };
});

vi.mock('./components/homeAbout/HomeAbout', () => {
    return {
        default: () => <div data-testid="HomeAbout">Mocked Home About</div>
    };
});

vi.mock('./components/homeServices/HomeServices', () => {
    return {
        default: () => <div data-testid="HomeServices">Mocked Home Services</div>
    };
});

vi.mock('./components/homeMoreServices/HomeMoreServices', () => {
    return {
        default: () => <div data-testid="HomeMoreServices">Mocked Home More Services</div>
    };
});

vi.mock('./components/homeCallToServices/HomeCallToServices', () => {
    return {
        default: () => <div data-testid="HomeCallToServices">Mocked Home Call To Services</div>
    };
});

vi.mock('./components/homeSustainability/HomeSustainability', () => {
    return {
        default: () => <div data-testid="HomeSustainability">Mocked Home Sustainability</div>
    };
});

vi.mock('../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: {
                data: {
                    attributes: {
                        home_slider: [],
                        About_us: {},
                        Our_services: {},
                        sustainability: {},
                    }
                }
            },
            loading: true
        })
    };
});

describe('Home Component', () => {


    it('renders all child components', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const testCases = [
            { id: 'HomeCarousel', content: 'Mocked Home Carousel' },
            { id: 'HomeAbout', content: 'Mocked Home About' },
            { id: 'HomeServices', content: 'Mocked Home Services' },
            { id: 'HomeMoreServices', content: 'Mocked Home More Services' },
            { id: 'HomeCallToServices', content: 'Mocked Home Call To Services' },
            { id: 'HomeSustainability', content: 'Mocked Home Sustainability' }
        ];

        testCases.forEach(({ id, content }) => {
            const element = screen.getByTestId(id);
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent(content);
        });

    });
});
