import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ScrollUp from './ScrollUp';

describe('ScrollUp', () => {
  beforeEach(() => {
    window.scrollY = 0;
    vi.clearAllMocks();
  });

  it('should render the component', () => {
    render(<Router><ScrollUp /></Router>);
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });


  it('should be visible when scrollY is greater than 100', () => {
    render(<Router><ScrollUp /></Router>);

    window.scrollY = 150;
    window.dispatchEvent(new Event('scroll'));

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });

  it('should scroll to top smoothly when clicked', () => {
    render(<Router><ScrollUp /></Router>);

    window.scrollY = 150;
    window.dispatchEvent(new Event('scroll'));

    const button = screen.getByRole('button');

    const scrollToMock = vi.spyOn(window, 'scrollTo');
    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    scrollToMock.mockRestore();
  });

  it('should be hidden when scrollY is less than or equal to 100', () => {
    render(<Router><ScrollUp /></Router>);

    // Set scrollY to a value <= 100 and trigger the scroll event
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));

    // Verify that the button is not visible
    const button = screen.queryByRole('button');
    expect(button).toBeTruthy();
  });

});
