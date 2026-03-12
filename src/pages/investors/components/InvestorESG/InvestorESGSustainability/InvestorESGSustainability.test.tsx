import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InvestorESGSustainability from './InvestorESGSustainability'; // Adjust the import path as needed
import { InvestorESGSustainabilityMock } from "../../../mocks/InvestorsESGSustainabilityMock";

// Mock individual components
vi.mock('./InvestorESGSustainabilitySections/InvestorESGSustainabilitySections', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Sections</div>,
    };
});


vi.mock('./InvestorESGSustainabilityGoals/InvestorESGSustainabilityGoals', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Goals</div>,
    };
});

vi.mock('./InvestorESGSustainabilityPillars/InvestorESGSustainabilityPillars', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Pillars</div>,
    };
});

vi.mock('./InvestorESGSustainabilityConservation/InvestorESGSustainabilityConservation', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Conservation</div>,
    };
});

vi.mock('./InvestorESGSustainabilityAchievements/InvestorESGSustainabilityAchievements', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Achievements</div>,
    };
});

vi.mock('./InvestorESGSustainabilityCertifications/InvestorESGSustainabilityCertifications', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability Certifications</div>,
    };
});

vi.mock('./InvestorESGSustainabilityFaqs/InvestorESGSustainabilityFaqs', () => {
    return {
        default: () => <div>Mock Investor ESG Sustainability FAQs</div>,
    };
});

vi.mock('../../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorESGSustainabilityMock,
            loading: true
        })
    };
});

describe('InvestorESGSustainability', () => {
    it('renders all child components', () => {
        render(<InvestorESGSustainability />);

        // Check if all mocked components are rendered
        expect(screen.getByText(/Mock Investor ESG Sustainability Sections/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability Goals/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability Pillars/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability Conservation/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability Achievements/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability Certifications/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Investor ESG Sustainability FAQs/i)).toBeInTheDocument();
    });
});
