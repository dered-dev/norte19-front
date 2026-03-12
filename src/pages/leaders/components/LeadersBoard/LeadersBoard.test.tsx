import React from "react";
import { render, screen } from '@testing-library/react';
import LeadersBoard from './LeadersBoard';
import { vi } from 'vitest';
import { LeadersMock } from "../../mocks/Leaders";

// Mock the CorporateBoard component
vi.mock('../../../shared/CorporateBoard/CorporateBoard', () => ({
    default: () => <div>Mocked CorporateBoard</div>,
}));

describe('LeadersBoard', () => {
    it('renders the CorporateBoard component', () => {
        render(<LeadersBoard data={LeadersMock.data.attributes.leaders} />);

        // Assert that the CorporateBoard component is rendered
        expect(screen.getByText('Mocked CorporateBoard')).toBeInTheDocument();
    });
});
