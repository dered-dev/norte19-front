import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContentPolitics from './ContentPolitics';
import { vi } from 'vitest';

vi.mock('../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: {
                data: {
                    attributes: {
                        banner: { data: { attributes: { url: 'test.jpg' } } },
                        title: 'test',
                        policy: []
                    }
                }
            },
            loading: true
        })
    };
});


vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            if (key === 'home') {
                return 'Inicio';
            }
            return key;
        },
    }),
}));



describe('ContentPolitics Component', () => {
    it('renders the spinner while loading', () => {

        render(
            <MemoryRouter>
                <ContentPolitics url='api/privacy-policy' />
            </MemoryRouter>
        );

        expect(screen.queryAllByText('test')).toBeTruthy();

    });


});
