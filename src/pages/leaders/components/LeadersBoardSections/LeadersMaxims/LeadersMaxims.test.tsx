import React from "react";
import { render, screen } from '@testing-library/react';
import LeadersMaxims from './LeadersMaxims';
import { LeadersMock } from "../../../mocks/Leaders";


describe('LeadersMaxims', () => {
    it('renders the LeadersMaxims component correctly', () => {
        render(<LeadersMaxims data={LeadersMock.data.attributes.sections[3]} />);

        // Check if the image is rendered
        expect(screen.getByAltText('operación')).toBeInTheDocument();

        // Check if the section title is rendered
        expect(screen.getByText('9 máximas')).toBeInTheDocument();

    });
});
