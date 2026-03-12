import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Technology from './Technology';
import { vi } from 'vitest';

// Mocking the components with specific test IDs and unique text
vi.mock('./components/TechnologyTitle/TechnologyTitle', () => {
  return {
    default: () => <div data-testid="TechnologyTitle">Mocked TechnologyTitle</div>
  };
});

vi.mock('./components/TechnologyCards/TechnologyCards', () => {
  return {
    default: () => <div data-testid="TechnologyCards">Mocked TechnologyCards</div>
  };
});


vi.mock('../../hooks/useFetchData/useFetchData', () => {
  return {
    useFetchData: () => ({
      data: {
        data: {
          attributes: {}
        }
      },
      loading: true
    })
  };
});

describe('Technology Component', () => {


  it('renders all child components', () => {
    render(
      <BrowserRouter>
        <Technology />
      </BrowserRouter>
    );

    const testCases = [
      { id: 'TechnologyTitle', content: 'Mocked TechnologyTitle' },
      { id: 'TechnologyCards', content: 'Mocked TechnologyCards' },
    ];

    testCases.forEach(({ id, content }) => {
      const element = screen.getByTestId(id);
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(content);
    });

  });
});
