import React from "react";
import { render, screen } from '@testing-library/react';
import LeadersHeader from './LeadersHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LeadersMock } from "../../mocks/Leaders";
import { vi } from "vitest";

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


describe('LeadersHeader', () => {
    it('renders the LeadersHeader component correctly', () => {
        render(
            <Router>
                <LeadersHeader data={LeadersMock.data.attributes.header} />
            </Router>
        );

        // Check if the title is rendered
        expect(screen.getByText('Perfiles de directivos')).toBeInTheDocument();

        // Check if the paragraph is rendered
        expect(screen.getByText(/Nuestros directivos son líderes experimentados/i)).toBeInTheDocument();

        // Check if the breadcrumbs are rendered
        expect(screen.getByRole('link', { name: /Inicio/i })).toBeInTheDocument();
    });
});
