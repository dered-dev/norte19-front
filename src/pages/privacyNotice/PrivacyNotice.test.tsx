import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyNotice from './PrivacyNotice';
import ContentPolitics from '../shared/ContentPolitics/ContentPolitics';
import { vi } from 'vitest';

// Mock the `ContentPolitics` component
vi.mock('../shared/ContentPolitics/ContentPolitics', () => ({
  default: vi.fn(() => <div>Mocked ContentPolitics</div>)
}));

describe('PrivacyNotice component', () => {
  it('should render the ContentPolitics component with the correct url', () => {
    render(<PrivacyNotice />);

    // Check if the mocked ContentPolitics component is rendered
    const contentPoliticsElement = screen.getByText('Mocked ContentPolitics');
    expect(contentPoliticsElement).toBeInTheDocument();

    // Verify that the ContentPolitics component was called with the correct prop
    expect(ContentPolitics).toHaveBeenCalledWith(
      { url: 'api/privacy-policy' },
      {}
    );
  });
});
