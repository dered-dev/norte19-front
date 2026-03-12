import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import { vi } from 'vitest';
import { ContactMock } from './mocks/ContactMock';

vi.mock('../../hooks/useFetchData/useFetchData', () => {
  return {
    useFetchData: () => ({
      data: ContactMock,
      loading: true
    })
  };
});


describe('Contact Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );
  });


  it('renders all contact types as tabs', () => {
    ContactMock.data.attributes.pages.forEach((tab) => {
      expect(screen.getByText(tab.tab)).toBeInTheDocument();
    });
  });

  it('toggles active tab when clicked', () => {
    const firstTab = screen.getByText(ContactMock.data.attributes.pages[0].tab);
    const secondTab = screen.getByText(ContactMock.data.attributes.pages[1].tab);

    // Click the first tab
    fireEvent.click(firstTab);
    expect(firstTab).toHaveClass('active'); // Check if first tab is active
    expect(secondTab).not.toHaveClass('active'); // Check if second tab is not active

    // Click the second tab
    fireEvent.click(secondTab);
    expect(secondTab).toHaveClass('active'); // Check if second tab is active
    expect(firstTab).not.toHaveClass('active'); // Check if first tab is not active
  });
});
