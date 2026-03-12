import React from "react";
import { render, screen } from '@testing-library/react';
import LeadersMission from './LeadersMission';
import { LeadersMock } from "../../../mocks/Leaders";

describe('LeadersMission', () => {
    it('renders the LeadersMission component correctly', () => {
        render(<LeadersMission data={LeadersMock.data.attributes.sections[1]} />);

        // Check if the Mission section is rendered
        expect(screen.getByText('Misión')).toBeInTheDocument();
        expect(screen.getByText(/Nuestra misión es proporcionar soluciones excepcionales/i)).toBeInTheDocument();

    });
});
