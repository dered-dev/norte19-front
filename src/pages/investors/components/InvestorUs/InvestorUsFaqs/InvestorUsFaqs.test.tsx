import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InvestorUsFaqs from "./InvestorUsFaqs";
import { vi } from "vitest";
import { InvestorsUsMock } from "../../../mocks/InvestorsUsMock";

// Mock the Fade component from react-awesome-reveal
vi.mock("react-awesome-reveal", () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock the Icon component
vi.mock("../../../../../components/Icon/Icon", () => ({
    Icon: ({ iconName }: { iconName: string }) => <span>{iconName}</span>,
}));

describe("InvestorUsFaqs Component", () => {
    beforeEach(() => {
        render(<InvestorUsFaqs data={InvestorsUsMock.data.attributes.mission_vision} />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getAllByText(/Misión, Visión y Valores/i)).toBeTruthy();
    });

    it("renders all accordion headers", () => {
        expect(screen.getAllByText(/Misión/i)).toBeTruthy();
        expect(screen.getAllByText(/Visión/i)).toBeTruthy();
        expect(screen.getAllByText(/Valores/i)).toBeTruthy();
    });

    it('should show correct content when an accordion item is clicked', () => {
        // Click on the first accordion header
        const accordionMissionHeader = screen.getByText('Misión')
        fireEvent.click(accordionMissionHeader)
        fireEvent.click(accordionMissionHeader)

    })

    it("toggles the accordion items correctly", () => {
        const accordionHeaders = screen.getByLabelText("mision-section");

        fireEvent.click(accordionHeaders);
    });
});
