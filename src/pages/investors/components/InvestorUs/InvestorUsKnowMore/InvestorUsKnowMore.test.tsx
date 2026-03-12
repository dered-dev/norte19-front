import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InvestorUsKnowMore from "./InvestorUsKnowMore";
import { vi } from "vitest";
import React from "react";
import { InvestorsUsMock } from "../../../mocks/InvestorsUsMock";

// Mock the Zoom component from react-awesome-reveal
vi.mock("react-awesome-reveal", () => ({
    Zoom: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("InvestorUsKnowMore Component", () => {
    beforeEach(() => {
        // MemoryRouter is used to mock the Link component from react-router-dom
        render(
            <MemoryRouter>
                <InvestorUsKnowMore data={InvestorsUsMock.data.attributes.factsheet} />
            </MemoryRouter>
        );
    });

    it("renders the component without crashing", () => {
        expect(screen.getByText(/Conoce más de Norte 19 Factsheet/i)).toBeInTheDocument();
    });

});
