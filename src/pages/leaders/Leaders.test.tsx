import React from "react";
import { render, screen } from '@testing-library/react';
import Leaders from './Leaders';
import { vi } from 'vitest';
import { LeadersMock } from "./mocks/Leaders";

// Mocking the child components using vi.mock
vi.mock('./components/LeadersHeader/LeadersHeader', () => ({
    default: () => <div>Mock LeadersHeader</div>,
}));

vi.mock('./components/LeadersBoard/LeadersBoard', () => ({
    default: () => <div>Mock LeadersBoard</div>,
}));


vi.mock('./components/LeadersBoardSections/LeadersBoardSections', () => ({
    default: () => <div>Mock LeadersBoardSections</div>,
}));

vi.mock('./components/LeadersForm/LeadersForm', () => ({
    default: () => <div>Mock LeadersForm</div>,
}));

vi.mock('../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: LeadersMock,
            loading: true
        })
    };
});


describe('Leaders', () => {
    it('renders all child components correctly', () => {
        render(<Leaders />);

        // Check if all mocked child components are rendered
        expect(screen.getByText('Mock LeadersHeader')).toBeInTheDocument();
        expect(screen.getByText('Mock LeadersBoard')).toBeInTheDocument();
        expect(screen.getByText('Mock LeadersBoardSections')).toBeInTheDocument();
        expect(screen.getByText('Mock LeadersForm')).toBeInTheDocument();
    });
});
