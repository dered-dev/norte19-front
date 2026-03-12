import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InvestorESGSustainabilityCertifications from './InvestorESGSustainabilityCertifications'; // Adjust the path as needed
import { InvestorESGSustainabilityMock } from "../../../../mocks/InvestorsESGSustainabilityMock";

describe('InvestorESGSustainabilityCertifications', () => {
    it('renders the certifications section correctly', () => {
        render(<InvestorESGSustainabilityCertifications data={InvestorESGSustainabilityMock.data.attributes.certification_catalog} />);

        // Check if the section title is in the document
        expect(screen.getByText(/Portafolio de Certificaciones/i)).toBeInTheDocument();

        // Check if images are rendered
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1); // Adjust this count based on how many images are rendered

        // Check if images have the correct alt text
        images.forEach((img) => {
            expect(img).toHaveAttribute('alt', 'banner sustainability');
        });
    });
});
