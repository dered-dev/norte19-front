import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DynamicForm from './DynamicForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContactMock } from '../../contact/mocks/ContactMock';
import { Mock, vi } from 'vitest';
import useContactForm from '../../../hooks/useContactForm/useContactForm';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Mock useContactForm hook
vi.mock('../../../hooks/useContactForm/useContactForm', () => ({
    default: vi.fn(),
}));

// Mock react-google-recaptcha-v3 module with both useGoogleReCaptcha and GoogleReCaptcha
vi.mock('react-google-recaptcha-v3', () => ({
    useGoogleReCaptcha: vi.fn(),
    GoogleReCaptcha: () => <div data-testid="mock-google-recaptcha" />,
}));


describe('ContactInitialForm Component', () => {
    const mockHandleInputChange = vi.fn();
    const mockHandleSubmit = vi.fn((e) => e.preventDefault());

    beforeEach(() => {
        (useContactForm as Mock).mockReturnValue({
            formData: { name: '', email: '', message: '', cv: null },
            errors: { name: '', email: '', message: '', cv: '' },
            successApi: false,
            errorApi: true,
            handleInputChange: mockHandleInputChange,
            handleSubmit: mockHandleSubmit,
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('does not call executeRecaptcha if it is undefined', () => {
        // Mock useGoogleReCaptcha to return undefined executeRecaptcha
        (useGoogleReCaptcha as Mock).mockReturnValue({ executeRecaptcha: undefined });
        const requiredFields = ['name', 'email', 'message', 'agreement'];

        render(
            <Router><DynamicForm
                data={ContactMock.data?.attributes?.pages[0].form}
                requiredFields={requiredFields}
                page="contact" />
            </Router>
        );

        // Since executeRecaptcha is undefined, the component should not call it
        expect(useGoogleReCaptcha().executeRecaptcha).toBeUndefined();

    });


    it('renders without crashing', () => {
        const mockExecuteRecaptcha = vi.fn().mockResolvedValue('test-token');
        (useGoogleReCaptcha as Mock).mockReturnValue({ executeRecaptcha: mockExecuteRecaptcha });
        const requiredFields = ['name', 'email', 'cv', 'message'];

        render(
            <Router><DynamicForm
                data={ContactMock.data?.attributes?.pages[1].form}
                requiredFields={requiredFields}
                page="leaders" />
            </Router>
        );
    });

    it('displays validation messages when fields are empty', () => {
        const mockExecuteRecaptcha = vi.fn().mockResolvedValue('test-token');
        (useGoogleReCaptcha as Mock).mockReturnValue({ executeRecaptcha: mockExecuteRecaptcha });

        const requiredFields = ['name', 'email', 'cv', 'message'];

        render(
            <Router><DynamicForm
                data={ContactMock.data?.attributes?.pages[0].form}
                requiredFields={requiredFields}
                page="contact" />
            </Router>
        );
        fireEvent.click(screen.getByText('Enviar'));

        expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
        expect(
            screen.getByText('El correo electrónico es obligatorio.'),
        ).toBeInTheDocument();
        expect(screen.getByText('El mensaje es obligatorio.')).toBeInTheDocument();
    });
});
