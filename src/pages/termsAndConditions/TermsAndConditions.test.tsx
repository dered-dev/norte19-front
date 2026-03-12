import React from 'react';
import { render, screen } from '@testing-library/react';
import TermsAndConditions from './TermsAndConditions';
import ContentPolitics from '../shared/ContentPolitics/ContentPolitics';
import { vi } from 'vitest';

// Mock the `ContentPolitics` component
vi.mock('../shared/ContentPolitics/ContentPolitics', () => ({
  default: vi.fn(() => <div>Mocked contentTermsPoliticsElement</div>)
}));

describe('TermsAndConditions component', () => {
  it('should render the ContentPolitics component with the correct url', () => {
    render(<TermsAndConditions />);

    // Check if the mocked ContentPolitics component is rendered
    const contentTermsPoliticsElement = screen.getByText('Mocked contentTermsPoliticsElement');
    expect(contentTermsPoliticsElement).toBeInTheDocument();

    // Verify that the ContentPolitics component was called with the correct prop
    expect(ContentPolitics).toHaveBeenCalledWith(
      { url: 'api/terms-and-condition' },
      {}
    );
  });
});
