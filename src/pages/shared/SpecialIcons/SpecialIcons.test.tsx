import React from 'react';
import { render, screen } from '@testing-library/react';
import SpecialIcons from './SpecialIcons';

describe('SpecialIcons component', () => {
    it('renders the correct icon based on iconName prop', () => {
        render(<SpecialIcons iconName="icon-operation" />);
        const imgElement = screen.getByAltText('icon-operation icon');
        expect(imgElement).toBeInTheDocument();
    });

    it('renders the default icon if iconName is not found', () => {
        render(<SpecialIcons iconName="non-existent-icon" />);
        const imgElement = screen.getByAltText('non-existent-icon icon');
        expect(imgElement).toBeInTheDocument();
    });

});
