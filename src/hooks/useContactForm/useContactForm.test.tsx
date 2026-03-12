import React from 'react';
import { act, renderHook } from '@testing-library/react';
import useContactForm from './useContactForm';
import axios from 'axios';
import { vi } from 'vitest';
vi.mock('axios');

describe('useContactForm', () => {
    const initialData = {
        name: '',
        email: '',
        message: '',
        cv: null,
        agreement: '',
        lastname: '',
        phone: '',
    };

    it('should update formData when input changes', () => {
        const { result } = renderHook(() => useContactForm(initialData));

        act(() => {
            result.current.handleInputChange({
                target: { name: 'name', value: 'John Doe', type: 'text' },
            } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formData.name).toBe('John Doe');
    });

    it('should update file input correctly', () => {
        const { result } = renderHook(() => useContactForm(initialData));

        const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });

        act(() => {
            result.current.handleInputChange({
                target: {
                    name: 'cv',
                    type: 'file',
                    files: [file],
                },
            } as unknown as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formData.cv).toBe(file);
    });

    it('should update file input correctly clear cv', () => {
        const { result } = renderHook(() => useContactForm(initialData));

        act(() => {
            result.current.handleInputChange({
                target: {
                    name: 'cv-clear',
                    type: 'file',
                    files: null,
                },
            } as unknown as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formData.cv).toBe(null);
    });

    it('should set errors for invalid form fields', () => {
        const { result } = renderHook(() => useContactForm(initialData, ['name', 'email', 'message', 'cv', 'agreement', 'lastname', 'phone']));

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { return } } as React.FormEvent<HTMLFormElement>, "token");
        });

        expect(result.current.errors.name).toBe('El nombre es obligatorio.');
        expect(result.current.errors.email).toBe('El correo electrónico es obligatorio.');
        expect(result.current.errors.message).toBe('El mensaje es obligatorio.');
        expect(result.current.errors.cv).toBe('El CV es obligatorio.');
        expect(result.current.errors.agreement).toBe('Selecciona un convenio.');
    });

    it('should validate email format', () => {
        const { result } = renderHook(() => useContactForm({ ...initialData, name: 'John', email: 'invalid email' }, ['email']));

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { return } } as React.FormEvent<HTMLFormElement>, "token");
        });

        expect(result.current.errors.email).toBe('Formato de correo electrónico no válido.');
    });

    it('should submit the form when all fields are valid', () => {

        vi.spyOn(axios, 'post').mockImplementation(() => {
            return Promise.resolve({
                status: 200
            });
        });

        const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
        const { result } = renderHook(() =>
            useContactForm({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello!',
                cv: file,
                agreement: '1',
                lastname: 'Doe',
                phone: '(33) 1234 5678',
            }, ['name', 'email', 'message', 'cv', 'agreement', 'other', 'lastname', 'phone'])
        );

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { return } } as React.FormEvent<HTMLFormElement>, "token");
        });

        expect(result.current.errors).toEqual({});
    });

    it('should submit the form when all fields are valid with lastname and phone', () => {

        vi.spyOn(axios, 'post').mockRejectedValueOnce(true);

        const { result } = renderHook(() =>
            useContactForm({
                name: 'John Doe',
                email: 'jonh@example.com',
            }, ['name', 'email'])
        );

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { return } } as React.FormEvent<HTMLFormElement>, "token");
        });

        expect(result.current.errors).toEqual({});
    });

});
