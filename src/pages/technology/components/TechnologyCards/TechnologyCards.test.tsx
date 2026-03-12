import React from "react";
import { render, screen } from '@testing-library/react';
import TechnologyCards from './TechnologyCards';
import { Section } from "../../interfaces/Technology";

describe('TechnologyCards Component', () => {
    const mockSection: Section = {
        title: "Technology Section Title",
        cards: [
            {
                id: 1, title: 'Card 1',
                icon: ""
            },
            {
                id: 2, title: 'Card 2',
                icon: ""
            }
        ],
        id: 0
    };

    it('renders section title', () => {
        render(<TechnologyCards section={mockSection} />);
        expect(screen.getByText(mockSection.title)).toBeInTheDocument();
    });


});
