import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeLanguage from './ChangeLanguage';
import { vi } from 'vitest';

describe('ChangeLanguage Component', () => {

    // Mock window.location.reload
    const reloadMock = vi.fn();
    // Create a mock for window.location
    const originalLocation = window.location;
    window.location = { ...originalLocation, reload: reloadMock };

    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();

    });

    it('should render with the default language', () => {

        render(<ChangeLanguage />);
        const languageLabel = screen.getByText('Español');
        expect(languageLabel).toBeInTheDocument();
        expect(screen.getByAltText('español')).toBeInTheDocument();
    });

    it('should toggle the dropdown on mobile view', () => {

        render(<ChangeLanguage />);

        const mobileDropdown = screen.getByLabelText('change-language');
        fireEvent.click(mobileDropdown);
        expect(screen.getByLabelText('item-show-language')).toBeInTheDocument();
    });

    it('should change the language to English and reload the page', () => {


        render(<ChangeLanguage />);
        const mobileDropdown = screen.getByLabelText('change-language');
        fireEvent.click(mobileDropdown);

        const englishLabel = screen.getByLabelText('item-show-language');
        fireEvent.click(englishLabel);

        // Assert localStorage is updated
        expect(localStorage.getItem('language')).toBe('en');
        expect(reloadMock).toHaveBeenCalled(); // Ensure reload is called
    });

    it('should open the mobile dropdown when clicked', () => {
        render(<ChangeLanguage />);

        const mobileDropdown = screen.getByLabelText('change-language');
        fireEvent.click(mobileDropdown);

        // Check if the other language option is displayed
        const englishOption = screen.getByLabelText('item-show-language');
        expect(englishOption).toBeInTheDocument();
    });

    it('should change the language to English and reload the page from desktop', () => {
        const mockId = "language"
        window.localStorage.setItem(mockId, "en");


        render(<ChangeLanguage />);

        // Open the desktop dropdown
        const dropdownToggle = screen.getByLabelText('change-language');
        fireEvent.click(dropdownToggle);

        // Click on the other language option
        const englishOption = screen.getByLabelText('item-show-language-desktop');
        fireEvent.click(englishOption);

        // Assert localStorage is updated
        expect(localStorage.getItem('language')).toBe('es-mx');
        expect(reloadMock).toHaveBeenCalled(); // Ensure reload is called
    });
});
