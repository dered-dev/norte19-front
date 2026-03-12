import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CorporateBoard from './CorporateBoard'; // Adjust the path as needed
import { LeadersMock } from "../../leaders/mocks/Leaders";
import { vi } from "vitest";

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key === 'viewMore' ? 'Ver más' : 'Ver menos',
    }),
}));

describe('CorporateBoard', () => {
    it('renders the board members and toggles the modal', () => {
        render(<CorporateBoard leaders={LeadersMock.data.attributes.leaders} />);

        // Click on the first member's card to open the modal
        fireEvent.click(screen.getAllByLabelText('member-info')[0]);
    });

    it('toggles view more and less members', () => {
        render(<CorporateBoard leaders={LeadersMock.data.attributes.leaders} />);

        // Click "Ver más" button to view more members
        fireEvent.click(screen.getByText('Ver más'));

        // Click "Ver menos" button to hide additional members
        fireEvent.click(screen.getByText('Ver menos'));

        expect(screen.getByText('Ver más')).toBeInTheDocument();
    });
});
