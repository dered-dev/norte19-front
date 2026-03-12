import { render, screen } from "@testing-library/react";
import InvestorHomeNumbers from "./InvestorHomeNumbers"; // Adjust the path as needed
import { vi } from "vitest";
import React from "react";
import { InvestorsHomeMock } from "../../../mocks/InvestorsHomeMock";

// Mock the CountUp component
vi.mock("react-countup", () => {
    return {
        __esModule: true,
        default: ({ end }: { end: number }) => <span>{end}</span>, // Just display the end number
    };
});

// Mock the Fade component from react-awesome-reveal
vi.mock("react-awesome-reveal", () => ({
    Fade: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("InvestorHomeNumbers Component", () => {
    beforeEach(() => {
        render(<InvestorHomeNumbers data={InvestorsHomeMock.data.attributes.in_numbers} />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getByText(/Norte 19 en Números/i)).toBeInTheDocument();
    });

    it("renders all the stats with expected labels and values", () => {
        expect(screen.getByText(/Años en la industria/i)).toBeInTheDocument();
        expect(screen.getByText(/22/i)).toBeInTheDocument();
    });
});
