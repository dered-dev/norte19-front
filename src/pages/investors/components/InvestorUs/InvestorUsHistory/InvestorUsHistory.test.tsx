import React from "react";
import { render, screen } from "@testing-library/react";
import InvestorUsHistory from "./InvestorUsHistory";
import { vi } from "vitest";
import { InvestorsUsMock } from "../../../mocks/InvestorsUsMock";

// Mock the Fade component from react-awesome-reveal
vi.mock("react-awesome-reveal", () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("InvestorUsHistory Component", () => {
    beforeEach(() => {
        render(<InvestorUsHistory data={InvestorsUsMock.data.attributes.history} />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getAllByText(/Historia/i)).toBeTruthy();
    });

});
