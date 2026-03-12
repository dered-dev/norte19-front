import { render, screen } from "@testing-library/react";
import InvestorUsHeader from "./InvestorUsHeader";
import { vi } from "vitest";
import React from "react";
import { InvestorsHeaderMock } from "../../../mocks/InvestorsHeaderMock";

// Mock the Fade component from react-awesome-reveal
vi.mock("react-awesome-reveal", () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("InvestorUsHeader Component", () => {
    beforeEach(() => {
        render(<InvestorUsHeader data={InvestorsHeaderMock.data.attributes.header} title="Acerca de" />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getByText(/Acerca de/i)).toBeInTheDocument();
    });


    it("displays stock information with correct values", () => {
        expect(screen.getByText(/Información de la acción/i)).toBeInTheDocument();
    });
});
