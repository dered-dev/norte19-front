import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CorporateBoardModal from './CorporateBoardModal'; // Adjust the path as needed
import { vi } from "vitest";
import { LeadersMock } from "../../../leaders/mocks/Leaders";

describe('CorporateBoardModal', () => {
    it('renders the modal with employee information', () => {
        render(
            <CorporateBoardModal
                modal={true}
                toggle={vi.fn()}
                selectBoard={LeadersMock.data.attributes.leaders[0]}
            />
        );

        // Check if the modal is rendered with employee details
        expect(screen.getByText(LeadersMock.data.attributes.leaders[0].name)).toBeInTheDocument();
    });

    it('does not render the modal when modal prop is false', () => {
        render(
            <CorporateBoardModal
                modal={false}
                toggle={vi.fn()}
                selectBoard={LeadersMock.data.attributes.leaders[0]}
            />
        );

        // Check that the modal is not rendered
        expect(screen.queryByText((LeadersMock.data.attributes.leaders[0].name))).not.toBeInTheDocument();
    });

    it('calls toggle function when close button is clicked', () => {
        const toggleMock = vi.fn();

        render(
            <CorporateBoardModal
                modal={true}
                toggle={toggleMock}
                selectBoard={LeadersMock.data.attributes.leaders[0]}
            />
        );

        const buttonNode = screen.getAllByLabelText("Close")[0];
        fireEvent.click(buttonNode)

        // Check if the toggle function was called
        expect(toggleMock).toHaveBeenCalledTimes(1);
    });
});
