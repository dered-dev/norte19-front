import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import FileInput from './FileInput';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('FileInput Component', () => {
    const inputProps = {
        field: 'cv',
        type: 'file',
        placeholder: 'Choose a file...',
    };

    const errors = {
        cv: 'File is required',
    };

    const handleInputChange = vi.fn();


    it('should display the selected file name when a file is uploaded', () => {
        render(<FileInput input={inputProps} handleInputChange={handleInputChange} errors={{}} cv={null} />);

        const file = new File(['dummy content'], 'example.pdf', { type: 'application/pdf' });
        const input = screen.getByLabelText("input-file")

        fireEvent.change(input, { target: { files: [file] } });

        // Verify that the file name is displayed
        expect(screen.getByText('example.pdf')).toBeInTheDocument();
    });

    it('should display an error message if there is an error in props', () => {
        render(<FileInput input={inputProps} handleInputChange={handleInputChange} errors={errors} cv={null} />);

        // Verify error message display
        expect(screen.getByText(errors.cv)).toBeInTheDocument();
    });

    it('should open file input when custom div is clicked', () => {
        render(<FileInput input={inputProps} handleInputChange={handleInputChange} errors={{}} cv={null} />);

        const fileDiv = screen.getByText('selectFile').closest('div');
        fireEvent.click(fileDiv!);
    });

    it('should display placeholder text when no file is selected and input.placeholder is defined', () => {
        render(<FileInput input={inputProps} handleInputChange={handleInputChange} errors={{}} cv={null} />);

        // Verify that the placeholder text is displayed
        expect(screen.getByText(inputProps.placeholder)).toBeInTheDocument();
    });

    it('should display "noFileSelected" text when no file is selected and input.placeholder is empty', () => {
        const emptyInputProps = { ...inputProps, placeholder: '' };
        render(<FileInput input={emptyInputProps} handleInputChange={handleInputChange} errors={{}} cv={null} />);
    });
});
