import React from "react";
import { render, screen } from '@testing-library/react';
import LeadersCulture from './LeadersCulture';
import { LeadersMock } from "../../../mocks/Leaders";


describe('LeadersCulture', () => {
    it('renders the organizational culture section', () => {
        render(<LeadersCulture data={LeadersMock.data.attributes.sections[0]} />);

        // Check if the heading is rendered
        expect(screen.getByText('Cultura organizacional')).toBeInTheDocument();

        // Check if the paragraph is rendered
        expect(screen.getByText(/promovemos una cultura organizacional/i)).toBeInTheDocument();
    });
});
