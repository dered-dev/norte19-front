import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InvestorESGSustainabilityGoals from './InvestorESGSustainabilityGoals'; // Adjust the path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityGoals', () => {
    it('renders the goals section correctly', () => {
        render(<InvestorESGSustainabilityGoals section={InvestorESGSustainabilityMock.data.attributes.goals} />);

        // Check if the main title is rendered
        expect(screen.getByText(/Metas al 2025/i)).toBeInTheDocument();

    });
});
