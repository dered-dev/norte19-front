import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as icons from 'react-bootstrap-icons';
import React from 'react';
import { Icon } from './Icon'; // Assuming the component is in the same directory

describe('Icon Component', () => {
  it('renders the correct icon based on iconName prop', () => {
    // Choose an existing icon from react-bootstrap-icons for testing
    const TestIconName = 'ArrowRight'; // This should be a valid key in the `icons` object

    // Render the Icon component
    const { container } = render(
      <Icon iconName={TestIconName as keyof typeof icons} size={24} />,
    );

    // Verify that the correct icon is rendered
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '24');
  });

  it('passes additional props to the icon component', () => {
    const TestIconName = 'test'; // Another valid key
    const { container } = render(
      <Icon
        iconName={TestIconName as keyof typeof icons}
        size={32}
        color="red"
      />,
    );

    // Check if the correct size and color props are applied
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });
});
